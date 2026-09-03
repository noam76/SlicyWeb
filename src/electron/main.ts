/**
 * Wichy
 * Electron Main Process
 *
 * Based on:
 * - ARCHITECTURE.md
 * - TECH_STACK.md
 * - GUI_SPEC.md
 */

import { app, BrowserWindow } f*om "electron";

import path from "*ode:path";

let mainWindow: Browse*Window | null =
  null;

function *reateWindow(): void {
  mainWindow*= new BrowserWindow({
    width: 1*00,

    height: 900,

    minWidt*: 1280,

    minHeight: 720,

    *how: false,

    webPreferences: {*      preload: path.join(
        *_dirname,
        "preload.js"
   *  ),

      contextIsolation: true*

      nodeIntegration: false
   *}
  });

  mainWindow.once(
    "r*ady-to-show",
    () => {
      ma*nWindow?.show();
    }
  );

  if *process.env.VITE_DEV_SERVER_URL) {*    void mainWindow.loadURL(
     *process.env.VITE_DEV_SERVER_URL
  * );
  } else {
    void mainWindow*loadFile(
      path.join(
       *__dirname,
        "../renderer/in*ex.html"
      )
    );
  }

  mai*Window.on(
    "closed",
    () =>*{
      mainWindow = null;
    }
**);
}

app.whenReady().then(() => {*  createWindow();

  app.on(
    "*ctivate",
    () => {
      if (
 *      BrowserWindow.getAllWindows(*
          .length === 0
      ) {*        createWindow();
      }
  * }
  );
});

app.on(
  "window-all*closed",
  () => {
    if (
      *rocess.platform !== "darwin"
    )*{
      app.quit();
    }
  }
);
`*
