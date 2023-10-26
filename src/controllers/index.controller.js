const indexCtrl = {};


indexCtrl.renderIndex = (req, res) => {
  res.render('index');
};

indexCtrl.renderAbout = (req, res) => {
  res.render('about');
};

indexCtrl.renderRegistrar = (req, res) => {
  res.render('registrar');
};

indexCtrl.renderListado = (req, res) => {
  res.render('listado');
};



module.exports = indexCtrl;