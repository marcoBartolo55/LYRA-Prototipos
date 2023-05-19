function DatosNoActulizados(e){
    swal({
        icon:'error',
        title: '¡Error!',
        text: "Perfil no actualizado, porfavor intentelo más tarde",
    });
  };

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

  function DatosActulizados(e){
    swal({
        icon:'success',
        title: '¡Éxito!',
        text: "Perfil actualizado.",
    });
  };

  function ReporteAgregado(e){
    swal({
        icon:'success',
        title: '¡Éxito!',
        text: "¡Reporte enviado!",
    });
  };

  function PassActulizada(e){
    swal({
        icon:'success',
        title: '¡Éxito!',
        text: "Contraseña actualizada.",
    });
  };