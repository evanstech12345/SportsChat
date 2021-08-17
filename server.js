const express = require('express');

const app = express()
const path = require('path')
 
app.set('view-engine', 'ejs')
app.use(express.static(path.join(__dirname, 'client/public')));

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

 

app.listen(3000)