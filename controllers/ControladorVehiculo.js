import {ServicioVehiculo} from '../services/ServicioVehiculo.js'
import {ServicioCelda} from '../services/ServicioCelda.js'

class ControladorVehiculo{

    constructor(){}

    async buscarVehiculos(request,response){

        let servicioVehiculo=new ServicioVehiculo()
        try{
            response.status(200).json({
                mensaje:'exito en la consulta',
                data: await servicioVehiculo.buscar()
            })
        }catch(error){
            response.status(400).json({
                mensaje:'fallamos en la consulta'+error,
                data: null
            })
        }
        
    }

    async buscarVehiculo(request,response){

        let servicioVehiculo=new ServicioVehiculo()
        try{
            let id=request.params.id
            response.status(200).json({
                mensaje:'exito buscando el vehiculo',
                data: await servicioVehiculo.buscarPorId(id)
            })
        }catch(error){
            response.status(400).json({
                mensaje:'fallo buscando el vehiculo'+error,
                data: null
            })
        }
    }

    async editarVehiculo(request,response){
        let servicioVehiculo=new ServicioVehiculo()
        let servicioCelda=new ServicioCelda()
        try{
            let id=request.params.id
            let datos=request.body

            //obtener los datos de la celda
            let celda=await servicioCelda.buscarPorId(datos.id_celda)

            //capturar la informacion del valor del minuto de la celda
            let tarifa=celda.tarifa

            //capturo la fecha de salida
            let fechaSalida=new Date()

            //obtener la fecha de entrada del vehiculo
            let vehiculo=await servicioVehiculo.buscarPorId(id)
            let fechaEntrada=vehiculo.fecha_ingreso

            //restar las 2 fechas y obtener la diferencia de tiempo en minutos
            let diferencia=fechaSalida.getTime()-fechaEntrada.getTime()
            let diferenciaEnSegundos=diferencia/1000
            let diferenciaEnMinutos=diferenciaEnSegundos/60

            //calculamos el costo del parqueadero
            let costo=diferenciaEnMinutos*tarifa

            //armo el paquete de datos a actualizar
            datos.fecha_salida=fechaSalida
            datos.total_pago=costo


            await servicioVehiculo.editar(id,datos)
            response.status(200).json({
                mensaje:'exito editando el vehiculo',
                data: null
            })
        }catch(error){
            response.status(400).json({
                mensaje:'fallo editando el vehiculo'+error,
                data: null
            })
        }
    }

    async agregarVehiculo(request,response){
        let servicioVehiculo=new ServicioVehiculo()
        let servicioCelda=new ServicioCelda()
        try{
            let datos=request.body
            //1. obtener los datos de la celda donde voy a ingresar el carro
            let celda=await servicioCelda.buscarPorId(datos.id_celda)

            //2. preguntar si la celda esta disponible
            if(celda.estado==true){ //SI LA CELDA ESTA DISPONIBLE
                //capturo la fecha de entrada
                let fechaEntrada= new Date()
                //agregar la fecha de entrada a los datos del body
                datos.fecha_ingreso=fechaEntrada
                await servicioVehiculo.ingresar(datos)
                response.status(200).json({
                    mensaje:'exito registrando el vehiculo',
                    data: null
                })
            }
        }catch(error){
            response.status(200).json({
                mensaje:'fallo registrando la celda'+error,
                data: null
            })
        }
    }

   

}