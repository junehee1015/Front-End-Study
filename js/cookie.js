'use strict'

// Javascript로 Cookie create, read, delete
// document.cookie = 'name1 = ; name2 = ; expires = ; path =';
// main은 1개의 name과 expires(만료)

// 사용 방법
// 1. Javascript에서 사용자가 직접 함수를 만들어 Cookie 사용.
// 2. Javascript의 Cookie 관련 경량 라이브러리를 사용.


// Create Cookie 
// submit으로 받은 값들
function setCookie(name, value, expire) {

    // submit 또는 href 발생시 이동 방지 및 새로고침 방지
    event.preventDefault();

    // 사용자 지정 Cookie Name
    name = document.querySelector('#cookieName').value;
    value = document.querySelector('#cookieValue').value;
    expire = document.querySelector('#expiryDate').value; // String
    
    // 만료일 생성
    // 민료일 설정 -> setDate(getDate() + 만료기간)
    let date = new Date();
    date.setDate(date.getDate() + parseInt(expire)); // expire를 number로 형 변환
    
    // 날짜를 Cookie로 저장하기 위해서 UTC방식으로 표기해야 한다.
    const expiryDate = date.toUTCString();
    
    // Cookie 생성
    const cookies = `${name}=${value}; expires=${expiryDate}`;

    // Cookie 저장
    document.cookie = cookies;
    // alert(`[ Cookie ] \n name: ${name} \n value: ${value} \n 만료일: ${expiryDate} \n 저장 완료.`);
    alert('Cookie 저장 완료.');

    // input 초기화
    // 1.
    // document.querySelector('#cookieName').value = "";
    // document.querySelector('#cookieValue').value = "";
    // document.querySelector('#expiryDate').value = "";
    
    // 2.
    document.querySelector('main tbody form').reset(); // form reset
}
// addEventListener로 submit을 받아 Cookie 생성 함수 실행
const form = document.querySelector('main tbody form');
form.addEventListener('submit', setCookie);



// Read Cookie
function getCookies() {
    // local에 저장된 cookie 가져오기
    const cookies = document.cookie; // String(문자열)로 return
    
    cookies == '' ? alert('저장 된 Cookie가 없습니다.') : alert(`[ ${cookies} ]`);
}



// Delete Cookie
// Cookie의 만료일을 과거로 설정하여 Cookie를 만료시켜 삭제한다.
// Cookie 생성시 option(path, domain 등)을 사용했다면 포함하여 삭제해야 한다.
function delCookie() {
    const delCookieName = document.querySelector('#delCookie');
    
    function getDelCookie(name) {
        // Cookie Name 뒤에 =이 붙는 것을 이용하여 indexof 사용시 input으로 받은 값이 존재 하는지 여부 확인 가능
        const delName = name + '=';
        // Cookie가 여러개일때 (name1=value1; name2=value2) 이런식으로 나뉘기 때문에 세미콜론 뒤에 공백을 추가하여 없애고 배열로 반환한다.
        const allCookies = document.cookie.split('; ');
        let delCookie = [];

        allCookies.forEach((value, index) => {
            if(value.indexOf(delName) == 0) {
                // ['name=value'] 형태의 배열을 ['name', 'value']의 형태로 반환한다.
                // 그러면 index[0] = name / index[1] = value로 나눌 수 있다.
                delCookie = value.split('=');
            }
        });
        // 삭제할때 name이 필요하기 때문에 index[0]을 return 해준다.
        return delCookie[0];
    }
    
    if(getDelCookie(delCookieName.value) != delCookieName.value)
        alert('Cookie Name을 정확히 입력해주세요.');
    else{
        if(confirm('해당 Cookie를 삭제하시겠습니까?')) {
            // expiry date(만료일)을 과거로 수정하여 Cookie의 유효기간이 끝나도록 한다.
            document.cookie = `${getDelCookie(delCookieName.value)}=; expires=Sat, 01 Jan 2000 00:00:00 GMT`;
            alert('Cookie를 삭제하였습니다.');
        }
    }
    delCookieName.value = "";
}


// All Delete Cookie
function allDelCookies(domain, path) {
    domain = domain || document.domain,
    path = path || '/';
    const allDelConfirm = confirm('Cookie를 모두 삭제하시겠습니까?');
    if(allDelConfirm) {
        if(document.cookie == "")
            alert('저장된 쿠키가 없습니다.');
        else {
            // split('; ') -> 세미콜론 마다 잘라서 배열로 반환
            // -> 배열로 반환 전 세미콜론 뒤에 공백이 있기 때문에 한 칸 띄워줘야 공백 없이 분할된다.
            const cookies = document.cookie.split('; ');
            const expiryDate = 'Sat, 01 Jan 2000 00:00:00 GMT';
            
            // 정방향
            for(let i=0; i<cookies.length; i++) {
            // 역방향
            // for(let i=cookies.length-1; i>= 0; i--) {
                
                // [name=value] 의 형태를 split('=')으로 나눈 index[0]번째를 출력하면 name만 반환할 수 있다.
                // 반복문을 통해서 Cookie의 모든 Name들의 만료일을 만료시킨다.
                document.cookie = cookies[i].split('=')[0] + '=; expires='+ expiryDate;
                
                // domain이나 path가 필요한 상황에 붙여서 사용할 수 있다.
                document.cookie += '; domain=' + domain+ + '; path=' + path;
            }
            alert('Cookie가 모두 삭제되었습니다.');
        }
    }
}