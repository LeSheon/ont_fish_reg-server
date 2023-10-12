const router = require("express").Router();
const zoneController = require("../controllers/zone-controller");

router.route("/").get(zoneController.getZone);

router.route("/:zoneNum").get(zoneController.getZoneByNumber);


module.exports = router;