const querys = require('../sql/Querys');
const Controllers={};
Controllers.index=(req,res,next)=>{
    res.render('index');
};
module.exports = Controllers;