const express= require("express");
const bodyParser = require("body-parser");
const dotenv =  require('dotenv').config();
const ejs = require('ejs');

const userRout = require("./routes/UserRouts");



//function to load server
const createAndstartServer = async( )=>{
    
    
    //crete object of express server
    const App= express();
    App.set('view engine', 'ejs');


    App.use(bodyParser.urlencoded({ extended: true  }));
    App.use(bodyParser.json());
    

    App.use(express.static('public'));

    App.use("/", userRout )

    App.get('/', (req, res) => {
        res.render('index');
      });


    const PORT = process.env.PORT;
    
    App.listen( PORT,()=>{

        console.log("server has started on port "+ PORT);
    })
}

createAndstartServer(); //start the main server
