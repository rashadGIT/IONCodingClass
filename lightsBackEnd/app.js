const express = require('express')
const app = express()
const axios = require('axios');
const port = 3000

app.use((req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next()
});

app.get('/on', (req, res) => {
    let brightness = 254;
    let color = 49999;
    let sat = 40;
    if(typeof req.query.bright !== 'undefined' && req.query.bright != 'undefined' && req.query.bright) brightness = parseInt(req.query.bright);

    if(typeof req.query.color !== 'undefined' && req.query.color != 'undefined' && req.query.color) {
        switch(req.query.color.toUpperCase()){
            case 'PURPLE' : {
                color = 53311;
                sat = 254;
                break;
            }
            case 'WHITE' : {
                color = 40655;
                sat = 40;
                break;
            }
            case 'BLUE' : {
                color = 47104;
                sat = 254;
                break;
            }
            case 'RED' : {
                color = 0;
                sat = 254;
                break;
            }
            case 'YELLOW' : {
                color = 11350;
                sat = 254;
                break;
            }
            case 'GREEN' : {
                color = 11350;
                sat = 254;
                break;
            }
            default :{
                color = parseInt(req.query.color);
                if(typeof req.query.sat !== 'undefined' && req.query.sat != 'undefined' && req.query.sat){
                    color = parseInt(req.query.color);
                    sat =  parseInt(req.query.sat)
                }
            }        
        }
    }
    console.log(brightness)
    console.log(color)
    console.log(sat)

    axios.put('http://192.168.1.4/api/GNXuLztUrakoOrv8RWauzmChpO5GlPdaTo8wLXag/lights/3/state', 
    {
        "on":true,
        "bri": brightness,
        "hue":color,
        "sat" : sat
    })
    .then(function (response) {
    console.log(response.data);
    })
    .catch(function (error) {
    console.log(error);
    })
    .then(function () {
    // always executed
    }); 
    res.send('Hello New World!')
});

app.get('/off', (req, res) => {
    axios.put('http://192.168.1.4/api/GNXuLztUrakoOrv8RWauzmChpO5GlPdaTo8wLXag/lights/3/state', 
    {
        "on":false
    })
    .then(function (response) {
        //console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        // always executed
    }); 
    res.send('GoodBye New World!')
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))