'use strict'
const elementName = document.getElementById('name');
const elementSurname = document.getElementById('surname');
const elementColor = document.getElementById('color');
const number = Math.floor((Math.random() * 10) + 1);


const nameInput = prompt('insert your name');
const surnameInput = prompt('insert your surname');
const colorInput = prompt('insert your favourite color');

const password = nameInput + surnameInput +colorInput + number;

elementName.innerHTML = password; 

console.log(password);
 


