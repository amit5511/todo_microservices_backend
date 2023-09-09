const mqtt = require('mqtt');
var options = {
    host: process.env.mqqtHost,
    port: process.env.mqqtport,
    protocol: process.env.mqqtprotocol,
    username: process.env.mqqtusername,
    password: process.env.mqqtpassword
}

var client = mqtt.connect(options);
client.on('connect', () => {
  console.log('Connected to MQTT broker');
});
client.on('error', (error) => {
    console.error('MQTT Connection Error:');
});
module.exports=client;