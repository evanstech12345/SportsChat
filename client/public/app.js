const socket = io()

const form = document.getElementById('form');
const input = document.getElementById('exampleInputPassword1');
const messages = document.getElementById('chatlog')
const user = document.getElementById('username')
const namediv = document.getElementById('namediv')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
      socket.emit('chat message', input.value);
      input.value = '';
    }
    if (user.value) {
        socket.emit('by user', user.value);
        user.value = '';
      }
  });

  socket.on('chat message', function(msg) {
    let item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });

  //namediv.appendChild(nameItem);
  //var nameItem = document.createElement('h3')
  socket.on('Username', function(nme) {
    let nameItem = document.createElement('li')
    nameItem.textContent = nme;
    namediv.appendChild(nameItem);
    window.scrollTo(0, document.body.scrollHeight);
})