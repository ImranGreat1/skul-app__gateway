const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");


const app = express();

app.use(cors());
app.use(express.json());


app.get("/hello", (req, res) => 
{
    res.send("Hello world!");
})

app.use("/blog", proxy("http://localhost:8002"));
app.use("/schools", proxy("http://localhost:8003"));
app.use("/materials", proxy("127.0.0.1:8004"));
app.use("/", proxy("http://localhost:8001"));

const PORT = 8000;
app.listen(PORT, () => console.log("server running..."))