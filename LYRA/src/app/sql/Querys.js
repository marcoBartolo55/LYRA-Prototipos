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

  db.DesplegarPacientes = (Doctor)=>{
    return new Promise(async(resolve, reject) =>{
      const query = `SELECT * FROM vista_pacientes_doctor where nombre_Doctor = '${Doctor}'`;
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