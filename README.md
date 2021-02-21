# Momentum Clone

## 익숙하지 않은..

- fetch
- 첫 번째 then에서 return을 했는 데, 그 다음 then으로 넘어감

```js
function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`,
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      temp.innerText = `${Math.floor(json.main.temp)}°`;
      region.innerText = json.name;
    });
}
```

---

- navigator 객체
- js에 사용자의 정보를 알 수 있는 객체가 존재함

```js
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
```

---

- role속성과 contenteditable속성
- contenteditable 속성을 넣으면 이름 그대로 태그의 content를 수정할 수 있다.

```html
<span id="name-edit-input" class="hidden" role="textbox" contenteditable></span>
```
