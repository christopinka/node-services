var express = require('express'),
    employees = require('./routes/employee'),
    calculators = require('./routes/calculators');
 
var app = express();

app.use( express.bodyParser() );


app.get('/employees/:id/reports', employees.findByManager);
app.get('/employees/:id', employees.findById);
app.get('/employees', employees.findAll);
app.post('/calculators/:id', calculators.findByName);

// {
//   "patient": {
//         "gender": "male",
//         "race": "caucasian",
//         "age": 123,
//     "height": 68,
//     "weight": 200,
//         "problemCodes": [
//             1,
//             2,
//             3
//         ],
//         "loincLab": {
//             "systolicBloodPressure": {
//                 "units": "bar",
//                 "value": 2.098,
//                 "loincCode": "c56"
//             },
//             "pAtmSpelledOut": {
//                 "units": "ml",
//                 "value": 0.098,
//                 "loincCode": "c56"
//             },
//             "creatinine_time": {
//                 "units": "secs",
//                 "value": 98,
//                 "loincCode": "c56"
//             },
//           "fbsSpelledOut": {
//             "units": "fbsUnits",
//             "value": "reasonableValue",
//             "loincCode": "d46"}
            
//         }
//     }
// }



app.listen(3000);
console.log('Listening on port 3000...');
