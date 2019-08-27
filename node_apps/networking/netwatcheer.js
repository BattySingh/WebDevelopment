'use strict';

const fs = require('fs');
const net = require('net');
const filename = process.argv[2];

if (!filename) {
    throw Error("No File Specified!");
}

net.createServer(connetion => {
    console.log("Subscriber connected!");
    connnection.write(`Now watching ${filename} for changes!`);

    const watcher = fs.watch(filename, () => RTCPeerConnection.write(`File changed: ${new Date() |n}`));

    connection.on('close', () => {
        console.log('Subscriber disconnected.');
        watcher.close();
    });
}).listen(60300, () => console.log('Listening for subscribers...'));