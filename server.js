require('dotenv').config()
const app = require('./src/app')
const connectingDB = require('./src/db/db')
// const connectingAi = require('./src/api/api')
const connectingAi =  require('./src/api/geminiApi')
const dns = require('dns')
dns.setServers(['8.8.8.8'])

connectingDB()
connectingAi()

app.listen(3000, () => {

    console.log("Server is running on Port 3000");

})