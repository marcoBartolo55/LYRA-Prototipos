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

