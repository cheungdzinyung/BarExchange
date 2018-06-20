import * as express from "express";
import * as multer from "multer";

import { IUserData } from "../interfaces";
import UsersService from "../services/UsersService";

const storage = multer.memoryStorage();
const upload = multer({ dest: "../users", storage });

export default class UsersRouter {
  private usersService: UsersService;

  constructor(usersService: UsersService) {
    this.usersService = usersService;
  }

  public router() {
    const router = express.Router();

    // router.post("/", upload.single("userPhoto"), this.add.bind(this));

    router.get("/", this.get.bind(this));

    router.put("/", upload.single("userPhoto"), this.update.bind(this));

    return router;
  }

  // public add(req: express.Request, res: express.Response) {
  //   return this.usersService
  //     .add(req.body, req.file)
  //     .then((result: IUserData) => {
  //       res.status(201).json(result);
  //     })
  //     .catch((err: express.Errback) => {
  //       console.log(err)
  //       res.status(500).json({ status: "failed" });
  //     });
  // }

  public get(req: express.Request, res: express.Response) {
    if (req.user !== undefined) {
      return this.usersService
        .get(req.user.id)
        .then((result: IUserData) => {
          res.status(200).json(result);
        })
        .catch((err: express.Errback) => {
          res.status(500).json({ status: "failed" });
        });
    } else {
      res.status(401).json({ status: "unauthorized" });
      return {};
    }
  }

  public update(req: express.Request, res: express.Response) {
    if (req.user !== undefined) {
      return this.usersService
        .update(req.user.id, req.body, req.file)
        .then((result: IUserData) => {
          res.status(201).json(result);
        })
        .catch((err: express.Errback) => {
          res.status(500).json({ status: "failed" });
        });
    } else {
      res.status(401).json({ status: "unauthorized" });
      return {};
    }
  }

}
