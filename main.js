//bring these in to load HTML files
//bring in the app and browser window from electron
const{app,BrowserWindow} = require('electron');
//bring in path module or node js module
const path = require('path');
//bring in url module to load index HTML
const url = require('url');
//

let win; // global reference to the window object, initialization

function createWindow(){

  //create a browser window, options are available as arguments
  win = new BrowserWindow({width:800,height:600, icon: __dirname+'/img/sysinfo.png'})

//load in HTML file from the following url format
//protocol means from where. Here we mean the filesystem
// you can use http as well

  win.loadURL(url.format({
    pathname: path.join(__dirname,'index.html'),
    protocol: 'file:',
    slashes: true
  }));

//this opens devtools for integration mode
  win.webContents.openDevTools();
  win.on('closed',() => {
    win = null;

  });
}

//Run create window function
app.on('ready',createWindow);

//quit when all windows are closed

// NOTE: the () => is an arrow function this function uses the value of the enclosing block
// instead of creating a value of their own

//NOTE: arrow functions don’t bind this to the object that called them. They just use the value of this in the scope in which they were defined
//NOTE: primary functiuon of arrow functions is callbacks not OOP

app.on('window-all-closed',()=>{
  //test if user is a mac
  if(process.platform !== 'darwin'){
    app.quit();
  }

})
