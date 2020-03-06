window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

function beatThePoint() {
  login();
}

function login() {

  const data = {"login":"05160816321","password":"Otav1234"};
  
  fetch('https://api.pontomais.com.br/api/auth/sign_in', {
    method: 'POST',
    headers: {
      'authority': 'api.pontomais.com.br',
      'content-type': 'application/json;charset=UTF-8',
      'accept': 'application/json, text/plain, */*',
      'token-type': 'Bearer' ,
      'api-version': '2',
      'origin': 'https://app.pontomaisweb.com.br' ,
      'referer': 'https://app.pontomaisweb.com.br/',
    }, 
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.getElementById("json").innerHTML = JSON.stringify(data, undefined, 2);
    var token = data["token"];
    var client = data["client_id"];
    session(token, client);
  }); 
}

function session(token, client) {
  fetch('https://api.pontomais.com.br/api/session', {
    method: 'GET',
    headers: {
      'authority': 'api.pontomais.com.br',
      'token-type': 'Bearer',
      'access-token': token,
      'client': client,
      'uid': 'otavio@arpiatecnologia.com.br',
      'accept': 'application/json, text/plain, */*',
      'content-type': 'application/json;charset=UTF-8',
      'api-version': '2',
      'origin': 'https://app.pontomaisweb.com.br' ,
      'referer': 'https://app.pontomaisweb.com.br/',
    }
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    var myJson = document.getElementById("json");
    var appendContent = document.createElement('div');
    appendContent.innerHTML = "Session: Success!";
    while (appendContent.firstChild) {
      myJson.appendChild(appendContent.firstChild);
    }
    validate_token(token, client);
  }); 
}

function validate_token(token, client) {
  fetch('https://api.pontomais.com.br/api/auth/validate_token', {
    method: 'GET',
    headers: {
      'authority': 'api.pontomais.com.br',
      'token-type': 'Bearer',
      'access-token': token,
      'client': client,
      'uid': 'otavio@arpiatecnologia.com.br',
      'accept': 'application/json, text/plain, */*',
      'content-type': 'application/json;charset=UTF-8',
      'api-version': '2',
      'origin': 'https://app.pontomaisweb.com.br' ,
      'referer': 'https://app.pontomaisweb.com.br/',
    }
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
    devices(token, client);
  }); 
}

function devices(token, client) {

  const data = {"device":{"notification_token":null,"notification_enabled":true,"manufacturer":null,"device_model":"Chrome","platform_version":"80.0.3987.122","platform":4,"app_version":"0.10.32"}};

  fetch('https://api.pontomais.com.br/api/users/devices', {
    method: 'POST',
    headers: {
      'authority': 'api.pontomais.com.br',
      'token-type': 'Bearer',
      'access-token': token,
      'client': client,
      'uid': 'otavio@arpiatecnologia.com.br',
      'accept': 'application/json, text/plain, */*',
      'content-type': 'application/json;charset=UTF-8',
      'api-version': '2',
      'origin': 'https://app.pontomaisweb.com.br' ,
      'referer': 'https://app.pontomaisweb.com.br/',
    }, 
    body: JSON.stringify(data),
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
    registerTimeCard(token, client)
  }); 
}

function registerTimeCard(token, client) {

  const data = {"time_card":{"latitude":-18.9064411,"longitude":-48.2657489,"address":"R. Jataí, 1190 - Nossa Sra. Aparecida, Uberlândia - MG, 38400-679, Brasil","reference_id":null,"original_latitude":-18.9064411,"original_longitude":-48.2657489,"original_address":"R. Jataí, 1190 - Nossa Sra. Aparecida, Uberlândia - MG, 38400-679, Brasil","location_edited":false},"_path":"/meu_ponto/registro_de_ponto","_device":{"browser":{"name":"Chrome","version":"80.0.3987.122","versionSearchString":"Chrome"}},"_appVersion":"0.10.32"} ;
  
  fetch('https://api.pontomais.com.br/api/time_cards/register', {
    method: 'POST',
    headers: {
      'authority': 'api.pontomais.com.br' ,
      'pragma': 'no-cache' ,
      'cache-control': 'no-cache' ,
      'dnt': '1' ,
      'access-token': token ,
      'client': client ,
      'content-type': 'application/json;charset=UTF-8' ,
      'accept': 'application/json, text/plain, */*' ,
      //'expiry': '1614538442765' ,
      'uid': 'otavio@arpiatecnologia.com.br' ,
      'sec-fetch-dest': 'empty' ,
      'api-version': '2' ,
      'if-modified-since': 'Mon, 26 Jul 1997 05:00:00 GMT' ,
      'token-type': 'Bearer' ,
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36' ,
      //'uuid': '86ee42da-9a90-433e-9415-6241fc2a75eb' ,
      'origin': 'https://app.pontomaisweb.com.br' ,
      'sec-fetch-site': 'cross-site' ,
      'sec-fetch-mode': 'cors' ,
      'referer': 'https://app.pontomaisweb.com.br/' ,
      'accept-language': 'en-CA,en;q=0.9,pt-BR;q=0.8,pt;q=0.7,es;q=0.6' ,
    }, 
    body: JSON.stringify(data),
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