/* eslint-disable unicorn/prefer-node-protocol */
import fs from "fs";

const processargs = process.argv.slice(2);
const host = processargs[0];

let data = `
let hostname = "${host}";
export default hostname;
`;

fs.writeFileSync('./host.js', data);

console.log("Deployer URL set to " + host + ".");