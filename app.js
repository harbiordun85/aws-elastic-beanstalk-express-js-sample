const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Welcome to Abiodun_Adejumo CloudProject_I have experience configuring systems 
    in AWS, Azure, assisting businesses with the adoption of hybrid infrastructure, and with minimizing fixed costs associated 
    with 100% on-premise infrastructure. This includes tasks VPC Networking and All type  cloud Resources, configuring
    web servers, and other related activities.'));
    

app.listen(port);
console.log(`App running on http://localhost:${port}`);
