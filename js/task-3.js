const userName = document.querySelector('#name-input');
const userNameElem = document.querySelector('#name-output');

userName.addEventListener('input', () => {
  const trimmedValue = userName.value.trim();

  if (trimmedValue === '') {
    userNameElem.textContent = 'Anonymous';
  } else {
    userNameElem.textContent = trimmedValue;
  }
});