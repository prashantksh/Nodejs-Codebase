const events = require('events');

// Create an eventEmitter object
const eventEmitter = new events.EventEmitter();

eventEmitter.on('bang', args => {
  console.log('Listener 1', args);
});

eventEmitter.on('bang', arg => {
  console.log('Listener 2', args);
});

eventEmitter.emit('bang', [1, 'I can pass this', { name: 'Vivek' }]);

console.log('Total listeners', eventEmitter.listenerCount('bang'));
console.log('Listeners', eventEmitter.listeners('bang'));
