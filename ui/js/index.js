const webSocketOutput = document.querySelector('.output');
const inputBtn = document.querySelector('.input-box');
const inputBtn1 = document.querySelector('.input-box-1');

var username;

function yesnoCheck(that) {
  document.getElementsByClassName("input-box")[0].type = "";
  username = that.value;
  document.getElementById('text').innerHTML = `Your username is ${that.value}`;
  document.getElementsByClassName("input-box-1")[0].type = "hidden";
}

inputBtn.addEventListener('keyup', function (event) {
  if (event.key === "Enter") {
    const query = event.target.value + " " + username;
    event.target.value = '';
    sendQuery(query);
  }
});

let ws;
try {
  // Local dev
  if (['localhost', '127.0.0.1', ''].includes(location.hostname)) {
    ws = new WebSocket(`ws://localhost:3000`);
  } else {
    ws = new WebSocket(`wss://daddyvlad.online`);
  }
} catch (e) {
  console.log('Web socket init error', e);
}


function sendQuery(query) {
  ws.send(JSON.stringify({ type: 'query', payload: query }))
}

ws.onmessage = function ({ data }) {
  const msg = document.createElement('div');

  try {
    data = JSON.parse(data);
    const { type, payload } = data;

    switch (type) {
      case 'ping':
        // console.log('ping');
        return;
      default:
        msg.innerHTML = payload;
        webSocketOutput.prepend(msg);
    }
  } catch (e) {
    console.log('Websocket error', e);
  }
}