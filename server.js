var express = require('express'),
    employees = require('./routes/employee'),
    calculators = require('./routes/calculators');
 
var app = express();

app.use( express.bodyParser() );


app.get('/employees/:id/reports', employees.findByManager);
app.get('/employees/:id', employees.findById);
app.get('/employees', employees.findAll);

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
app.post('/diabetes-risk', function(req, res){
  // var postData = req.body;
  var patient = req.body.patient
  console.log('Adding wine: ' + JSON.stringify(req.body));
  console.log(patient);
  var baseURL = 'http://onecdsmedcalc3000dev.azurewebsites.net/Calculators/CallToView?viewName=DiabetesRiskPrediction/';
  var queryString = '';

  queryString += '?' + 'age' + '=' + patient.age;
  queryString += '?' + 'sex' + '=' + patient.sex;
  queryString += '&' + "height" + '=' + patient.height;
  queryString += '&' + "weight" + '=' + patient.weight;
  queryString += '&' + "fbs" + '=' + patient.loincLab.fbsSpelledOut.value;
  queryString += '&' + "pAtm" + '=' + patient.loincLab.pAtmSpelledOut.value;

  res.contentType('application/json')
  res.send(baseURL + queryString);
});

app.listen(3000);
console.log('Listening on port 3000...');
