const exec = require('child_process').exec;
exec('ab -c 100 -n 100 google.co.in/', (error, stdout, stderr) => {
  console.log(stdout);
});
