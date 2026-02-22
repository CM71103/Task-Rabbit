// This file can safely expose a limited API to your renderer process
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('myAPI', {
  // Define methods you want to expose
  sendMessage: (message) => {
    console.log("Message from renderer:", message);
  }
});
