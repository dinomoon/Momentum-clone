const askFocusWrap = document.querySelector('.ask-focus-wrap'),
  askFocusForm = askFocusWrap.querySelector('.focus-form'),
  askFocusInput = askFocusForm.querySelector('input'),
  todayFocusWrap = document.querySelector('.today-focus-wrap'),
  todayFocusText = todayFocusWrap.querySelector('.today-focus-text .text'),
  checkbox = todayFocusWrap.querySelector('#check-box'),
  focusDelBtn = todayFocusWrap.querySelector('#focus-del-btn');

let checked = false;

function handleFocus(e) {
  e.preventDefault();
  const focusValue = askFocusInput.value;
  localStorage.setItem('focus', focusValue);
  todayFocusText.innerHTML = focusValue;
  askFocusWrap.classList.add('hidden');
  todayFocusWrap.classList.remove('hidden');
  localStorage.setItem('focus-check', false);
  checked = false;
  todayFocusText.style.textDecoration = 'none';
}

askFocusForm.addEventListener('submit', handleFocus);

// focus block에 마우스 올렸을 때
todayFocusWrap.addEventListener('mouseover', function () {
  if (checked) {
    checkbox.className = 'far fa-check-square';
  } else {
    checkbox.className = 'far fa-square';
  }
  focusDelBtn.className = 'fas fa-times';
});

// focus block에서 마우스가 나갔을 때
todayFocusWrap.addEventListener('mouseleave', function () {
  if (checked) {
    checkbox.className = 'far fa-check-square';
  } else {
    checkbox.className = '';
  }
  focusDelBtn.className = '';
});

// checkbox 클릭했을 때
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

// del button 클릭했을 때
focusDelBtn.addEventListener('click', function () {
  todayFocusWrap.classList.add('hidden');
  askFocusWrap.classList.remove('hidden');
  localStorage.setItem('focus', '');
  askFocusInput.value = '';
});

// focus 설정되어있는지 확인
function askFocus() {
  const currentFocus = localStorage.getItem('focus');
  if (currentFocus == false || currentFocus === null) {
    todayFocusWrap.classList.add('hidden');
  } else {
    askFocusWrap.classList.add('hidden');
    todayFocusText.innerHTML = currentFocus;
  }
}

// 체크되어있는지 확인
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
