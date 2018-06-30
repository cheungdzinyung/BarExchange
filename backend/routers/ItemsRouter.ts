import * as express from "express";
import * as multer from "multer";
import * as path from "path";

import { IItemData } from "../interfaces";
import ItemsService from "../services/ItemsService";

const storage = multer.memoryStorage();
const upload = multer({ dest: "../storage/items", storage });

export default class ItemsRouter {
  private itemsService: ItemsService;

  constructor(itemsService: ItemsService) {
    this.itemsService = itemsService;
  }

  public router() {
    const router = express.Router();

    router.post("/", upload.single("itemPhoto"), this.add.bind(this));

    router.get("/:id", this.get.bind(this));
    router.get("/", this.getAll.bind(this));
    router.get("/image/:id", this.getImage.bind(this));
    router.get("/update/itemlog", this.updateLogPrice.bind(this));
    router.get("/event/pricedrop", this.priceDrop.bind(this));
    router.get("/maxmin", this.getMaxMin.bind(this));

    router.put("/:id", upload.single("itemPhoto"), this.update.bind(this));

    return router;
  }

  public add(req: express.Request, res: express.Response) {
    return this.itemsService
      .add(req.body, req.file)
      .then((result: IItemData) => {
        res.status(201).json(result);
      })
      .catch((err: express.Errback) => {
        res.status(500).json({ status: "failed" });
      });
  }

  public get(req: express.Request, res: express.Response) {
    return this.itemsService
      .get(req.params.id)
      .then((result: IItemData) => {
        res.status(200).json(result);
      })
      .catch((err: express.Errback) => {
        res.status(500).json({ status: "failed" });
      });
  }

  public getAll(req: express.Request, res: express.Response) {
    if (req.query.fluctuatingPrices !== undefined) {
      if (req.query.category !== undefined) {
        return this.itemsService
          .getAllInCatWithFluctuatingPrices(
            req.query.category,
            req.query.fluctuatingPrices
          )
          .then((result: any) => {
            res.status(200).json(result);
          })
          .catch((err: express.Errback) => {
            res.status(500).json({ status: "failed" });
          });
      } else {
        return this.itemsService
          .getAllWithFluctuatingPrices(req.query.fluctuatingPrices)
          .then((result: any) => {
            res.status(200).json(result);
          })
          .catch((err: express.Errback) => {
            res.status(500).json({ status: "failed" });
          });
      }
    } else {
      if (req.query.category !== undefined) {
        return this.itemsService
          .getAllInCat(req.query.category, req.query.isActive)
          .then((result: any) => {
            res.status(200).json(result);
          })
          .catch((err: express.Errback) => {
            res.status(500).json({ status: "failed" });
          });
      } else {
        return this.itemsService
          .getAll(req.query.isActive)
          .then((result: any) => {
            res.status(200).json(result);
          })
          .catch((err: express.Errback) => {
            res.status(500).json({ status: "failed" });
          });
      }
    }
  }

  public getImage(req: express.Request, res: express.Response) {
    return this.itemsService
      .getItemImage(req.params.id)
      .then((result: any) => {
        const name = result[0].itemName
          .replace(/[^a-zA-Z0-9]/g, "")
          .toLowerCase();
        res.sendFile(path.join(__dirname, "../storage/items", `${name}.png`));
      })
      .catch((err: express.Errback) => {
        res.status(500).json({ status: "failed" });
      });
  }

  public updateLogPrice(req: express.Request, res: express.Response) {
    return this.itemsService
      .updateLogPrice()
      .then((result: IItemData) => {
        res.status(201).json(result);
      })
      .catch((err: express.Errback) => {
        console.log(err);
        res.status(500).json({ status: "failed" });
      });
  }

  public update(req: express.Request, res: express.Response) {
    return this.itemsService
      .update(req.params.id, req.body, req.file)
      .then((result: IItemData) => {
        res.status(201).json(result);
      })
      .catch((err: express.Errback) => {
        console.log(err);
        res.status(500).json({ status: "failed" });
      });
  }

  public priceDrop(req: express.Request, res: express.Response) {
    return this.itemsService
      .priceDrop(req.body.discount)
      .then((totalDiscount: number) => {
        return this.itemsService.getAll(req.query.isActive)
          .then((result: any) => {
            res.status(200).json(result);
          })
          .catch((err: express.Errback) => {
            res.status(500).json({ status: "failed" });
          });
      })
      .catch((err: express.Errback) => {
        console.log(err);
        res.status(500).json({ status: "failed" });
      });
  }

  public getMaxMin(req: express.Request, res: express.Response) {
    return this.itemsService
      .getMaxMin(req.query.dateOfQuery)
      .then((result: any) => {
        res.status(201).json(result);
      })
      .catch((err: express.Errback) => {
        res.status(500).json({ status: "failed" });
      });
  }
}
