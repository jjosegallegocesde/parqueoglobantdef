//Importar Mongoose (Mongoose permite conectar a BD y crear modelos )
import mongoose from "mongoose"

export async function conectarABD(){
    try{

        await mongoose.connect(process.env.DATABASE);
        console.log("Exito Conectandonos a BD")

    }catch(error){

        console.log("Error en la conexion con BD "+ error)

    }
}