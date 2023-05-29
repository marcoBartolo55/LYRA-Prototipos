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

// Inserción de datos

// Marcos 
db.RegistrarUsuarios = (nombre, apellido, edad, sexo, correo_electronico, nombre_usuario, pass, id_tipo_usuario) => {
    return new Promise(async(resolve, reject) => {
      const contra = await encrypt.encrypt(pass);
      const query = `CALL agregar_persona_usuario(?, ?, ?, ?, ?, ?, ?, ?)`;
      const values = [nombre, apellido, edad, sexo, correo_electronico, nombre_usuario, contra, id_tipo_usuario];
      con.query(query, values, (error, result) => {
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
db.BuscarReportesMantenimientoPersonal = (Usuario)=>{
  return new Promise((resolve, reject) => {
    con.query(`SELECT r.*, re.descripcion_estatus
    FROM reporte AS r
    JOIN reporte_estatus AS re ON r.id_Repore_Estatus = re.id_Reporte_Estatus
    WHERE r.id_Repore_Estatus = 3 and r.id_usuario_asignado='${Usuario}'`, (error, result) => {
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
db.BuscarReportesFinalizadoMantenimientoPersonal = (Usuario)=>{
  return new Promise((resolve, reject) => {
    con.query(`SELECT r.*, re.descripcion_estatus
    FROM reporte AS r
    JOIN reporte_estatus AS re ON r.id_Repore_Estatus = re.id_Reporte_Estatus
    WHERE r.id_Repore_Estatus = 5 and r.id_usuario_asignado='${Usuario}'`, (error, result) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

db.BuscarReportesFinalizadoMantenimiento = ()=>{
  return new Promise((resolve, reject) => {
    con.query(`SELECT r.*, re.descripcion_estatus
    FROM reporte AS r
    JOIN reporte_estatus AS re ON r.id_Repore_Estatus = re.id_Reporte_Estatus
    WHERE r.id_Repore_Estatus = 5`, (error, result) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

db.BuscarReportesMantenimiento = ()=>{
  return new Promise((resolve, reject) => {
    con.query(`SELECT r.*, re.descripcion_estatus
    FROM reporte AS r
    JOIN reporte_estatus AS re ON r.id_Repore_Estatus = re.id_Reporte_Estatus
    WHERE r.id_Repore_Estatus = 3`, (error, result) => {
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
db.BuscarReporteMantenimientoFinalizado = ()=>{
  return new Promise((resolve, reject) => {
    con.query(`SELECT r.*, re.descripcion_estatus
    FROM reporte AS r
    JOIN reporte_estatus AS re ON r.id_Repore_Estatus = re.id_Reporte_Estatus
    WHERE r.id_Repore_Estatus = 6`, (error, result) => {
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
db.BuscarReportesEnviadosGerenteMantenimientoPersonal = (Usuario)=>{
  return new Promise((resolve, reject) => {
    con.query(`SELECT r.*, re.descripcion_estatus
    FROM reporte AS r
    JOIN reporte_estatus AS re ON r.id_Repore_Estatus = re.id_Reporte_Estatus
    WHERE r.id_Repore_Estatus = 4 or id_Repore_Estatus=6 and id_usuario_manipulo_Reporte='${Usuario}'`, (error, result) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = db;