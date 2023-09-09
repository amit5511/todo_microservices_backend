
//configure dotenv
require('dotenv').config();
const app = require('./app');
const dbconnection = require('./db/dbconnection');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://brown-salesmen-ztxbw.pwskills.app:3001');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
//connecing mongodb
const URL = process.env.MongoURL
dbconnection(URL)


const PORT =process.env.PORT||8000
app.listen(PORT,(req,res)=>{
    console.log("Server is live on PORT : ",PORT)
})