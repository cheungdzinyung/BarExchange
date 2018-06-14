import * as express from "express";
import OrdersService from "../services/OrdersService";

export default class UsersRouter {
  private ordersService: OrdersService;

  constructor(ordersService: OrdersService) {
    this.ordersService = ordersService;
  }

  router() {
    let router = express.Router();

    router.post("/:id", this.add.bind(this));

    router.get("/:id", this.getByOrderId.bind(this));
    router.get("/user/:id", this.getByUserId.bind(this));
    router.get("/prices/:id", this.getAllPrice.bind(this));
    router.get("/categories/:id", this.getAllQuantity.bind(this));

    router.put("/:id", this.update.bind(this));

    return router;
  }

  add(req: express.Request, res: express.Response) {
    return this.ordersService
      .add(req.params.id, req.body)
      .then((result: any) => {
        res.status(201).json(result);
      })
      .catch((err: express.Errback) => {
        console.log("Post Error", err);
        res.status(500).json({ status: "failed" });
      });
  }

  getByOrderId(req: express.Request, res: express.Response) {
    return this.ordersService
      .getByOrderId(req.params.id)
      .then((result: any) => {
        res.status(200).json(result);
      })
      .catch((err: express.Errback) => {
        console.log("Post Error", err);
        res.status(500).json({ status: "failed" });
      });
  }

  getByUserId(req: express.Request, res: express.Response) {
    return this.ordersService
      .getByUserId(req.params.id)
      .then((result: any) => {
        res.status(200).json(result);
      })
      .catch((err: express.Errback) => {
        console.log("Post Error", err);
        res.status(500).json({ status: "failed" });
      });
    // console.log("get")
    // const test = [{
    //   "users_id": 1,
    //   "username": "John Doe",
    //   "displayName": "Johnny",
    //   "orders":
    //     [
    //       {
    //         "orders_id": 1,
    //         "table": 123,
    //         "status": "confirmed",
    //         "isPaid": false,
    //         "orderingTime": "2018 - 06 - 08 15: 17: 24.406432+08",
    //         "orderItems":
    //           [
    //             {
    //               "itemName": "Asahi",
    //               "ice": "normal",
    //               "sweetness": "normal",
    //               "garnish": "normal",
    //               "purchasePrice": 105.00
    //             },
    //             {
    //               "itemName": "Grey Goose",
    //               "ice": "extra",
    //               "sweetness": "normal",
    //               "garnish": "normal",
    //               "purchasePrice": 150.00
    //             }
    //           ]
    //       },
    //       {
    //         "orders_id": 2,
    //         "table":321,
    //         "status": "confirmed",
    //         "isPaid": false,
    //         "orderingTime": "2018 - 06 - 08 15: 20: 14.888501+08",
    //         "orderItems":
    //           [
    //             {
    //               "itemName": "Asahi",
    //               "ice": "normal",
    //               "sweetness": "normal",
    //               "garnish": "normal",
    //               "purchasePrice": 105.00
    //             }
    //           ]
    //       },
    //       {
    //         "orders_id": 3,
    //         "table":444,
    //         "status": "made",
    //         "isPaid": true,
    //         "orderingTime": "2018 - 06 - 09 15: 20: 14.888501+08",
    //         "orderItems":
    //           [
    //             {
    //               "itemName": "Pinot Blanc",
    //               "ice": "normal",
    //               "sweetness": "normal",
    //               "garnish": "normal",
    //               "purchasePrice": 205.00
    //             }
    //           ]
    //       },
    //       {
    //         "orders_id": 4,
    //         "table":666,
    //         "status": "confirmed",
    //         "isPaid": false,
    //         "orderingTime": "2018 - 06 - 19 15: 20: 14.888501+08",
    //         "orderItems":
    //           [
    //             {
    //               "itemName": "Asahi",
    //               "ice": "normal",
    //               "sweetness": "normal",
    //               "garnish": "normal",
    //               "purchasePrice": 105.00
    //             },
    //             {
    //               "itemName": "Pinot Blanc",
    //               "ice": "normal",
    //               "sweetness": "normal",
    //               "garnish": "normal",
    //               "purchasePrice": 205.00
    //             }
    //           ]
    //       },
    //     ]
    // }];
    // res.status(200).json(test);
  }

  getAllPrice(req: express.Request, res: express.Response) {
    return this.ordersService
      .getAllPrice(req.params.id)
      .then((result: any) => {
        res.status(200).json(result);
      })
      .catch((err: express.Errback) => {
        console.log("Post Error", err);
        res.status(500).json({ status: "failed" });
      });
  }

  getAllQuantity(req: express.Request, res: express.Response) {
    return this.ordersService
      .getAllQuantity(req.params.id)
      .then((result: any) => {
        res.status(200).json(result);
      })
      .catch((err: express.Errback) => {
        console.log("Post Error", err);
        res.status(500).json({ status: "failed" });
      });
  }

  update(req: express.Request, res: express.Response) {
    console.log(req.params.id, req.body);
    return this.ordersService
      .update(req.params.id, req.body)
      .then((result: any) => {
        res.status(201).json(result);
        console.log(result);
      })
      .catch((err: express.Errback) => {
        console.log("Post Error", err);
        res.status(500).json({ status: "failed" });
      });
  }
}
