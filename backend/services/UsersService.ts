import * as fs from "fs-extra";
import * as Knex from "knex";

import { IUserData } from "../interfaces";

export default class UsersService {
  private knex: Knex;

  constructor(knex: Knex) {
    this.knex = knex;
  }

  public saveUpdateUserImage(id: number, file: Express.Multer.File) {
    const imagePath = `./storage/users/${id}/profile.jpg`;
    fs.outputFile(imagePath, file.buffer);
    return this.knex("users")
      .where("id", id)
      .update({
        userPhoto: imagePath
      });
  }

  // Working 10/06/18
  public add(data: IUserData, file: Express.Multer.File) {
    return this.knex("users")
      .insert({
        displayName: data.displayName,
        facebookToken: data.facebookToken,
        isActive: true,
        password: data.password,
        role: data.role,
        username: data.username
      })
      .returning("id")
      .then(async (id: Knex.QueryCallback) => {
        await this.saveUpdateUserImage(id[0], file);
        return this.knex("users")
          .where("id", id[0])
          .select("id as user_id", "displayName", "userPhoto");
      });
  }

  // Working 06/06/18
  public get(req: number) {
    return this.knex("users")
      .where({ id: req, isActive: true })
      .select("username", "password", "displayName", "userPhoto", "role");
  }

  // Working 10/06/18
  public update(id: number, data: IUserData, file: Express.Multer.File) {
    return this.knex("users")
      .where("id", id)
      .update({
        displayName: data.displayName,
        facebookToken: data.facebookToken,
        isActive: data.isActive,
        password: data.password,
        role: data.role,
        username: data.username
      })
      .returning("id")
      .then(async (userId: Knex.QueryCallback) => {
        await this.saveUpdateUserImage(id[0], file);
        return this.knex("users")
          .where("id", userId[0])
          .select("displayName", "userPhoto");
      });
  }

  public findByEmail(email: string) {
    return this.knex("users").where("username", email);
  }
}
