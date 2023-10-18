import express from "express";
import config from "config";
import "./utils/dbconnect.js";
import router from "./controllers/operations.js"


const PORT = config.get("PORT")

let app = express();

app.use(express.json());


app.use("/users", router);
app.listen(PORT, (req, res) => {
  console.log(`Server is running at ${PORT}`);
});
