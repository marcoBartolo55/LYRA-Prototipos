const mysql = require('mysql2');
const encrypt = require('../helpers/EncriptarContraseñas');

const con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "n0m3l0", 
  database: "LYRA"
});

con.connect((err) => {
  if (err) {
    console.error('Error conectando la base de datos:', err);
    throw err;
  }
  console.log('Base de datos conectada');
});

const db = {};
//Consultas

//Enrique
db.BuscarReportesAbiertos = ()=>{
  return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM reporte NATURAL JOIN reporte_estatus where id_Reporte_Estatus = 1`, (error, result) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

//Todes
db.buscarUsuario = (nombre_usuario) => {
  return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM usuario NATURAL JOIN persona where nombre_usuario = ?`, [nombre_usuario], (error, result) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

//Enrique
db.buscarDoctoresyPacientes = () =>{
  return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM usuario NATURAL JOIN persona where id_tipo_usuario = 1 or id_tipo_usuario = 2`, (error, result) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

//Enrique
db.buscarGerentesManteni = () =>{
  return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM usuario NATURAL JOIN persona where id_tipo_usuario = 3`, (error, result) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

//Enrique
db.AgregarReporte =(Id_UsarioSolici,Id_Manupulo,Id_GerenteSo,Descripcion)=>{
  return new Promise(async(resolve, reject) =>{
    // Obtener la fecha y hora actual
const fechaHoraActual = new Date();

// Formatear la fecha y hora en el formato deseado para MySQL (datetime: 'YYYY-MM-DD HH:MM:SS')
const fechaHoraFormateada = fechaHoraActual.toISOString().slice(0, 19).replace('T', ' ');

// Imprimir la fecha y hora formateada
console.log(fechaHoraFormateada);

    const query = `INSERT INTO reporte VALUES 
    (default,'${Id_UsarioSolici}','${Id_Manupulo}','${Id_GerenteSo}',1,'${fechaHoraFormateada}','${Descripcion}','')`;
    con.query(query,(error,result)=>{
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(result);
      }
    });
  })
}

db.ActualizarReporteGerentes =(Id_Reporte,UsuarioAsignado,UsuarioManipula,Estado)=>{
  return new Promise(async(resolve, reject)=>{
    // Obtener la fecha y hora actual en la zona horaria de México
    const fechaHoraActual = moment().tz('America/Mexico_City');
    // Formatear la fecha y hora en el formato deseado para MySQL (datetime: 'YYYY-MM-DD HH:MM:SS')
    const fechaHoraFormateada = fechaHoraActual.format('YYYY-MM-DD HH:mm:ss');
    const Estatus=parseInt(Estado) 
    const query = `update reporte set id_usuario_manipulo_Reporte='${UsuarioManipula}', id_Repore_Estatus=${Estatus}, id_usuario_asignado='${UsuarioAsignado}', fecha_hora='${fechaHoraFormateada}' where id_reporte=${Id_Reporte} `;
    con.query(query,(error,result)=>{
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

db.Actualizardatos = (Id_Usuario,Nombre,Apellido,Edad,Sexo,Correo)=>{
  return new Promise(async(resolve, reject)=>{
    const query = `CALL actualizar_persona_usuario(?, ?, ?, ?, ?, ?)`;
    const values = [Id_Usuario,Nombre,Apellido,Edad,Sexo,Correo];
    con.query(query, values, (error,result)=>{
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

//Enrique
db.Reportes=()=>{
  return new Promise(async(resolve, reject) =>{
    const query = `SELECT r.*, e.descripcion_estatus FROM Reporte r JOIN Reporte_Estatus e ON r.id_Repore_Estatus = e.id_Reporte_Estatus;`;
    con.query(query,(error,result)=>{
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(result);
      }
    });
  })
};

//Enrique
db.buscarGerentesSoporte = () =>{
  return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM usuario NATURAL JOIN persona where id_tipo_usuario = 3`, (error, result) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}
//Enrique
db.buscarDoctoresyPacientes = () =>{
  return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM usuario NATURAL JOIN persona where id_tipo_usuario = 1 or id_tipo_usuario = 2`, (error, result) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}