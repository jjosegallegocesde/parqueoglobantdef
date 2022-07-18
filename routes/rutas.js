import express from 'express'

import {ControladorCelda} from '../controllers/ControladorCelda.js'
import {ControladorVehiculo} from '../controllers/ControladorVehiculo.js'
import {ControladorAdmin} from '../controllers/ControladorAdmin.js'


let controladorCelda = new ControladorCelda()
let controladorVehiculo= new ControladorVehiculo()
let controladorAdmin= new ControladorAdmin()

export let rutas=express.Router()

//Rutas administradores
rutas.get('/api/v1/parqueadero/admins/', controladorAdmin.buscarAdministradores)
rutas.get('/api/v1/parqueadero/admin/:id/parking', controladorAdmin.buscarAdministrador)
rutas.post('/api/v1/parqueadero/admin/',controladorAdmin.agregarAdministrador)
rutas.put('/api/v1/parqueadero/admin/:id/', controladorAdmin.editarAdministrador)


//Rutas celdas
rutas.get('/api/v1/parqueadero/celdas/', controladorCelda.buscarCeldas)
rutas.get('/api/v1/parqueadero/celda/:id/', controladorCelda.buscarCelda)
rutas.post('/api/v1/parqueadero/celda/',controladorCelda.agregarCelda)
rutas.put('/api/v1/parqueadero/celda/:id/', controladorCelda.editarCelda)

//Rutas vehiculos
rutas.get('/api/v1/parqueadero/vehiculos/', controladorVehiculo.buscarVehiculos)
rutas.get('/api/v1/parqueadero/vehiculo/:id/', controladorVehiculo.buscarVehiculo)
rutas.post('/api/v1/parqueadero/vehiculo/',controladorVehiculo.agregarVehiculo)
rutas.put('/api/v1/parqueadero/vehiculo/:id/', controladorVehiculo.editarVehiculo)