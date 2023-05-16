//Alertas de Error
function NoPermisos(e){
    swal({
        icon:'error',
        title: '¡Error!',
        text: "No tienes permiso para acceder a esta función, por favor vuelve a iniciar sesión.",
    }).then((confirmar)=>{
      window.location.href='/InicioSesion';
    });
};

//Alertas acciones completadas

  

  

