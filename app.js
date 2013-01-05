var euler = require('./');

for (var problem in euler){
  console.log("Problem %s: %s", problem, euler[problem]());
}