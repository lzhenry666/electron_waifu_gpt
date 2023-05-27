const {app, BrowserWindow, screen} = require('electron');
let win;
const screen_size ={
    width: 500,
    height: 500
}

const  window = () => {
     win = new BrowserWindow({

        width: screen_size.width,
         height: screen.getPrimaryDisplay().workAreaSize.height,
         x:screen.getPrimaryDisplay().workAreaSize.width - screen_size.width,
         y: 0,
        transparent: true,
        alwaysOnTop: true,
        frame: false,
         });
}
const openlink = () => {
    const url = 'https://chat.openai.com/?model=gpt-4-browsing&AIPRM_PromptID=2000104';
    win.loadURL(url);
}

const  changeName = () => {

    window.webContents.executeJavaScript(`
    const gptlogo = document.querySelector('.text-4xl');
    gptlogo.innerHTML = "Waifu AI";`);
}

app.on('ready', () => {
    window();
    openlink();
    changeName();
});

window.webContents.on('did-finish-load', () => {
 changeName();
});