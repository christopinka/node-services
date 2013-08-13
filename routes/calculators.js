exports.findByName = function(req, res) {
  // var postData = req.body;
  var patient = req.body.patient
  var baseURL = 'http://onecdsmedcalc3000dev.azurewebsites.net/Calculators/CallToView?viewName=DiabetesRiskPrediction/';
  var queryString = '';

  var name = req.params.id;
    console.log('findByName: ' + req.params.id);

    //now find the url for the calculator id

  queryString += '?';
  queryString += 'age' + '=';
  if (patient.age !== null) {
    queryString + patient.age;
    };
  queryString += '?' + 'sex' + '=' + patient.sex;
  queryString += '&' + "height" + '=' + patient.height;
  queryString += '&' + "weight" + '=' + patient.weight;
  queryString += '&' + "fbs" + '=' + patient.loincLab.fbsSpelledOut.value;
  queryString += '&' + "pAtm" + '=' + patient.loincLab.pAtmSpelledOut.value;

  // res.contentType('application/json')
  var calculator = calculators.filter(function (calculator) { return calculator.name == name });
  res.jsonp(calculator);
  // res.send(baseURL + queryString);
};

var calculators = [
        {"id": 1
        , "name": "diabetes-risk"
        , "basUrl": "http://onecdsmedcalc3000dev.azurewebsites.net/Calculators/CallToView?viewName=DiabetesRiskPrediction/"
        , "params": ["age","sex","height","weight","fbs","pAtm"]}
        ]
