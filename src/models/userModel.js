import mongoose from "mongoose";

const userCollection = 'users' //1-primero defino donde va a interactuar el schema - o sea en que colleccion

const userSchema = new mongoose.Schema({ //2-segundo defino el schema que  hace es indicar q propiedades va a tener cada uno de mis documentos user
    firstname: String,
    lastname: String,
    email:{
        type: String,
        unique: true
        
    }
})

//3- genere el modelo pasando como parametro la collecion y el schema
export const userModel = mongoose.model(userCollection, userSchema)