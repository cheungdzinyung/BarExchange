import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as dotenv from "dotenv";
import * as express from "express";
import * as Knex from "knex";

import config from "./config";
import * as KnexConfig from "./knexfile";
import ApiRouter from "./routers/ApiRouter";
import jwtStrategy from "./util/auth/jwtStrategy";

import ItemsService from "./services/ItemsService";
import OrdersService from "./services/OrdersService";
import PricesService from "./services/PricesService";
import UsersService from "./services/UsersService";

// import UsersRouter from "./routers/UsersRouter";
// import OrdersRouter from "./routers/OrdersRouter";
// import ItemsRouter from "./routers/ItemsRouter";
// import PricesRouter from "./routers/PricesRouter";

dotenv.config();
const knex = Knex(KnexConfig[config.env]);
const app = express();

const usersService = new UsersService(knex);
const itemsService = new ItemsService(knex);
const ordersService = new OrdersService(knex);
const pricesService = new PricesService(knex);

const jwtAuth = jwtStrategy(usersService);
const apiRouter = new ApiRouter(jwtAuth, usersService, itemsService, ordersService, pricesService, knex);

// const usersRouter = new UsersRouter(usersService);
// const itemsRouter = new ItemsRouter(itemsService);
// const ordersRouter = new OrdersRouter(ordersService);
// const pricesRouter = new PricesRouter(pricesService);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", apiRouter.getRouter());

// app.use("/api/users", usersRouter.router());
// app.use("/api/items", itemsRouter.router());
// app.use("/api/orders", ordersRouter.router());
// app.use("/api/prices", pricesRouter.router());


app.listen(config.port, () => {
  console.log(`Application started at port: ${config.port}`);
});

import * as http from "http";
const server = http.createServer();
server.listen(8008);

import * as socketIO from "socket.io";
const io = socketIO();
io.attach(server);

let beerPrice = {
  category: "beer",
  items: [
    {
      "items_id": 1,
      "itemStock": 100,
      "currentPrice": "60.00",
    },
    {
      "items_id": 2,
      "itemStock": 100,
      "currentPrice": "60.00",
    },
    {
      "items_id": 3,
      "itemStock": 100,
      "currentPrice": "60.00",
    },
    {
      "items_id": 4,
      "itemStock": 100,
      "currentPrice": "60.00",
    },
    {
      "items_id": 5,
      "itemStock": 100,
      "currentPrice": "60.00",
    },
    {
      "items_id": 6,
      "itemStock": 100,
      "currentPrice": "60.00",
    },
    {
      "items_id": 7,
      "itemStock": 100,
      "currentPrice": "60.00",
    },
    {
      "items_id": 8,
      "itemStock": 100,
      "currentPrice": "60.00",
    }, {
      "items_id": 9,
      "itemStock": 100,
      "currentPrice": "60.00",
    },
    {
      "items_id": 10,
      "itemStock": 100,
      "currentPrice": "60.00",
    },
    {
      "items_id": 11,
      "itemStock": 100,
      "currentPrice": "60.00",
    },
    {
      "items_id": 12,
      "itemStock": 100,
      "currentPrice": "60.00",
    },
  ]
}

io.on("connection", (socket: any) => {
  console.log("socket connected: ", socket.id);
  io.to(socket.id).emit("action", { type: "SOCKET_CONNECT_SUCCESS", socketID: socket.id });

  socket.on("action", (action: any) => {
    if (action.type === "POST/buy") {
      // console.log("buy ok:", action.data, "update price now");
      const choosenID = 1;
      const quantity = 10;
      const newBeerPriceArray = beerPrice.items.map((beer: any) => {
        console.log(beer.items_id, choosenID);
        if (beer.items_id === choosenID) {
          return {
            items_id: choosenID,
            itemStock: beer.itemStock - quantity,
            currentPrice: (parseFloat(beer.currentPrice) + 1*quantity).toString(10),
          }
        } else {
          return {
            items_id: beer.items_id,
            itemStock: beer.itemStock,
            currentPrice: (Math.round((parseFloat(beer.currentPrice) - 0.1*quantity)*1000)/1000).toString(10),
          }
        }
      });
      beerPrice = { ...beerPrice, items: newBeerPriceArray };
      console.log(beerPrice);

      io.local.emit("action", { type: "SOCKET_UPDATE_ITEM_PRICE", socketData: beerPrice });
    } else {
      console.log("no such action");
    }

  });
});

