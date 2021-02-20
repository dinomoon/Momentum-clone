const time = document.querySelector('#time'),
  greeting = document.querySelector('#greeting'),
  content = document.querySelector('#content'),
  author = document.querySelector('#author');

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes();

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}`;

  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBg() {
  let hour = new Date().getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = 'url(images/morning.jpg)';
    greeting.textContent = 'Good morning, ';
  } else if (hour < 18) {
    document.body.style.backgroundImage = 'url(images/afternoon.jpg)';
    greeting.textContent = 'Good afternoon, ';
  } else {
    document.body.style.backgroundImage = 'url(images/night.jpg)';
    greeting.textContent = 'Good evening, ';
  }

  document.body.style.backgroundSize = 'cover';
  document.body.style.color = '#fff';
}

async function randomQuote() {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  content.innerHTML = `"${data.content}"`;
  author.innerHTML = `-${data.author}`;
}

function init() {
  showTime();
  setBg();
  randomQuote();
}

init();
