var config          = require('config');
var express         = require('express');
var expressWinston  = require('express-winston');
var bodyParser      = require('body-parser');
var _				= require('lodash');
var cors 			= require('cors')
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
var logger      = require('./common/logger');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// var routes = require('./routes/index');
var users = require('./routes/users');
var playbooks = require('./routes/playbooks');
var playbookitems = require('./routes/playbookitems');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.use(cors());
app.set('port', config.port || 3200);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
app.use('/users', users);
app.use('/playbooks', playbooks);
app.use('/playbookitems', playbookitems);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// error handlers
// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//     app.use(function (err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
//     mongoose.connect('mongodb://localhost/mongo');
//     console.log("Running in " + app.get('env'));
// }
mongoose.connect('mongodb://localhost/mongo');


// * Use express-winston middleware for express route logging
app.use(expressWinston.logger({
  transports: _.values(logger.transports),
  winstonInstance: logger
}));

// * Use express-winston middleware for express route error logging
app.use(expressWinston.errorLogger({
  transports: _.values(logger.transports),
  winstonInstance: logger
}));

//production branch
// if (app.get('env') === 'production') {
//     app.use(function (err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
//     mongoose.connect('mongodb://127.0.0.1/mongo');
//     console.log("Running in " + app.get('env'));
// }

// production error handler
// no stacktraces leaked to user
// app.use(function (err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });


app.listen(app.get('port'), function() {
  logger.info('playbooks API listening on port ' + app.get('port'));
});

// module.exports = app;
