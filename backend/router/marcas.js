const express =require('express');
const router=express.Router();

const myconnectio=(require('../database/db'))

router.get('/',(req,res) =>{
    myconnectio.query(`SELECT * FROM marcas `,(err,rows,fields)=>{
          if(!err){
              res.json(rows);
            }
          else
          {res.json(err)}
      });
});

router.get('/:id',(req,res) =>{
    const {id}= req.params;
    myconnectio.query(`SELECT * FROM marcas WHERE id=?`,[id],(err,rows,fields)=>{
          if(!err){
              res.json(rows);}
          else
          {res.json(err)}
      });
});

router.delete('/:id',(req,res) =>{
    const {id}= req.params;
    myconnectio.query('DELETE FROM marcas WHERE id= ?',[id],(err,rows)=>{
        if(!err){
            res.status(500).json({ error: 'Internal error server' })
        }
        else
        {res.json(err)}
    } );
});

router.post('/',(req,res)=>{
const data=req.body;
console.log(req.body);
   myconnectio.query('INSERT INTO marcas set ?', data,(err,marcas)=>{
    if(!err){
    console.log(marcas)
    res.redirect('/');}
    else{
        res.json(err);
    }
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
