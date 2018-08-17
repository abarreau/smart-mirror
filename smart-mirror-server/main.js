const express = require('express');
const wifiName = require('wifi-name');
const axios = require('axios');
const app = express();


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Content-Type", "application/json");
    next();
});

app.get('/api/wifi', (req, res, next) => {
    wifiName().then(name => {
        res.send({ "wifiName": name });
        next();
    }).catch(error => {
        res.send({ "wifiName": 'Could not fetch your Wifi name.' });
        next();
    });
});

app.get('/api/tram_schedule', (req, res, next) => {
    axios.get('http://data.montpellier3m.fr/sites/default/files/ressources/TAM_MMM_TpsReel.csv')
        .then(response => {
            console.log(response.data);
            next();
        });
});

app.listen(8080, () => {
    console.log("Server listening on port 8080 !");
});
