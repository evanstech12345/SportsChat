const socket = io()

const form = document.getElementById('form');
const input = document.getElementById('exampleInputPassword1');
const log = document.getElementById('chatlog')

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
      socket.emit('chat message', input.value);
      input.value = '';
    }
  });

  socket.on('chat message', function(msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    log.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });