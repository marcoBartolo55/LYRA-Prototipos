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

  db.BuscarPacientes = (Paciente)=>{
    return new Promise(async(resolve, reject)=>{
      const query = `SELECT * FROM usuario WHERE nombre_usuario ='${Paciente}'`;
      con.query(query,(error,result)=>{
        if (error) {
          console.error(error);
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  };

  db.BuscarEnlaces = (Paciente)=>{
    return new Promise(async(resolve, reject)=>{
      const query = `SELECT * FROM psicologo_paciente where nombre_Paciente ='${Paciente}'`;
      con.query(query,(error,result)=>{
        if (error) {
          console.error(error);
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  };

  db.EnlzarPsicoDoc = (Paciente,Psicologo)=>{
    return new Promise(async(resolve, reject) => {
      const query = `INSERT INTO psicologo_paciente values(default,'${Paciente}','${Psicologo}')`;
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