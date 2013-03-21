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
  window.onerror = function(){ socket.emit('error', arguments); };
  myLog = function(){ socket.emit('log', arguments); };
</script>
```

## Ideas

 - http://dailyjs.com/2012/04/05/node-unix-interfaces/
 - http://docs.nodejitsu.com/articles/REPL/how-to-create-a-custom-repl
 - http://nodejs.org/api/repl.html
 - https://github.com/substack/dnode
