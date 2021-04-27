'use strict';

// variables
const formElement = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const textInput = document.querySelector('#message');
// Create parent container variable to append new items to
const parentContainer = document.querySelector('.comment-section');

// Current date variables
let currentDate = new Date();
let numericalDate = currentDate.getDate();
let currentDay = currentDate.getDay();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Date arrays
const dayStrings = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthStrings = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let dateModifier = '';
if(numericalDate === 1 || numericalDate === 21 || numericalDate === 31) {
    dateModifier = 'st';
} else if (numericalDate === 2 || numericalDate === 22) {
    dateModifier = 'nd';
} else if (numericalDate === 3 || numericalDate === 23) {
    dateModifier = 'rd';
} else {
    dateModifier = 'th';
}

// 
// EVENT LISTENER FUNCTION
formElement.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the users typed name
    const userName = nameInput.value;
    console.log(userName);

    //Create the flex Element and add Classes
    const commentBoxItem = document.createElement('div');
    commentBoxItem.classList.add('flex');
    commentBoxItem.classList.add('comment-box');

    // Create a div element to hold the IMAGE (appends to the commentBoxItem)
    const commentBoxImg = document.createElement('div');
    commentBoxImg.classList.add('comment-box-img');
    commentBoxImg.innerHTML = `<img src="https://www.placecage.com/c/100/100" alt="user image">`;

    // create div to hold DATE (h4) and TEXTAREA INPUT 
    const commentBoxContainer = document.createElement('div');
    commentBoxContainer.classList.add('comment-box-text');
        // create date variable and h4 to hold date

        const dateHeading = document.createElement('h4');
        dateHeading.textContent = `${dayStrings[currentDay]} ${monthStrings[currentMonth]} ${numericalDate}${dateModifier}, ${currentYear} by ${userName}`;
        // create paragraph to hold input from textarea

        const commentBoxPara = document.createElement('p');
        commentBoxPara.innerHTML = textInput.value;

    // APPEND everything to the appropriate parent like in the HTML 
    parentContainer.appendChild(commentBoxItem);
    commentBoxItem.appendChild(commentBoxImg);
    commentBoxItem.appendChild(commentBoxContainer);
    commentBoxContainer.appendChild(dateHeading);
    commentBoxContainer.appendChild(commentBoxPara);


    // Reset conditions
    nameInput.value = '';
    textInput.value = '';
})

