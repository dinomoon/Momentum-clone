const apps = document.querySelector('.apps'),
  name = document.querySelector('#name'),
  askNameWrap = document.querySelector('.ask-name-wrap'),
  askNameForm = askNameWrap.querySelector('form'),
  askNameInput = askNameWrap.querySelector('input');

function handleName(e) {
  e.preventDefault();
  let inputName = askNameInput.value;
  localStorage.setItem('name', inputName);
  name.innerHTML = `${inputName}.`;
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
    name.innerHTML = `${currentName}.`;
  }
}

askName();
