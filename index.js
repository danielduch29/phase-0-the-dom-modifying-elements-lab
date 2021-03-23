// Write your code here!
//const main = document.body.appendChild('main');
//main.removeChild();
const mainDel = document.querySelector('main');
mainDel.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML("Daniel is the champion");

