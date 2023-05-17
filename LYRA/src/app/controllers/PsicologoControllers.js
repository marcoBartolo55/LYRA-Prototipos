const querys = require('../sql/Querys');
const Controllers={};
module.exports = Controllers;

Controllers.Principal = async(req,res,next)=>{
    const Usuario = req.session.usuario;
    const TipoUsu = req.session.tipo_usuario;
    const alerta = req.query.alerta;
    try{
    const datosUsuario =await querys.buscarUsuario(Usuario);
    const Pacientes = await querys.DesplegarPacientes(Usuario);
    res.render('PaginaPrincipalPsicologos',{Usuario,TipoUsu,datosUsuario,Pacientes,alerta});
    }catch(error){
      console.error(error);
    }
  };