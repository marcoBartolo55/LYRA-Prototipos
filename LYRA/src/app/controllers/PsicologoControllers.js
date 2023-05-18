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

Controllers.EditarDatos = async(req,res,next)=>{
  const Usuario = req.session.usuario;
  const TipoUsu = req.session.tipo_usuario;
  const alerta = req.query.alerta;
  try{
  const datosUsuario =await querys.buscarUsuario(Usuario);
  res.render('EditarDatosPsicologo',{Usuario,TipoUsu,datosUsuario,alerta});
  }catch(error){
    console.error(error);
  }
};

Controllers.EditarDatosPsicologoPost = async(req,res,next)=>{
  const {Nombre,Apellidos,Edad,Sexo,Correo} = req.body;
  const Usuario = req.session.usuario;
  try{
    const datosUsuario =await querys.buscarUsuario(Usuario);
    if(datosUsuario.length > 0){
      const ActualizardatosDoctor = await querys.Actualizardatos(datosUsuario[0].id_persona,Nombre,Apellidos,Edad,Sexo,Correo);
      if(ActualizardatosDoctor){
        return res.redirect('/Psicologo/EditarPerfil?alerta=Datos Actualizados');    
      }
    }
  }catch(error){
    return res.redirect('/Psicologo/EditarPerfil?alerta=Error');
  }
};

Controllers.EditarPass = async(req,res,next) =>{
  const Usuario = req.session.usuario;
  const{Pass} = req.body;
  try{
    const PassActualizada = await querys.ActualizarPass(Usuario, Pass);
    if(PassActualizada){
      return res.redirect('/Psicologo/EditarPerfil?alerta=Pass Actualizada');
    }
  }catch(error){
    console.error(error);
    return res.redirect('/Psicologo/EditarPerfil?alerta=Error Pass');
  }
};

module.exports = Controllers;