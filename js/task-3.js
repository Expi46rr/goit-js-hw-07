const userName = document.querySelector('#name-input');
const userNameElem = document.querySelector('#name-output');

userName.addEventListener('input', () => { 
    const value = userName.value;


    userNameElem.textContent = value;

});