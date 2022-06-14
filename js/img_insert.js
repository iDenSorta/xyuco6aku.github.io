const urlParams = new URLSearchParams(window.location.search);
let myParamsType = urlParams.get('type');
const myParamsNumber = urlParams.get('number');
const image = document.createElement('img');
const h2 = document.createElement('h2');

console.log(myParamsType);
console.log(myParamsNumber);

image.src = '../img/sample/' + myParamsType + '/' + myParamsNumber + '.svg'
document.querySelector('#banner-img').appendChild(image);
console.log(myParamsType === 'ip');

myParamsType = myParamsType.replace('ooo', 'OOO');
myParamsType = myParamsType.replace('ip', 'ИП');
myParamsType = myParamsType.replace('design_OOO', 'OOO');  
myParamsType = myParamsType.replace('dr', 'врача');

console.log(myParamsType);

h2.textContent = 'Печать ' + myParamsType + ' образец № ' + myParamsNumber;

console.log(h2)

document.querySelector('#stamps_banner_text').appendChild(h2);