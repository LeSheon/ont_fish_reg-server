const router = require("express").Router();
const zoneController = require("../controllers/zone-controller");

router.route("/").get(zoneController.getZone);

router.route("/:zoneId").get(zoneController.getZoneByNumber);

module.exports = router;