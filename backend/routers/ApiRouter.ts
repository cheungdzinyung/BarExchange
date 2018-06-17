import * as express from "express";

import AuthRouter from "./AuthRouter";

import UsersService from "../services/UsersService";
import UsersRouter from "./UsersRouter";

import ItemsService from "../services/ItemsService";
import ItemsRouter from "./ItemsRouter";

import OrdersService from "../services/OrdersService";
import OrdersRouter from "./OrdersRouter";

import PricesService from "../services/PricesService";
import PricesRouter from "./PricesRouter";

export default class ApiRouter {
  private jwtAuth: any;
  private usersService: UsersService;
  private itemsService: ItemsService;
  private ordersService: OrdersService;
  private pricesService: PricesService;


  constructor(
    jwtAuth: any,
    usersService: UsersService,
    itemsService: ItemsService,
    ordersService: OrdersService,
    pricesService: PricesService,

  ) {
    this.jwtAuth = jwtAuth;
    this.usersService = usersService;
    this.itemsService = itemsService;
    this.ordersService = ordersService;
    this.pricesService = pricesService;

  }

  public getRouter() {
    const router = express.Router();
    const authRouter = new AuthRouter();
    const usersRouter = new UsersRouter(this.usersService);
    const itemsRouter = new ItemsRouter(this.itemsService);
    const ordersRouter = new OrdersRouter(this.ordersService);
    const pricesRouter = new PricesRouter(this.pricesService);

    router.use("/auth", authRouter.getRouter());
    // remove comment on line 18 and 31, and add the following in between "/users" and usersRouter.router() for authentication:
    // this.jwtAuth.authenticate(),
    router.use("/users",this.jwtAuth.authenticate(), usersRouter.router()); 
    router.use("/items", itemsRouter.router());         
    router.use("/orders", ordersRouter.router());
    router.use("/prices", pricesRouter.router());


    return router;
  }
}
