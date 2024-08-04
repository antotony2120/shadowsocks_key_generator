#!/usr/bin/env node
const yargs = require('yargs');

const usage = "\nUsage: ss_generator -m <method>  -w <password> -a <ip_address> -p <port> -t <title>\n"
    + "\n" + "Generates ss-key for your parameters" + "\n";

yargs
    .usage(usage)
    .option("m", { alias: "method", describe: "VPN encoding method", type: "string", demandOption: true })
    .option("w", { alias: "password", describe: "VPN client password", type: "string", demandOption: true })
    .option("a", { alias: "address", describe: "Server IP address", type: "string", demandOption: true })
    .option("p", { alias: "port", describe: "VPN client port", type: "string", demandOption: true })
    .option("t", { alias: "title", describe: "Connaction name", type: "string", demandOption: true })
    .help(true).argv;

const {method, password, address, port, title} = yargs.argv;
console.log('ss://' + btoa(method + ':' + password + '@' + address + ':' + port) + '#' + title);
