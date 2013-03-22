var connect = require('connect');

var oneDay = 86400000;
var app = connect()
  // .use(connect.logger('dev'))
  .use(connect.static(__dirname + '/node_modules/socket.io-client/dist', { maxAge: oneDay }))
  .listen(3000);

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var io = require('socket.io').listen(8000, {'log level': 0});

io.sockets.on('connection', function (socket) {
  console.log('client connected');
  socket.on('error', function (data) {
    console.log.apply(console, data);
  });
  socket.on('log', function (data) {
    console.log.apply(console, data);
  });
  rl.on('line', function (cmd) {
    socket.emit('eval', cmd);
  });
});

