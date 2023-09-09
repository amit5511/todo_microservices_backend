
//configure dotenv
require('dotenv').config();
const app = require('./app');
const dbconnection = require('./db/dbconnection');

const cors = require('cors')
app.use(cors({
    origin: "*"
}))

//connecing mongodb
const URL = process.env.MongoURL
dbconnection(URL)


const PORT =process.env.PORT||8000
app.listen(PORT,(req,res)=>{
    console.log("Server is live on PORT : ",PORT)
})