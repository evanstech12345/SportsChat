const express = require('express');

const app = express()
const path = require('path')
 
app.set('view-engine', 'ejs')
app.use(express.static(path.join(__dirname, 'client/public')));

app.get('/', (req, res) => {
  res.render('/opt/homebrew/Caskroom/miniforge/base/envs/sportstalk/client/view/index.ejs')
})
 

app.listen(3000)