# RConsole

## Instalation

```
npm i
npm start
```

## Usage

```
<script src="http://localhost:3000/socket.io.min.js"></script>
<script>
  var socket = io.connect('http://localhost:8000');
  window.onerror = function(){
    var a = Array.prototype.slice.call(arguments, 0);
    try {
      socket.emit('error', a);
    } catch (e) {
      socket.emit('error', [e.toString() + ' => ' + a.join(',')]); //, ' called from ' + arguments.callee
    }
  };
  myLog = function(){ 
    var a = Array.prototype.slice.call(arguments, 0);
    try {
      socket.emit('log', a);
    } catch (e) {
      socket.emit('error', [e.toString() + ' => ' + a.join(',')]); // , ' called from ' + arguments.callee
    }
  };
</script>
```

## TODO
 - stacktraces for error

## Ideas

 - http://dailyjs.com/2012/04/05/node-unix-interfaces/
 - http://docs.nodejitsu.com/articles/REPL/how-to-create-a-custom-repl
 - http://nodejs.org/api/repl.html
 - https://github.com/substack/dnode
 - https://github.com/occ/TraceKit
 - https://github.com/eriwen/javascript-stacktrace
 - https://github.com/janekp/mapstrace