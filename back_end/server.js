const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const db = require("./DB/index");
const router = require("./Router/router");
app.use(express.json());
app.use(cors({origin:"http://localhost:3000"}));
app.use("/",router);


db.sequelize.sync().then(()=>{
    console.log("DB Synced");
})
.catch((err)=>{
    console.log("DB not Synced",err);
});

app.listen(port,()=>{
    console.log("App is Running");
})