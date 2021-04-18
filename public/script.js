/* eslint-disable no-undef */
function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}

function removeUpload() {
  //   $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  //   $('.file-upload-content').hide();
  //   $('.image-upload-wrap').show();
  // }
  // $('.image-upload-wrap').bind('dragover', function() {
  //   $('.image-upload-wrap').addClass('image-dropping');
  // });
  // $('.image-upload-wrap').bind('dragleave', function() {
  //   $('.image-upload-wrap').removeClass('image-dropping');
  refreshPage();
}

function refreshPage() {
  window.location.reload();
}

function callEndpoint() {
  let button = document.getElementById('buttonSubmit');
  button.addEventListener('click', buttonSubmitHandler);
}

function buttonSubmitHandler() {
  let url = 'https://acd66e43.us-south.apigw.appdomain.cloud/api';
  let apiKey = 'f806b1b3-d3d0-4e0e-830a-8b63481fe91e';
  const xhr = new XMLHttpRequest();
  let str = '';
  xhr.open('POST', url + '/mockanalyzer', true);

  xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
  xhr.setRequestHeader('X-IBM-Client-Id', apiKey);
  xhr.onload = function() {
    if (this.status === 200) {
      let object = JSON.parse(this.responseText);
      myArray = Object.values(object);

      for (key in myArray[0].classes) {
        var objectClass = myArray[0].classes[key].class;
        var score = myArray[0].classes[key].score;
        str +=
         `<li>${objectClass} : ${score}</li>`;
      }
      let output = document.getElementById('list');

      output.innerHTML = str;
      console.log(object);
    } else {
      console.log('there was an issue');
    }
  };
  xhr.send();
}
