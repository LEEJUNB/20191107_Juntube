import express from "express";
const app = express();
const PORT = 4000;

const handleListening = () => console.log(`Listening on : http://localhost:${PORT}`);
const home = (req,res) => res.send("This is our home");
const profile = (req,res) => res.send("Welcome Profile page");
const category = (req,res) => res.send("Category Page");

app.get('/',home);
app.get('/profile',profile);
app.get('/category',category);
app.listen(`${PORT}`,handleListening);