import express from "express";

import { routes } from "./router/index.routes.js";
import { connectMongo } from "./config/mongo.config.js";

connectMongo();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static("public"));

app.use("/", routes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
