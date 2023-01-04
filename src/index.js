import './style.css';

import { DISPLAY } from './modules/homepage.js';
import selectedCardDetails from './modules/modal.js';


DISPLAY();

setTimeout(() => {
  const commentButton = document.querySelectorAll('button.comment');

  commentButton.forEach(button => {
    button.addEventListener('click', () => {
      let buttonID = button.getAttribute('id');
      selectedCardDetails(parseInt(buttonID, 10))
    })
  })
}, 1000);