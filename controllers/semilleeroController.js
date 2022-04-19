const { query } = require("express");
const connection = require("express-myconnection");

// const mysqlConnection = require('./database/db.js')
const controller = {};

controller.list = ( req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM marcas', (err, marcas)=>{
            if(err){
                 res.json(err);
            }
            //esto es para posman
            // else{
            //   res.json(rows);
            // }
            //para el front
            res.render('marcas',{
                data:marcas
           });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO marcas set ?', data, (err, marcas) => {
        console.log(marcas)
        res.redirect('/');
      })
    })
  };
    
    controller.delete=(req,res)=>{
      const {id}= req.params;
        req.getConnection((err,connection) => {
            connection.query ('DELETE FROM marcas WHERE id=  ?',[id],(err,rows)=>{
                res.redirect('/');  
            })

        })
      }

      controller.edit = (req, res) => {
        const { id } = req.params;
        req.getConnection((err, conn) => {
          conn.query("SELECT * FROM marcas WHERE id = ?", [id], (err, rows) => {
            res.render('marcas_edit', {
              data: rows[0]
            })
          });
        });
      };

        controller.update = (req, res) => {
          const { id } = req.params;
          const newmarcas = req.body;
          req.getConnection((err, conn) => {
        
          conn.query('UPDATE marcas set ? where id = ?', [newmarcas, id], (err, rows) => {
            res.redirect('/');
          });
          });
        };
/////////////////////////MOSTRAR TODAS LA TABLA DE LINEAS get :

controller.listLineasTotal = ( req, res) => {
  req.getConnection((err, conn) =>{
      conn.query('SELECT * FROM lineas', (err, lineas)=>{
          if(err){
               res.json(err);
          }
          res.render('lineas',{
              data:lineas
          });
      });
  });
};
///PARA VER POR CLASIFICACION
controller.listLineas = ( req, res) => {
  const {marcas_id}=req.params;
  console.log(req.params);
 
  req.getConnection((err, conn) =>{
      conn.query('SELECT * FROM lineas WHERE marcas_id = ?', [marcas_id], (err, lineas)=>{
          if(err){
               res.json(err);
          }
          res.render('lineas',{
              data:lineas
          });
      });
  });
};

//////PARA GUARDAR LINEAS post

controller.saveLineas = (req, res) => {
  const data = req.body;
  console.log(data)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO lineas  set ?', data, (err, lineas) => {
      res.redirect('/lineas');
    })
  })
};

////borrar lineas delete
controller.deleteLineas=(req,res)=>{
  const {id}= req.params;
    req.getConnection((err,connection) => {
        connection.query ('DELETE FROM lineas WHERE id=  ?',[id],(err,rows)=>{
            res.redirect('/lineas');  
        })
      })
  }

//Editar lineas
controller.editlineas = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM lineas WHERE id = ?", [id], (err, rows) => {
      res.render('lineas_edit', {
        data: rows[0]
      })
    });
  });
};
////guardar lineas editada
controller.updateLineas= (req, res) => {
  const { id } = req.params;
  const newlineas = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE lineas set ? where id = ?', [newlineas, id], (err, rows) => {
    res.redirect('/lineas');
  });
  });
};
////////////////////////////PARA TABLA VEHICULOS
controller.listvehiculosTotal = ( req, res) => {
  req.getConnection((err, conn) =>{
      conn.query('SELECT * FROM vehiculos', (err, vehiculos)=>{
          if(err){
               res.json(err);
          }
          res.render('vehiculos',{
              data:vehiculos
          });
      });
  });
};
///Guardar vehiculos--
controller.savevehiculos = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO vehiculos  set ?', data, (err, vehiculos) => {
      console.log(data)
      res.redirect('/vehiculos');
    })
  })
};

////eliminar vehiculo
controller.deleteVehiculo=(req,res)=>{
  const {nroplaca}= req.params;
  console.log(req.params);
    req.getConnection((err,connection) => {
        connection.query ('DELETE FROM vehiculos WHERE nroplaca=  ?',[nroplaca],(err,rows)=>{
            res.redirect('/vehiculos');  
        })
      })
  }

//Editar vehiculos editvehiculos
controller.editvehiculos = (req, res) => {
  const {nroplaca} = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM vehiculos WHERE nroplaca = ?", [nroplaca], (err, rows) => {
      res.render('vehiculos_edit', {
        data: rows[0]
      })
    });
  });
};
////guardar vehiculos editada
controller.updatevehiculo= (req, res) => {
  //const {nroplaca} = req.params;
  const newvehiculos = req.body;
  console.log(newvehiculos);
  req.getConnection((err, conn) => {

  conn.query('UPDATE lineas set ? ', [newvehiculos], (err, rows) => {

    res.redirect('/vehiculos');
  });
  });
};
module.exports = controller;