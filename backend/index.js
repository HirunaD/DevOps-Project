import app from './server.js';
import mongodb from 'mongodb';
import SignupDAO from './dao/signupDAO.js';
import LoginDAO from './dao/loginDAO.js';
import loginRoutes from './api/login.route.mjs';
import patientRoutes from './api/patient.route.mjs';
import PatientDAO from './dao/patientDAO.js';

// const express  = import('express')
// const mongoose = import('mongoose')
// const cors =import('cors')
// const userModel = import('./Users')

// const app1 = express()
// app1.use(cors())
// app1.use(express.json())

// app1.post("/patient-registration" , (req , res) => {
//     userModel.create(req.body)
//     .then(users => res.json(users) )
//     .catch(err=>res.json(err))

// })

// app1.listen(3001,()=>{
//     console.log("server is Running")
// })

//mongoose.connect("mongodb://127.0.0.1:27017/admin")

const MongoClient = mongodb.MongoClient;

const uri = `mongodb+srv://nadunmj:EYO4y6xhMq0PzxDX@cluster0.idbvi1f.mongodb.net/`; //localhost:27017

const port = 3001;

MongoClient.connect(uri, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParser: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await SignupDAO.injectDB(client);
    await LoginDAO.injectDB(client); // inject login DAO
    await PatientDAO.injectDB(client);

    app.use('/login', loginRoutes); // mount login routes
    app.use('/patient', patientRoutes); // mount login routes
    // app.use("/users", userRoutes); // mount users routes
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
