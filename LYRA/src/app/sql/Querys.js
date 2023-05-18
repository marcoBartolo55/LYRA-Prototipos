const querys = require('../sql/Querys');
const Controllers={};

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


  db.ActualizarPass = (Usuario,Pass)=>{
    return new Promise(async(resolve, reject) => {
      const PassEn = await encrypt.encrypt(Pass);
      const query = `UPDATE usuario set pass='${PassEn}' where nombre_usuario='${Usuario}'`;
      con.query(query,(error, result) => {
        if (error) {
          console.error(error);
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  };
  

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
  
  
  module.exports = db;