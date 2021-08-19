const express = require('express');
const app = express()
const path = require('path')

const http = require('http').Server(app);
const io = require('socket.io')(http);

//middleware
app.set('view-engine', 'ejs')
app.use(express.static(path.join(__dirname, 'client/public')));

//socket.io
io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

io.on('connection', (socket) => {
  socket.on('by user', nme => {
    io.emit('by user', nme);
  });
});

//d



//routes
app.get('/', (req, res) => {
  res.render('/opt/homebrew/Caskroom/miniforge/base/envs/sportstalk/client/view/index.ejs')
})
app.get('/MLB', (req, res) => {
  res.render('/opt/homebrew/Caskroom/miniforge/base/envs/sportstalk/client/view/Mlb.ejs')
})
app.get('/NBA', (req, res) => {
  res.render('/opt/homebrew/Caskroom/miniforge/base/envs/sportstalk/client/view/Nba.ejs')
})
app.get('/NFL', (req, res) => {
  res.render('/opt/homebrew/Caskroom/miniforge/base/envs/sportstalk/client/view/Nfl.ejs')
})
app.get('/NHL', (req, res) => {
  res.render('/opt/homebrew/Caskroom/miniforge/base/envs/sportstalk/client/view/Nhl.ejs')
})

 

http.listen(4000, () => {
  console.log('listening on *:4000');
});