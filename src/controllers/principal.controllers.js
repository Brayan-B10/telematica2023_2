const principalCtrl = {};
const Sensores = require("../models/sensor");

principalCtrl.registrarSensor = (req, res) => {
    res.render("registrar");
};

principalCtrl.listarSensores = async (req, res) => {
    const listadosensores = await Sensores.find();
    console.log(listadosensores);
    res.render("listado", {listadosensores});
};

principalCtrl.guardarSensor = async (req, res) => {
    const{
        nombre,
        ubicacion,
        tipo,
        latitud,
        longitud,
        valor
    } = req.body;
    const errors = [];
    if (!nombre) {
        errors.push({ text: "Por favor indique Nombre del sensor" });
    }
    if (!ubicacion) {
        errors.push({ text: "Por favor indique la ubicacion" });
    }
    if (!tipo) {
        errors.push({ text: "Por favor indique tipo producto" });
    }
    if (!latitud) {
        errors.push({ text: "Por favor indique la latitud" });
    }
    if (!longitud) {
        errors.push({ text: "Por favor indique la longitud" });
    }
    if (!valor) {
        errors.push({ text: "Por favor indique el valor" });
    }
    if (errors.length > 0) {
        res.render("registrar", {
        errors,
        nombre,
        ubicacion,
        tipo,
        latitud,
        longitud,
        valor,
    });
    } else {
        const newSensor = new Sensores({
        nombre,
        ubicacion,
        tipo,
        latitud,
        longitud,
        valor,
    });
    newSensor.user = req.user.id;
    await newSensor.save();
    req.flash("success_msg", "Producto adicionado correctamente");
    res.redirect("/mostrarsensores");
    }
};

module.exports = principalCtrl;