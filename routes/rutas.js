import express from 'express'

import {ControladorCelda} from '../controllers/ControladorCelda.js'
import {ControladorVehiculo} from '../controllers/ControladorVehiculo.js'

let controladorCelda = new ControladorCelda()
let controladorVehiculo= new ControladorVehiculo()

export let rutas=express.Router()

//Rutas administradores
/*rutas.get('/api/v1/parqueadero/admins/', administrador.buscarTodos)
rutas.get('/api/v1/parqueadero/admin/:id/parking', administrador.buscarPorId)//Jhon
rutas.post('/api/v1/parqueadero/admin/',administrador.insertar)
rutas.put('/api/v1/parqueadero/admin/:id/', administrador.editar)*/


//Rutas celdas
rutas.get('/api/v1/parqueadero/celdas/', controladorCelda.buscarCeldas)
rutas.get('/api/v1/parqueadero/celda/:id/', controladorCelda.editarCelda)
rutas.post('/api/v1/parqueadero/celda/',controladorCelda.agregarCelda)
rutas.put('/api/v1/parqueadero/celda/:id/', controladorCelda.editarCelda)

//Rutas vehiculos
rutas.get('/api/v1/parqueadero/vehiculos/', controladorVehiculo.buscarVehiculos)
rutas.get('/api/v1/parqueadero/vehiculo/:id/', controladorVehiculo.buscarVehiculo)
rutas.post('/api/v1/parqueadero/vehiculo/',controladorVehiculo.agregarVehiculo)
rutas.put('/api/v1/parqueadero/vehiculo/:id/', controladorVehiculo.editarVehiculo)