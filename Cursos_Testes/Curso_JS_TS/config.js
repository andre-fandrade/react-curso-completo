function clog(titulo, params, type) {

  let tData = '';
  if (type) {
    tData = ` Tipo: ${typeof (type)}`;
  }

  console.log(titulo, params, tData);
  console.log('====================================');
}

module.exports = clog;