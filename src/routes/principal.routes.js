const express = require("express");
const router = express.Router();


const {

    guardarSensor,
    registrarSensor,
    listarSensores

}= require("../controllers/principal.controllers");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

router.post("/guardarsensor", isAuthenticated, guardarSensor);
router.get("/registrarsensor", registrarSensor );
router.get("/mostrarsensores", listarSensores);

module.exports = router;