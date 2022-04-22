const express=require('express');
const { send } = require('express/lib/response');
const router=express.Router();
const validator = require('express-joi-validation').createValidator({});

const myconnectio=(require('../database/db'));

router.get('/',(req,res)=>{
    myconnectio.query('SELECT * FROM vehiculos', (err, rows, fields) => 
    {
        if(!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      });  
});

router.get('/:nroplaca',(req,res) =>{
    const {nroplaca}= req.params;
    myconnectio.query(`SELECT * FROM vehiculos WHERE nroplaca=?`,[nroplaca],(err,rows,fields)=>{
          if(!err){
              res.json(rows);}
          else
          {res.json(err)}
      });
});

router.delete('/:nroplaca',(req,res) =>{
    const {nroplaca}= req.params;
    myconnectio.query('DELETE FROM vehiculos WHERE nroplaca = ?',[nroplaca],(err,rows)=>{
        if(!err){
            res.json({status: 'vehiculos Deleted'});
        }
        else
        {res.json(err)}
    });
});

router.post('/',(req,res)=>{
  const data= req.body;
  console.log(data);
  myconnectio.query('INSERT INTO vehiculos set ?', data,(err,vehiculos)=>{
    if(!err){
      res.send('user created');}
      else{res.json(err)}
});
 
});

router.put('/:id', (req, res) => {
  const {newmarcas} = req.body;
  console.log(newmarcas);
  const {id} = req.params;
  console.log(id);
myconnectio.query('UPDATE marcas set ? WHERE id = ?' , [req.body, id], (err, rows) =>{
  if(!err) {
   res.json({status: 'marca Updated'});
    
    } else {
      console.log(err);
    }
});
});
module.exports = router;