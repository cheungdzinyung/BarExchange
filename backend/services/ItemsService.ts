import * as fs from "fs-extra";
import * as Knex from "knex";

import { IItemData } from "../interfaces";

export default class UsersService {
  private knex: Knex;

  constructor(knex: Knex) {
    this.knex = knex;
  }

  public saveUpdateItemImage(id: number, file: Express.Multer.File) {
    const imagePath = `./storage/items/${file.originalname}`;
    fs.outputFile(imagePath, file.buffer);
    return this.knex("items")
      .where("id", id)
      .update({
        itemPhoto: imagePath
      });
  }

  // Working 10/06/18
  public add(data: IItemData, file: Express.Multer.File) {
    return this.knex("categories")
      .where("categoryName", data.categoryName)
      .select("id")
      .then((catId: Knex.QueryCallback) => {
        return this.knex("items")
          .insert({
            categories_id: catId[0].id,
            currentPrice: data.currentPrice,
            isActive: true,
            isSpecial: data.isSpecial,
            itemDescription: data.itemDescription,
            itemName: data.itemName,
            itemPhoto: data.itemPhoto,
            itemStock: data.itemStock,
            minimumPrice: data.minimumPrice
          })
          .returning("id")
          .then(async (itemId: Knex.QueryCallback) => {
            await this.saveUpdateItemImage(itemId[0], file);
            return this.knex("categories")
              .join("items", "categories.id", "=", "items.categories_id")
              .where("items.id", itemId[0])
              .select(
                "items.id as items_id",
                "items.itemName",
                "items.itemStock",
                "categories.categoryName",
                "items.minimumPrice",
                "items.currentPrice",
                "items.itemPhoto",
                "items.itemDescription",
                "items.isSpecial",
                "items.isActive"
              );
          });
      });
  }

  // Working 06/06/18
  public get(req: number) {
    return this.knex("categories")
      .join("items", "categories.id", "=", "items.categories_id")
      .where("items.id", req)
      .select(
        "items.id as items_id",
        "items.itemName",
        "items.itemStock",
        "categories.categoryName",
        "items.minimumPrice",
        "items.currentPrice",
        "items.itemPhoto",
        "items.itemDescription",
        "items.isSpecial",
        "items.isActive"
      );
  }

  // testing with fluctuating prices
  public getAllWithFluctuatingPrices(dateOfQuery: string) {
    return this.knex("categories")
      .join("items", "items.categories_id", "=", "categories.id")
      .join("orders_items", "items.id", "=", "orders_items.items_id")
      .join("orders", "orders.id", "=", "orders_items.orders_id")
      .select("categories.categoryName")
      .avg("orders_items.purchasePrice")
      .whereRaw("??::date = ?", ["created_at", dateOfQuery])
      .groupBy("categoryName")
      .then((orderIdList: any) => {
        // tslint:disable-next-line:no-console
        // return orderIdList;
        return Promise.all(
          orderIdList.map((order: object, i: number) => {
            const obj = {
              [orderIdList[i].categoryName]: orderIdList[i].avg
            };
            return obj;
          })
        );
      });
  }

  public getAllInCatWithFluctuatingPrices(
    catName: string,
    dateOfQuery: string
  ) {
    return this.knex("orders")
      .select("id")
      .whereRaw("??::date = ?", ["created_at", dateOfQuery])
      .then(result => {
        // tslint:disable-next-line:no-console
        console.log(result);
        return result;
      });
  }

  // Working 15/06/18
  public getAll() {
    return this.knex("categories")
      .select("id", "categoryName", "categoryPhoto")
      .then(categoryList => {
        // return categoryList;
        return Promise.all(
          categoryList.map((item: object, i: number) => {
            return this.knex("items")
              .select(
                "id as item_id",
                "itemName",
                "itemStock",
                "minimumPrice",
                "currentPrice",
                "itemPhoto",
                "itemDescription",
                "isSpecial",
                "isActive"
              )
              .where("items.categories_id", categoryList[i].id);
          })
        ).then(itemList => {
          return Promise.all(
            categoryList.map((category: object, j: number) => {
              const obj = {
                categoryName: categoryList[j].categoryName,
                categoryPhoto: categoryList[j].categoryPhoto,
                items: itemList[j]
              };
              return obj;
            })
          );
        });
      });
  }

  // Working 07/06/18
  public getAllInCat(catName: string) {
    let catPhoto: string;
    this.knex("categories")
      .select("categoryPhoto")
      .where("categoryName", catName)
      .then((photos: Knex.QueryCallback) => {
        return (catPhoto = photos[0].categoryPhoto);
      });
    return this.knex("categories")
      .select("id")
      .where("categoryName", catName)
      .then((catId: Knex.QueryCallback) => {
        return this.knex("items")
          .select(
            "id as item_id",
            "itemName",
            "itemStock",
            "minimumPrice",
            "currentPrice",
            "itemPhoto",
            "itemDescription",
            "isActive",
            "isSpecial"
          )
          .where("categories_id", catId[0].id)
          .then((itemList: Knex.QueryCallback) => {
            const result = [
              {
                categoryName: catName,
                categoryPhoto: catPhoto,
                items: itemList
              }
            ];
            return result;
          });
      });
  }

  // Working 10/06/18
  public update(id: number, data: IItemData, file: Express.Multer.File) {
    return this.knex("categories")
      .select("id")
      .where("categoryName", data.categoryName)
      .then((catId: Knex.QueryCallback) => {
        return this.knex("items")
          .where("items.id", id)
          .update({
            categories_id: catId[0].id,
            currentPrice: data.currentPrice,
            isActive: data.isActive,
            isSpecial: data.isSpecial,
            itemDescription: data.itemDescription,
            itemName: data.itemName,
            itemPhoto: data.itemPhoto,
            itemStock: data.itemStock,
            minimumPrice: data.minimumPrice
          })
          .returning("id");
      })
      .then(async (itemId: Knex.QueryCallback) => {
        await this.saveUpdateItemImage(itemId[0], file);
        return this.knex("categories")
          .join("items", "categories.id", "=", "items.categories_id")
          .where("items.id", itemId[0])
          .select(
            "items.id as item_id",
            "items.itemName",
            "items.itemStock",
            "categories.categoryName",
            "items.minimumPrice",
            "items.currentPrice",
            "items.itemPhoto",
            "items.itemDescription",
            "items.isSpecial",
            "items.isActive"
          );
      });
  }
}
