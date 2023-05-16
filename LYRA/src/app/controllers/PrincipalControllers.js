const querys = require('../sql/Querys');
const Controllers={};
Controllers.index=(req,res,next)=>{
    res.render('index');
};

//Marco
Controllers.RegistroPacientesGet=(req,res,next)=>{
    const alerta = req.query.alerta;
    res.render('RegistroPacientes',{alerta});
};
//Marco
Controllers.InicioSesionGet=(req,res,next)=>{
  req.session.destroy();
  const alerta = req.query.alerta;
  res.render('InicioSesion',{alerta});
};
//Marco
Controllers.RegistroPsicolosGet=(req,res,next)=>{
  const alerta = req.query.alerta;
  res.render('RegistroPsicologos',{alerta});
}
//Post
//Marco
Controllers.RegistroPacientesPost = async (req, res, next) => {
  const { Nombre, Apellidos, Edad, Sexo, Usuario, Correo, Pass } = req.body;

  try {
    const usuarioExistente = await querys.buscarUsuario(Usuario);
    
    if (usuarioExistente.length > 0) {
      return res.redirect('/RegistroPacientes?alerta=Usuario ya registrado');
    }

    await querys.RegistrarUsuarios(Nombre, Apellidos, Edad, Sexo, Correo, Usuario, Pass,2);
    return res.redirect('/RegistroPacientes?alerta=Usuario registrado');
  } catch (error) {
    console.error(error);
    return res.redirect('/RegistroPacientes?alerta=Error Servidor');
  }
}
//Marco
Controllers.RegistroPsicologosPost = async (req, res, next) => {
  const { Nombre, Apellidos, Edad, Sexo, Usuario, Correo, Pass } = req.body;

  try {
    const usuarioExistente = await querys.buscarUsuario(Usuario);
    
    if (usuarioExistente.length > 0) {
      return res.redirect('/RegistroPsicologos?alerta=Usuario ya registrado');
    }

    await querys.RegistrarUsuarios(Nombre, Apellidos, Edad, Sexo, Correo, Usuario, Pass,1);
    return res.redirect('/RegistroPsicologos?alerta=Usuario registrado');
  } catch (error) {
    console.error(error);
    return res.redirect('/RegistroPsicologos?alerta=Error Servidor');
  }
}

module.exports = Controllers;