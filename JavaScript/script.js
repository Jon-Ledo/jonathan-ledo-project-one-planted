'use strict';

// MODAL WINDOW
// variables
const modal = document.querySelector('.modal')
const modalBtnSelector = document.querySelectorAll('.btn');
const modalOpenBtn = modalBtnSelector[2];
const modalCloseBtn = document.querySelector('.modal-close');
const all = document.querySelector('html');

modalOpenBtn.addEventListener('click', function() {
    // Removes hidden class, REVEAL the modal window
    modal.classList.remove('hidden');

})

modalCloseBtn.addEventListener('click', function () {
    // Add the hidden class, CLOSES the modal window
    modal.classList.add('hidden');
})