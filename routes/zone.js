const router = require("express").Router();
const zoneController = require("../controllers/zone-controller");

router.route("/").get(zoneController.getZone);


module.exports = router;