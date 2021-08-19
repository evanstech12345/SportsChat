const socket = io()

const form = document.getElementById('form');
const input = document.getElementById('exampleInputPassword1');
const messages = document.getElementById('chatlog')
const user = document.getElementById('username')
// const namediv = document.getElementById('namediv')
// const byuser = document.getElementById('byuser')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
      socket.emit('chat message', input.value);
      input.value = '';
    }
  });  

form.addEventListener('submit', function(e) {
  e.preventDefault();
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

  socket.on('by user', function(user) {
    const text = document.createTextNode("by :");
    let nameItem = document.createElement('li')
    nameItem.textContent = user;
    messages.appendChild(nameItem)
    nameItem.innerHTML = "by : " + user
    window.scrollTo(0, document.body.scrollHeight);
})