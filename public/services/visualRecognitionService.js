const service = 'watson-developer-cloud/visual-recognition/v3';
var VisualRecognitionV3 = require(service);
var script = require('../script');

var visualRecognition = new VisualRecognitionV3({
  version: '{version}',
  iam_apikey: '{apikey}',
});

var fs = require('fs');


var images_file = fs.createReadStream('./fruitbowl.jpg');
var classifier_ids = ['default'];
var threshold = 0.6;

visualRecognition.classify(params, function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(response, null, 2));
  }
});
