const EventEmitter = require('events').EventEmitter;

//create a publisher

const publisher = new EventEmitter();

publisher.addListener('start', startListener);
publisher.addListener('end', endListener);

publisher.emit('start', new Date());
publisher.emit('end', new Date());

function startListener(timestamp) {
  console.log(`Start occured at ${timestamp}`);
}

function endListener(ts) {
  console.log(`End occured at ${ts}`);
}
