window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

function beatThePoint() {
  fetchAwsLambda();
}

function fetchAwsLambda() {
  fetch('https://9qclej86li.execute-api.sa-east-1.amazonaws.com/default/beat-the-point', {
    method: 'GET'
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    var myJson = document.getElementById("json");
    var appendContent = document.createElement('div');
    appendContent.innerHTML = JSON.stringify(data, undefined, 2);
    while (appendContent.firstChild) {
      myJson.appendChild(appendContent.firstChild);
    }

    // appendContent.innerHTML = "THE POINT HAS BEEN BEATEN!";
    // while (appendContent.firstChild) {
    //   myJson.appendChild(appendContent.firstChild);
    //}
  }); 
}