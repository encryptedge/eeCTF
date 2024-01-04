import fs from 'node:fs';

const processargs = process.argv.slice(2);
const ip = processargs[0];

fs.writeFileSync('./config.json', JSON.stringify({ ip }));

console.log("Deployer URL set to " + ip + ".");