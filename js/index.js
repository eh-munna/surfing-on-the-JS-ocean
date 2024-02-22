// Web API

// JavaScript Validation API

const formInput = document.getElementById('form-input');
const inputValidation = () => {
  if (!formInput.checkValidity()) {
    document.getElementById('result').innerText = formInput.validationMessage;
  }
};

// Web Storage API

document.getElementById('setLocal').addEventListener('click', () => {
  localStorage.setItem('username', 'Munna');
});

// Web Workers API

let worker;

const startWorker = () => {
  if (typeof Worker !== 'undefined') {
    if (typeof worker === 'undefined') {
      worker = new Worker('js/worker.js');
    }
    worker.onmessage = function (event) {
      document.getElementById('worker-status').innerText = event.data;
    };
  } else {
    alert('Your browser does not support Web Workers');
  }
};

document.getElementById('start-worker').addEventListener('click', () => {
  startWorker();
});

document.getElementById('check-status').addEventListener('click', () => {
  alert(`Countdown is going on...`);
});
