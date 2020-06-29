const port = process.env.PORT || 3000;

const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars());

app.use(express.static('public'));

app.get('/', (req,res) => {
  res.send('index')
})

app.get('/game', (req,res) => {
    res.render('game')
})

app.listen(port, ()=>{
  console.log(`Server started on port ${port}`)
})
