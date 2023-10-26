const express = require("express");
const router = express.Router();

// Controllers
const { renderIndex, renderAbout, renderRegistrar, renderListado} = require("../controllers/index.controller");

router.get("/", renderIndex);
router.get("/about", renderAbout);
router.get("/registrar", renderRegistrar);
router.get("/listado", renderListado);
module.exports = router;
