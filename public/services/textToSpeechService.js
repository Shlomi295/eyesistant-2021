/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const url = 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/baf8e0ff-3514-4ffe-8fe0-3236da0ef50a';

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: 'uuo2l8ob2y7Tke5lCGQxziG2Rg8xoj9SjiDxIVYsbLo_',
  }),
  serviceUrl: url,
  disableSslVerification: true,
});

function setParam(){
  const synthesizeParams = {
    text: 'Hello world',
    accept: 'audio/wav',
    voice: 'en-US_AllisonV3Voice',
  };
  return synthesizeParams;
}
