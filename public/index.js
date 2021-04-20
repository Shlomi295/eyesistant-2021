/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

var watson = require('watson-developer-cloud');
var fs = require('fs');
var config = require('./config');
const multer = require('multer');
const helpers = require('./helpers');


const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, '../public/uploads');
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

// Start the visualizer service by authenticating with our API key.
var visual_recognition = watson.visual_recognition(
  {
    api_key: config.apiKey,
    version: '2016-05-20',
  });

// Only return classes that are 49% or above likely.
let parameters =
        {
        // classifier_ids: ["dogs_666724530"],
          threshold: 0.49,
        };

function analyzeImage(req, res, err){
  let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).single('profile_pic');

  var params =
          {
            images_file: req.file,
            parameters: parameters,
          };

  // Call the classifier.
  visual_recognition.classify(params, function(error, response) {
    // If there's no error, then Watson's response is...
    if (!error) {
      var stringresponse = JSON.stringify(response, null, 2);
      console.log(stringresponse);
    } else {
      console.log('Error: ' + error);
    }
  });

}


