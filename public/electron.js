const { app, BrowserWindow, Tray, ipcRenderer, ipcMain } = require('electron');

const path = require('path');
const fs = require('fs');
const isDev = require('electron-is-dev');

let mainWindow;
let tray;

const isWindows = () => process.platform === 'win32';
const isMac = () => process.platform === 'darwin';
const isLinux = () => process.platform === 'linux';

function createWindow() {
  mainWindow = new BrowserWindow({
    resize: false,
    show: false,
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);

  const iconName = process.platform === 'win32' ? '' : '';
  const iconPath = path.join(__dirname, '../src/assets/clipboard.png');

  tray = new Tray(iconPath);
  tray.on('click', (event) => {
    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.show();
      mainWindow.maximize();
    }
  })
}

app.on('ready', () => {
  createWindow();

  ipcMain.on('test', (event, data) => {
    console.log(event);
    console.log(data);
  })
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

