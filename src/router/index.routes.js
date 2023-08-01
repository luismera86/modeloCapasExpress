import { Router } from "express";
import { apiRoutes } from "./apiRoutes/api.routes.js";
import { viewsRoutes } from "./viewsRoutes/views.routes.js";

const routes = Router();
routes.use("/api", apiRoutes);
routes.use("/", viewsRoutes );

export { routes };