const askFocusWrap = document.querySelector('.ask-focus-wrap'),
  askFocusForm = askFocusWrap.querySelector('.focus-form'),
  askFocusInput = askFocusForm.querySelector('input'),
  todayFocusWrap = document.querySelector('.today-focus-wrap'),
  todayFocusText = todayFocusWrap.querySelector('.today-focus-text span'),
  checkbox = document.querySelector('#check-box');

let checked = false;

function handleFocus(e) {
  e.preventDefault();
  const focusValue = askFocusInput.value;
  localStorage.setItem('focus', focusValue);
  todayFocusText.innerHTML = focusValue;
  askFocusWrap.classList.add('hidden');
  todayFocusWrap.classList.remove('hidden');
}

askFocusForm.addEventListener('submit', handleFocus);
todayFocusWrap.addEventListener('mouseover', function () {
  if (checked) {
    checkbox.className = 'far fa-check-square';
  } else {
    checkbox.className = 'far fa-square';
  }
});
todayFocusWrap.addEventListener('mouseleave', function () {
  if (checked) {
    checkbox.className = 'far fa-check-square';
  } else {
    checkbox.className = '';
  }
});
checkbox.addEventListener('click', function () {
  if (checkbox.className === 'far fa-square') {
    checkbox.className = 'far fa-check-square';
    todayFocusText.style.textDecoration = 'line-through';
    checked = true;
    localStorage.setItem('focus-check', true);
  } else {
    checkbox.className = 'far fa-square';
    todayFocusText.style.textDecoration = 'none';
    checked = false;
    localStorage.setItem('focus-check', false);
  }
});

function askFocus() {
  const currentFocus = localStorage.getItem('focus');
  if (currentFocus === null) {
    todayFocusWrap.classList.add('hidden');
  } else {
    askFocusWrap.classList.add('hidden');
    todayFocusText.innerHTML = currentFocus;
  }
}

function isChecked() {
  const currentCheckStatus = localStorage.getItem('focus-check');
  if (currentCheckStatus === null || currentCheckStatus === 'false') {
    checked = false;
    todayFocusText.style.textDecoration = 'none';
  } else {
    checked = true;
    checkbox.className = 'far fa-check-square';
    todayFocusText.style.textDecoration = 'line-through';
  }
}

function init() {
  isChecked();
  askFocus();
}

init();
