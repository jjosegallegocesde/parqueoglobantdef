//Importo el paquete EXPRESS
//const express = require('express') VIEJA
import express from 'express'

//Importar las rutas del API
import {rutas} from '../routes/rutas.js'

//Importar la conexion con BD
import{conectarABD} from '../dataBase/conexiones.js'

import cors from 'cors'

export class Servidor {

    constructor(){

    //ATRIBUTO app donde almaceno la funcionalidad de express 
       this.app = express()
       this.conectarconBD()
       this.llamarAuxiliares()
       this.atenderServicios()

    }

    encenderServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log(`Servidor encendido en ${process.env.PORT}`)
        })
    }

    atenderServicios(){
        this.app.use('/',rutas)
    }

    

    conectarconBD(){
        conectarABD()

    }

    llamarAuxiliares(){
        //ACTIVO LA RECEPCIÓN DE DATOS POR EL BODY DE LA PETICION
        this.app.use(express.json())
        this.app.use(cors())//Estoy dando permisos globales
    }

}