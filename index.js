const express = require('express');
const app = express();
const PORT = 4000;

const handleListening = () => console.log(`Listening on : http://localhost:${PORT}`);
const home = (req,res) => res.send("This is our home")

app.get('/',home);
app.listen(`${PORT}`,handleListening);
