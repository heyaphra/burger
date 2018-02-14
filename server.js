const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')

const app = express();
const PORT = process.env.PORT || 8080;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

//Routing / App Controller for sever-side actions based on ORM db calls


const routes = require('./controllers/burgers_controller.js');

app.use('/', routes);


//router.GET(showAll), POST(create), PUT(update)
//^^After coding, take care of the form data in /js^^

app.listen(PORT, function(){
  console.log(`Listening at http://localhost:${PORT}`)
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
