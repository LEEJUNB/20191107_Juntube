import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 4000;

const handleListening = () => console.log(`Listening on : http://localhost:${PORT}`);
const home = (req,res) => res.send("This is our home");
const profile = (req,res) => res.send("Welcome Profile page");
const category = (req,res) => res.send("Category Page");
const betweenMiddle = (req,res,next) => {
    res.send("intercept");
    next();
}
const betweenRegion = (req,res,next) => {
    res.send("res~Region");
    console.log("Region!!");
    next();
}

// globally middleWare
app.use(helmet());
app.use(morgan("combined"));
app.use(cookieParser()); // cookie is saved user_inf
app.use(bodyParser.json()); // form
app.use(bodyParser.urlencoded()); // form

app.get('/',betweenRegion,home);
app.use(betweenMiddle);
app.get('/profile',profile);
app.get('/category',category);
app.listen(`${PORT}`,handleListening);