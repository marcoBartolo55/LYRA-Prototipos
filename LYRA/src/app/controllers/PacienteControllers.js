const querys = require('../sql/Querys');
const Controllers={};
module.exports = Controllers;

Controllers.Principal = (req,res,next)=>{
    const Usuario = req.session.usuario;
    const TipoUsu = req.session.tipo_usuario;
    res.render('PaginaPrincipalPacientes',{Usuario,TipoUsu});
  };