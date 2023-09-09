
//configure dotenv
require('dotenv').config();
const app = require('./app');
const dbconnection = require('./db/dbconnection');

const cors = require('cors')
const corsOptions = {
    origin: ['https://brown-salesmen-ztxbw.pwskills.app:3001'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
  };
  
app.use(cors(corsOptions));

//connecing mongodb
const URL = process.env.MongoURL
dbconnection(URL)


const PORT =process.env.PORT||8000
app.listen(PORT,(req,res)=>{
    console.log("Server is live on PORT : ",PORT)
})