const express = require('express');
const wifiName = require('wifi-name');
const axios = require('axios');
const app = express();
const joda = require('js-joda');


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
            const lines = response.data.split('\n');
            const resultat = {};

            lines.forEach((line, index) => {
                // we remove the first line because it's the header
                if(index == 0) {
                    return;
                }

                const segments = line
                    .substr(0, line.length - 1) // we remove the \r
                    .split(';');

                if(resultat[ segments[ 1 ] ] === undefined) {
                    resultat[ segments[ 1 ] ] = [];
                }

                resultat[ segments[ 1 ] ] = resultat[ segments [ 1 ] ].concat({
                    name: segments[ 3 ],
                    line: segments[ 4 ],
                    departureTime: segments[ 7 ]
                }).sort((a, b) => {
                    const now = joda.LocalDate.now();
                    const nowWithTime = joda.LocalDateTime.now();

                    let dateA = joda.LocalTime
                        .parse(a.departureTime, joda.DateTimeFormatter.ofPattern('HH:mm:ss'))
                        .atDate(now);

                    let dateB = joda.LocalTime
                        .parse(b.departureTime, joda.DateTimeFormatter.ofPattern('HH:mm:ss'))
                        .atDate(now);

                    if(dateA.isBefore(nowWithTime)) {
                        dateA = dateA.plusDays(1);
                    }

                    if(dateB.isBefore(nowWithTime)) {
                        dateB = dateB.plusDays(1);
                    }

                    return dateA.compareTo(dateB);
                });
            });

            res.send(resultat);
            next();
        });
});

app.listen(8080, () => {
    console.log("Server listening on port 8080 !");
});
