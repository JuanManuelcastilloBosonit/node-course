const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user);

//method returns the uption in secodslog
console.log(`the System Uptime is ${os.uptime()} secods`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOS);