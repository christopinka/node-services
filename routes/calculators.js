exports.findById = function(req, res) {
    console.log(req.params);
    var id = parseInt(req.params.id);
    console.log('findById: ' + id);
    db.collection('employees', function(err, collection) {
        collection.findOne({'id': id}, function(err, item) {
            console.log(item);
            res.jsonp(item);
        });
    });
};

var postData = req.body;
  var postKeys = Object.keys( postData );
  var baseURL = 'http://onecdsmedcalc3000dev.azurewebsites.net/Calculators/CallToView?viewName=DiabetesRiskPrediction/';
  var queryString = '';

  for (var key in postKeys) {
    if (key == 0) queryString += '?' + postKeys[key] + '=' + postData[ postKeys[key] ];
    else queryString += '&' + postKeys[key] + '=' + postData[ postKeys[key] ];
  }

  res.send(baseURL + queryString);