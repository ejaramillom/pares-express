const express = require("express");
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
app.get('/', function(req, res){
  res.render('vistaPares');
});

app.listen(3000, () => console.log('Listening on port 3000!'));
