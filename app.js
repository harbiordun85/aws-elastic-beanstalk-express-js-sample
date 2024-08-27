const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Welcome to Abiodun_Adejumo_Sample CI/CD CloudProject with Code change push succeded, with All of project Exprience'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
