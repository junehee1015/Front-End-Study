'use strict'

// 1. 쿠키 생성
// 생성시 encoding되어 저장된다.
// Cookies.set(name, value, {expires: , path: , domain: })
function setCookies(name, value, period) {
    event.preventDefault();

    name = document.querySelector('#cookieName').value;
    value = document.querySelector('#cookieValue').value;
    period = document.querySelector('#expiryDate').value;

    // input 값은 String이기 때문에 number로 변환.
    const expiryDate = parseInt(period);
    console.log(expiryDate);
    
    // 쿠키 생성
    Cookies.set(name, value, {expires: expiryDate});
    alert('Cookie가 생성되었습니다.');

    // input 초기화
    // name = "";
    // value = "";
    // period = "";
    document.querySelector('main tbody form').reset();
}

// addEventListener로 submit을 받아 setCookies() 실행
const form = document.querySelector('form');
form.addEventListener('submit', setCookies);



// 2. 쿠키 읽기
// 불러올때 decoding되어 불러온다.
// Cookies.get(name)
function getCookies() {
    const getCookieName = document.querySelector('#getCookieName');
    
    // input으로 받은 Cookie Name의 존재 유무
    const check = Cookies.get().hasOwnProperty(getCookieName.value);

    if(Cookies.get() == "") {

        alert('존재하는 Cookie가 없습니다.');

    }else {
        if(check == false) {

            alert('Cookie의 Name을 정확히 입력해주세요.');

        }else {
            
            // name 값으로 value 값 읽기
            const cookie = Cookies.get(getCookieName.value);
            alert(`{${getCookieName.value}: '${cookie}'}`);

            // 모든 쿠키 읽기
            const allCookies = Cookies.get();
            console.log(allCookies); // 객체 형태로 반환 {name: 'value', ...}
            // encoding 되어 저장되기 때문에 라이브러리를 사용하지 않으면 decoding을 해주어야 된다.
            alert(decodeURIComponent(document.cookie));            
        }
    }
    getCookieName.value = "";
}


// 3. 쿠키 삭제
// 삭제시 option(path, domain 등)을 설정했다면 같이 삭제해주어야 한다.
// Cookies.remove(name);
function delCookie() {
    const delCookie = document.querySelector('#delCookie');
    const check = Cookies.get().hasOwnProperty(delCookie.value);
    
    if(check == false){
        alert('삭제 할 Cookie Name을 정확히 입력하세요.');
    }else {
        if(confirm(`{ ${delCookie.value}: ${Cookies.get(delCookie.value)} } \n 해당 Cookie를 삭제하시겠습니까?`)) {
            const delOption = {
                // 삭제할 option(path, domain 등) 작성
            };
            Cookies.remove(delCookie.value, delOption);
            alert('삭제되었습니다.');
        }
    }
    delCookie.value = "";
}


// 4. 전체 Cookie 삭제
function allDelCookies() {

    if(document.cookie == "") {
        alert('Cookie가 존재하지 않습니다.');
    }else {
        if(confirm('모든 Cookie를 삭제하시겠습니까?')) {
            Object.keys(Cookies.get()).forEach(value => {
                const delOption = {
                    // 삭제할 option(path, domain 등) 작성
                };
                Cookies.remove(value, delOption);
            });
            alert('삭제되었습니다.');
            location.reload();
        }
    }
}
