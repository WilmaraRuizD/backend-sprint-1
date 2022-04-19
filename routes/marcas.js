const express = require('express');
const router = express.Router();
//importar controlador }

const semilleroController = require('../controllers/semilleeroController');
//crud tabla marcas
router.get('/', semilleroController.list);
router.post('/add', semilleroController.save);
router.get('/delete/:id', semilleroController.delete);
router.get('/update/:id', semilleroController.edit);
router.post('/update/:id', semilleroController.update);
//crud tabla lineas
router.get('/lineas', semilleroController.listLineasTotal);
router.get('/lineas/:id', semilleroController.listLineas);
router.post('/lineas/add', semilleroController.saveLineas);
router.get('/lineas/delete/:id', semilleroController.deleteLineas);
router.get('/lineas/update/:id', semilleroController.editlineas);
router.post('/lineas/update/:id', semilleroController.updateLineas);
//crud tabla vehiculos

router.get('/vehiculos', semilleroController.listvehiculosTotal);
router.post('/vehiculos/add', semilleroController.savevehiculos);
router.delete('/vehiculos/delete/:nroplaca', semilleroController.deleteVehiculo);
router.get('/vehiculos/update/:nroplaca', semilleroController.editvehiculos);
router.post('/vehiculos/update/:nroplaca', semilleroController.updatevehiculo);

module.exports = router;