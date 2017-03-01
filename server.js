const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');
const app = express();

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true })

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended:true
}))
app.use(bodyParser.json());
app.use('/vendor', express.static(path.join(__dirname, '/node_modules/bootstrap/')));
app.use(function(err,req,res,next){
  console.error(err)
  next();
})

app.get('/', (req,res,next) => {
  res.render('index');

})

const port = process.env.PORT || 4000;
const db = require('./db');

db.sync()
  .then(()=>{
    console.log(`DB is synced.`);
  });

app.listen(port, ()=> console.log(`Server listening on ${port}`));
