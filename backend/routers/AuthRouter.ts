import axios from "axios";
import * as express from "express";
import * as jwtSimple from "jwt-simple";
import * as Knex from "knex";
import config from "../config";

export default class AuthRouter {
  private knex: Knex;

  constructor(knex: Knex) {
    this.knex = knex;
  }

  public getRouter() {
    const router = express.Router();
    router.post("/google", this.loginWithGoogle.bind(this));
    router.post("/login", this.localLogin.bind(this));
    return router;
  }

  public async localLogin(req: express.Request, res: express.Response) {
    if (req.body.username && req.body.password) {
      const username = req.body.username;
      const password = req.body.password;
      const userId = await this.knex("users")
        .select("id", "username")
        .where("username", username)
        .where("password", password);
      if (userId.length >= 1) {
        const payload = {
          id: userId[0].id,
          username: userId[0].username
        };
        const token = jwtSimple.encode(payload, config.jwtSecret);
        res.json({
          token
        });
      } else {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(401);
    }
  }

  public async loginWithGoogle(req: express.Request, res: express.Response) {
    const accessToken = req.body.accessToken;
    console.log(accessToken);
    if (!accessToken) {
      res.sendStatus(401);
    }
    try {
      const authResult = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`
      );

      if (authResult.data.error) {
        res.sendStatus(401);
      }

      const token = jwtSimple.encode(
        { id: accessToken, info: authResult.data },
        config.jwtSecret
      );
      res.json({ token });
    } catch (err) {
      res.sendStatus(401);
    }
  }
}
