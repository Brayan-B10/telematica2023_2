const principalCtrl = {};

const Sensores = require("../models/SENSORSchema");

principalCtrl.renderIndex = (req, res) => {
  res.render('index');
};

principalCtrl.renderAbout = (req, res) => {
  res.render('about');
};

//Ruta que estará en el boton Guardar
principalCtrl.irAdicionarProducto = async (req, res) => {
  //console.log(req.body);
  const {
    Nombre,
    Ubicación, 
    Tipo,
    Latitud,
    Longitud,
    Valor,
    user 
} = req.body;
 

  const errors = [];
  if (!Nombre) {
    errors.push({ text: "Por favor indique Nombre del sensor" });
  }
  if (!Tipo) {
    errors.push({ text: "Por favor indique el tipo de sensor" });
  }
  if (!Latitud) {
    errors.push({ text: "Por favor indique la latitud del sensor" });
  }
  if (!Longitud) {
    errors.push({ text: "Por favor indique la longitud del sensor" });
  }
  if (!Valor) {
    errors.push({ text: "Por favor indique el valor del sensor" });
  }
  if (errors.length > 0) {
    res.render("docentes/listadoproductos", {
      errors,
      Nombre,
      tipo,
      Latitud,
      Longitud,
      Valor,
      xxxx
    });
  } else {
    const newProducto = new Sensor({
      xxx,
      xxx,
      tixxxpo,
      xxx,
      nombrerevista,
      ano_pub,

      revision,
      soporte
    });
    newProducto.user = req.user.id;
    await newProducto.save();
    req.flash("success_msg", "Producto adicionado correctamente");
    res.redirect("/docentes/listadoproductos");
  }
};


module.exports = indexCtrl;