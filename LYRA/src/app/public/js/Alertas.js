//Alertas de Error
  //Marco
  function SesionCaducada(e){
    swal({
        icon:'error',
        title: '¡Error!',
        text: "Tu sesión se ha caducado, por favor vuelve a iniciar sesión.",
    }).then((confirmar)=>{
      window.location.href='/InicioSesion';
    });
  };
  
  //Marco
  function NoPermisos(e){
    swal({
        icon:'error',
        title: '¡Error!',
        text: "No tienes permiso para acceder a esta función, por favor vuelve a iniciar sesión.",
    }).then((confirmar)=>{
      window.location.href='/InicioSesion';
    });
  };
  
  //Enrique
  function DatosNoActulizados(e){
    swal({
        icon:'error',
        title: '¡Error!',
        text: "Perfil no actualizado, porfavor intentelo más tarde",
    });
  };
  
  //Enrique
  function PassNoActulizada(e){
    swal({
        icon:'error',
        title: '¡Error!',
        text: "Contraseña no actualizada, porfavor intentelo más tarde",
    })
  };
  
  function ErrorServidor(e){
    swal({
        icon:'error',
        title: '¡Error!',
        text: "Ocurrió un error con el servidor al realizar esta acción, por favor inténtelo más tarde.",
    })
  };

  //Alertas acciones completadas
  //Enrique
  function DatosActulizados(e){
    swal({
        icon:'success',
        title: '¡Éxito!',
        text: "Perfil actualizado.",
    });
  };
  
  //Enrique
  function ReporteAgregado(e){
    swal({
        icon:'success',
        title: '¡Éxito!',
        text: "¡Reporte enviado!",
    });
  };

  //Enrique
  function PassActulizada(e){
    swal({
        icon:'success',
        title: '¡Éxito!',
        text: "Contraseña actualizada.",
    });
  };

