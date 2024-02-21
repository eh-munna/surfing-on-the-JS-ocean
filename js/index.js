// JavaScript HTML DOM
const div = document.getElementById('dom-practice-area');
const thirdP = div.querySelector('p:nth-child(3)');
thirdP.id = 'practice';
if (thirdP) {
  thirdP.innerText = 'test 3';
}

const p = document.createElement('p');
p.id = 'practice2';
p.innerText = 'test 4';
div.appendChild(p);
