import express from "express";
import morgan from "morgan"; 
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router"; // why {}? becuz particular router is called

const app = express();

const Home = (req,res) => res.send("god Home!"); // 마지막 함수이기에 next키가 없다.
const profile = (req,res) => res.send("What'up man");
const category = (req,res) => res.send("Category Page");
const betweenMiddle = (req,res,next) => {
    console.log("***** intercept *****");
    next();
}
const betweenRegion = (req,res,next) => {
    res.send("res~Region");
    console.log("Region!!");
    next();
}

app.use(cookieParser()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(morgan("combined"));
app.use(helmet());

app.get('/',betweenRegion,Home);
app.use(betweenMiddle);
app.get("/profile",profile);
app.get('/category',category);
app.use("/user", userRouter); // userRouter has a URL associated with the user.

export default app;