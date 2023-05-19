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

  Controllers.EnlazarPaciente=(req,res,next)=>{
    const Usuario = req.session.usuario;
    const {Paciente} = req.body;
    querys.BuscarPacientes(Paciente)
    .then(result => {
      if(result.length>0&&result[0].id_tipo_usuario===2){
        querys.BuscarEnlaces(Paciente)
        .then(result => {
          if(result.length===0){
            querys.EnlzarPsicoDoc(Paciente,Usuario)
            .then(result => {
                res.redirect('/Psicologo?alerta=Enlazado');
            })
            .catch(error=>{
              res.redirect('/Psicologo?alerta=Error');
            })
          }else{
            res.redirect('/Psicologo?alerta=Enlazado Anterior');
          }
        })
        .catch(error=>{
          res.redirect('/Psicologo?alerta=Error');
        })
      }else{
        res.redirect('/Psicologo?alerta=No existe');
      }
    })
    .catch(error=>{
      res.redirect('/Psicologo?alerta=Error');
    })
  };