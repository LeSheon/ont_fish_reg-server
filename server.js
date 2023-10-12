const express = require("express");
const cors = require("cors");
const zoneRoutes = require("./routes/zone");
const { getZone } = require("./controllers/zone-controller");
const app = express();
require("dotenv").config();

const PORT = process.env.SERVER_PORT || 5050;

app.use(cors());
app.use(express.json());


app.get("/", (_req, res) => {
    res.send("Welcome to Ontario Fishing Regulation API")
})

app.get("/zone", zoneRoutes);

app.listen(PORT, ()=> {
    console.log(`Listening to PORT ${PORT}`);
})