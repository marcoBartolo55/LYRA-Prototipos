const querys = require('../sql/Querys');
const Controllers={};
module.exports = Controllers;
//Gerente de mantenimiento
Controllers.PaginaPrincipalGerenteMantenimiento= async (req,res,next)=>{
    const Usuario = req.session.usuario;
    const TipoUsu = req.session.tipo_usuario;
    const alerta = req.query.alerta;
    try{
      const datosUsuario =await querys.buscarUsuario(Usuario);
      const ReportesMantenimientoPersonal = await querys.BuscarReportesMantenimientoPersonal(Usuario);
      const ReportesMantenimiento = await querys.BuscarReportesMantenimiento();
      const ReportesFinalizadoMantenimientoPersonal = await querys.BuscarReportesFinalizadoMantenimientoPersonal(Usuario);
      const ReportesFinalizadoMantenimiento = await querys.BuscarReportesFinalizadoMantenimiento();
      const GerentesMantenimiento = await querys.buscarGerentesMantenimiento();
      const IngenirosMantenimiento = await querys.buscarIngenierosMantenimiento();
      const TodosReportes = await querys.BuscarReportesEnviadosGerenteMantenimiento();
      const TodosReportesPersonales = await querys.BuscarReportesEnviadosGerenteMantenimientoPersonal(Usuario);
      const GerenteSop = await querys.buscarGerentesSoporte();
      res.render('PaginaPrincipalGerenteMantenimiento',{
        Usuario,TipoUsu,alerta,datosUsuario,
        ReportesMantenimientoPersonal,ReportesMantenimiento,
        ReportesFinalizadoMantenimientoPersonal,
        ReportesFinalizadoMantenimiento,TodosReportes,
        TodosReportesPersonales,GerentesMantenimiento,
        GerenteSop,IngenirosMantenimiento,formatearFechaHora});
    }catch(error){
      console.log(error);
    }
  };