'use strict'

// navigator.geolocation.getCurrentPosition(success(), error())
// -> success: user의 위치를 받는다.
// -> 브라우저에서 위치 좌표를 반환한다. (WiFi, 위치, GPS 등등)

// Weather API
// -> https://openweathermap.org/api -> Current Weather Data 

const API_KEY = '79bc3e8a8e02142641c430ac50cd6724';
// success
function geoSuccess(position) {
    const latitude = position.coords.latitude; // 위도
    const longitude = position.coords.longitude; // 경도
    // API_KEY 뒤에 &units=metric 추가: 화씨 -> 섭씨
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    // fetch는 promise이다. 
    // -> 당장 일어나지 않고 시간이 걸린뒤에 일어난다.
    // -> .then()으로 응답을 받는다.
    // -> .json() 받아온 정보.
    // F12 -> Application -> Frames -> XHR and Fetch에서 확인 가능.
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const city = document.querySelector('#weather span:first-child');
        city.innerText = data.name;
        const temp = document.querySelector('#weather span:nth-child(2)');
        temp.innerText = `${data.main.temp}℃`;
        const weather = document.querySelector('#weather span:last-child');
        weather.innerText =  data.weather[0].main;
    });
}

// fail
function geoError() {
    alert(`Can't find you.`);
}
navigator.geolocation.getCurrentPosition(geoSuccess, geoError);