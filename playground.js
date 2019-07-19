const process = require('process');

process.env.UV_THREADPOOL_SIZE = 8;

console.log('Sync first');
console.log('Memory used:', process.memoryUsage());
console.log('Uptime:', process.uptime());
console.log('Working directory', process.cwd());

setTimeout(() => {
  console.log('Async 1');
}, 2000);
setTimeout(() => {
  console.log('Async 1');
}, 2000);
setTimeout(() => {
  console.log('Async 1');
}, 2000);
setTimeout(() => {
  console.log('Async 1');
}, 2000);
setTimeout(() => {
  console.log('Async 1');
}, 2000);

process.nextTick(() => {
  console.log('Next Tick');
});

console.log('Sync last');

setTimeout(() => {
  console.log('Async 2');
  console.log('Uptime Async:', process.uptime());
}, 2000);
