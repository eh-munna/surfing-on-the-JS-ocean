// JS Browser Object Model

const windowWidth = document.getElementById('window-width');
const windowHeight = document.getElementById('window-height');
windowWidth.innerText = `Window Width: ${window.innerWidth} px`;
windowHeight.innerText = `Window Height: ${window.innerHeight} px`;

// open and close window

const openWindow = document.getElementById('open-window');
const closeWindow = document.getElementById('close-window');

let myWindow;

openWindow.onclick = () => {
  myWindow = window.open(
    `https://www.w3schools.com/js/js_window.asp`,
    '_blank'
  );
};

closeWindow.onclick = () => {
  myWindow.close();
};

const back = document.getElementById('back');
const forward = document.getElementById('forward');

back.onclick = () => {
  history.back();
};

forward.onclick = () => {
  history.forward();
};

let intervalInstance;
const startTime = () => {
  intervalInstance = setInterval(() => {
    let time = new Date().toLocaleTimeString();
    document.getElementById('time').innerText = time;
  }, 1000);
};

const stopTime = () => {
  clearInterval(intervalInstance);
};

document.getElementById('start-watch').onclick = startTime;
document.getElementById('stop-watch').onclick = stopTime;
