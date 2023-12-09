// Adjust the webSocket protocol to what is being used for HTTP
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// Display that we have opened the webSocket
socket.onopen = (event) => {
  appendMsg('system', 'websocket', 'connected');
};

// Display messages we receive from our friends
socket.onmessage = async (event) => {
  const text = await event.data.text();
  const chat = JSON.parse(text);
  appendMsg('friend', chat.name, chat.msg);
};

// If the webSocket is closed then disable the interface
socket.onclose = (event) => {
  appendMsg('system', 'websocket', 'disconnected');
  document.querySelector('#name-controls').disabled = true;
  document.querySelector('#chat-controls').disabled = true;
};

// Send a message over the webSocket
function sendMessage() {
  const msgEl = document.querySelector('#new-msg');
  const msg = msgEl.value;
  if (msg) {
    const name = localStorage.getItem('userName'); // Get the name from localStorage
    if (name) {
      appendMsg('me', name, msg); // Use the retrieved name
      socket.send(JSON.stringify({ name: name, msg: msg }));
      msgEl.value = ''; // Clear the message input field
    } else {
      console.error('User name not found in localStorage.');
      // Additional handling if the user name is not found
    }
  }
}

// Create one long list of messages
function appendMsg(cls, from, msg) {
  const chatText = document.querySelector('#chat-text');
  chatText.innerHTML =
    `<div><span class="${cls}">${from}</span>: ${msg}</div>` +
    chatText.innerHTML;
}

// Send message on enter keystroke
const input = document.querySelector('#new-msg');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Disable chat if no name provided
document.addEventListener('DOMContentLoaded', function() {
  const userName = localStorage.getItem('userName');
  const artistDiv = document.getElementById('artist');
  const chatControls = document.getElementById('chat-controls');

  if (userName) {
      // Display the user name and enable chat controls
      artistDiv.textContent = userName;
      chatControls.disabled = false;
  } else {
      // User name not found, keep chat controls disabled
      chatControls.disabled = true;
  }
});