const { app, BrowserWindow } = require('electron');
const path = require('path');
const express = require('express');
const cors = require('cors');
const localApp = express();
const PORT = 8080;
const startSever = (done) => {
  localApp.use(express.json({ limit: "100mb" }));
  localApp.use(cors());
  localApp.use(express.static('./build/'));
  localApp.listen(PORT, async () => {
    console.log("Server Started on PORT ", PORT);
    done();
  });
}

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the localApp.
  //   mainWindow.loadFile('index.html')
  mainWindow.loadURL("http://localhost:" + PORT);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  startSever(createWindow);

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the localApp when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for localApplications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});