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

Controllers.Resumenes=async(req,res,next)=>{
  const Usuario = req.session.usuario;
  const TipoUsu = req.session.tipo_usuario;
  const {Paciente} = req.body;
  try{
    const PacienteInfo =await querys.InfoPacientes(Paciente);
    const Resumenes = await querys.BuscarResumenes(Paciente);
    res.render('VerConversaciones',{Usuario,TipoUsu,PacienteInfo,Resumenes,formatearFechaHora})
  }
  catch(error){
      console.error(error);
  }
};
module.exports = Controllers;