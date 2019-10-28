import express from "express";
const app = express();
const PORT = 4000;

const handleListening = () => console.log(`Listening on : http://localhost:${PORT}`);
const home = (req,res) => res.send("This is our home");
const profile = (req,res) => res.send("Welcome Profile page");
const category = (req,res) => res.send("Category Page");
const between = (req,res,next) => {
    res.send("intercept");
    next();
}
const betweenRegion = (req,res,next) => {
    res.send("res~Region");
    console.log("Region!!");
    next();
}
app.get('/',betweenRegion,home);
app.use(between);
app.get('/profile',profile);
app.get('/category',category);
app.listen(`${PORT}`,handleListening);