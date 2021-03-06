const apps = document.querySelector('.apps'),
  name = document.querySelector('#name'),
  askNameWrap = document.querySelector('.ask-name-wrap'),
  askNameForm = askNameWrap.querySelector('form'),
  askNameInput = askNameWrap.querySelector('input'),
  center = apps.querySelector('.center'),
  greetingWrap = center.querySelector('h1'),
  editIcon = greetingWrap.querySelector('i'),
  nameEditInput = greetingWrap.querySelector('#name-edit-input'),
  dot = greetingWrap.querySelector('.dot');

let isEditing = false;

// greeting block에 마우스 올렸을 때
greetingWrap.addEventListener('mouseover', function () {
  editIcon.className = 'far fa-edit';
});

// greeting block에서 마우스 떠났을 때
greetingWrap.addEventListener('mouseleave', function () {
  editIcon.className = '';
});

// edit 버튼 클릭했을 때
editIcon.addEventListener('click', function () {
  if (!isEditing) {
    nameEditInput.className = '';
    nameEditInput.innerText = name.textContent;
    name.className = 'hidden';
    isEditing = true;
  } else {
    name.className = '';
    name.innerText = nameEditInput.innerText;
    nameEditInput.className = 'hidden';
    localStorage.setItem('name', nameEditInput.innerText);
    isEditing = false;
  }
});

// nameEditInput에서 Enter와 BackSpace를 눌렀을 때
nameEditInput.addEventListener('keydown', function (e) {
  const keyCode = e.keyCode;
  if (keyCode == 8) {
    if (nameEditInput.textContent.length === 1) {
      dot.style.marginLeft = 0;
    }
  } else {
    dot.style.marginLeft = '-1rem';
  }

  if (keyCode == 13) {
    name.className = '';
    name.innerText = nameEditInput.innerText;
    nameEditInput.className = 'hidden';
    localStorage.setItem('name', nameEditInput.innerText);
  }
});

function handleName(e) {
  e.preventDefault();
  let inputName = askNameInput.value;
  localStorage.setItem('name', inputName);
  name.innerHTML = inputName;
  askNameWrap.classList.add('hidden');
  apps.classList.remove('hidden');
}

askNameForm.addEventListener('submit', handleName);

function askName() {
  const currentName = localStorage.getItem('name');
  if (currentName === null) {
    apps.classList.add('hidden');
  } else {
    askNameWrap.classList.add('hidden');
    name.innerHTML = currentName;
  }
}

askName();
