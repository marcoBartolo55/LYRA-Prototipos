const encrypt = require('../helpers/EncriptarContraseñas');
const querys = require('../sql/Querys');
const Controllers={};
//Get
Controllers.IndexGet=(req,res,next)=>{
  req.session.destroy();
  res.render('Index');
};
//Post
Controllers.InicioSesionPost = async (req, res, next) => {
    const { Usuario, Pass } = req.body;
    
    try {
      const usuarioExistente = await querys.buscarUsuario(Usuario);
  
      if (usuarioExistente.length > 0 /* && await encrypt.compare(Pass, usuarioExistente[0].pass )*/){
        const idTipoUsuario = usuarioExistente[0].id_tipo_usuario;
        req.session.usuario=Usuario;
        req.session.tipo_usuario=idTipoUsuario;
        switch (idTipoUsuario) {
          case 1:
            res.redirect('/Psicologo');
            break;
          case 2:
            res.redirect('/Paciente');
            break;
          case 3:
            res.redirect('/Soporte/GerenteSoporte');
            break;
          case 4:
            // Código para usuario de tipo 4
            break;
          case 5:
            // Código para usuario de tipo 5
            break;
          case 6:
            // Código para usuario de tipo 6
            break;
          case 7:
            res.redirect('/Soporte/Asistente');
            break;
          case 8:
            // Código para usuario de tipo 8
            break;
          default:
            // Código para otro caso
        }
        
      }else{
        return res.redirect('/InicioSesion?alerta=Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error(error);
      return res.redirect('/InicioSesion?alerta=Error Servidor');
    }
  };
  
module.exports = Controllers;