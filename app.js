import express from "express";
import morgan from "morgan"; 
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

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

app.use(betweenMiddle);
app.use("/",globalRouter); // global Router root("/")가 될 것.
app.use("/user", userRouter); // userRouter has a URL associated with the user.
app.use("/video", videoRouter);

export default app;