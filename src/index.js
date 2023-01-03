import './style.css';
import greeting from './greeting.js';

const h1 = document.querySelector('h1');
h1.innerHTML = greeting('John Doe');