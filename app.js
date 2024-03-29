import express from "express";
import morgan from "morgan"; 
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

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

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(morgan("dev"));

app.use(localsMiddleware); // local's skill can make to access the variable
// what's local skill? locals : 로컬변수응답을 포함하는 객체. 유용한  정보를 내보내는데 유용

app.use(routes.home,globalRouter); // global Router root("/")가 될 것.
app.use(routes.users, userRouter); // userRouter has a URL associated with the user.
app.use(routes.videos, videoRouter);

export default app;