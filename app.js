const port = process.env.PORT || 3000;

const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.engine('.hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(express.static('public'));

app.get('/', (req,res) => {
  res.render('game')
})

app.get('/*', (req,res) => {
    res.send('404: Not Found')
})  

app.listen(port, ()=>{
  console.log(`Server started on port ${port}`)
})
