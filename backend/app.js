const express = require("express");
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require('cors');
const app = express();


 //Middleware
 app.use(express.json());
 app.use(cors());
 app.use("/books",router);//localhost:5000/books

//connecting database mongoDb to front end
mongoose
    .connect(
     "mongodb+srv://admin:ScYCm5NpPYo6e7fS@cluster0.8aefp.mongodb.net/bookstore?retryWrites=true&w=majority"
     ).then(() =>console.log("Connection successful"))
      .then(() => {
       app.listen(5000);
     }
     ).catch((err) => console.log(err));









//mongoose password: ScYCm5NpPYo6e7fS