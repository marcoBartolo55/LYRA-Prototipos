const querys = require('../sql/Querys');
const Controllers={};

function formatearFechaHora(fecha) {
    const fechaObj = new Date(fecha);
  
    const dia = fechaObj.getDate().toString().padStart(2, '0');
    const mes = (fechaObj.getMonth() + 1).toString().padStart(2, '0');
    const año = fechaObj.getFullYear().toString();
    const hora = fechaObj.getHours().toString().padStart(2, '0');
    const minutos = fechaObj.getMinutes().toString().padStart(2, '0');
  
    const formatoFechaHora = `Fecha: ${dia}/${mes}/${año} Hora: ${hora}:${minutos}`;
  
    return formatoFechaHora;
  }
  
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
  
module.exports = Controllers;