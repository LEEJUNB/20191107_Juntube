import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req,res) => res.send("Hooome!!!"));
globalRouter.get(routes.join, (req,res) => res.send("Jooooin!!"));
globalRouter.get(routes.login, (req,res) => res.send("Loooogin!!"));
globalRouter.get(routes.logout,(req,res) => res.send("Loooogout!!!"));
globalRouter.get(routes.search,(req,res) => res.send("Seeearch!!!"));

export default globalRouter;