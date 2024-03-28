import express from 'express'
import routerUsers from './routes/userRouter.js';
import mongoose from 'mongoose';




const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api/users', routerUsers);



//el metodo connect recibe por parametro la url de la conexion a mi bbdd

const conexion = async()=>{
    try{
        //en este caso la conexion es a mi bbdd Mongodb local
        await mongoose.connect("mongodb+srv://<user>:<password>@cluster0.u8zhm4a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" , {dbName: "usuarios"})
      //  await mongoose.connect("mongodb://127.0.0.1:27017", {dbName: "usuarios"})
        console.log("conectado a la bbdd local")
    }catch(error){
        console.log("fallo conexion")
    }
}


conexion()

const PORT = 8080;
app.listen(PORT, () => {
    console.log(` Luchy Start Server in Port ${PORT}`);
});