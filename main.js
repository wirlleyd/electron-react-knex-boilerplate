'use strict';

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path')
const url = require('url')
const glob = require('glob')
const UserRepository = require('./src/logic/repositories/userRepository');
let mainWindow;

let dev = false;
if (process.defaultApp || /[\\/]electron-prebuilt[\\/]/.test(process.execPath) || /[\\/]electron[\\/]/.test(process.execPath)) {
  dev = true;
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1024, height: 768, show: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  let indexPath;
  if (dev && process.argv.indexOf('--noDevServer') === -1) {
    indexPath = url.format({
      protocol: 'http:',
      host: 'localhost:8080',
      pathname: 'index.html',
      slashes: true
    });
  } else {
    indexPath = url.format({
      protocol: 'file:',
      pathname: path.join(__dirname, 'dist', 'index.html'),
      slashes: true
    });
  }
  mainWindow.loadURL(indexPath);

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    if (dev) {
      mainWindow.webContents.openDevTools();
    }
  });

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', () => {
  loadControllers()
  createWindow()
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

function loadControllers () {
  const files = glob.sync(path.join(__dirname, 'src/logic/controllers/**/*.js'))
  files.forEach((file) => { require(file) })
}

// ipcMain.on("user:create", async (event, user) => {
//   try{
//       await UserRepository.create(user);
//       event.returnValue = true
//     }catch(err){
//       event.returnValue = false
//   }
// });


module.exports = { mainWindow, ipcMain }