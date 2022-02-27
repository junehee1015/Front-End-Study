'use strict'

const popup = document.querySelector('.popup');
const popup_bg = document.querySelector('.popup_bg');
const popupCookieBtn = document.querySelector('.popupCookieBtn');
const closeBtn = document.querySelector('.closeBtn');
const popupCookie = Cookies.get('popupCookie');
const btn = document.querySelector('button');

// 팝업 창 보이기
const showPopup = () => {
    popup.classList.add('showPopup');
};
// 팝업 창 닫기
const closePopup = (check, expiryDate) => {
    popup.classList.remove('showPopup');

    // parameter 값이 넘어오면 Cookie가 생성되도록 설정
    if(check == 1) {
        if(popupCookie == undefined){
            Cookies.set('popupCookie', 'yes', {expires: expiryDate});
            location.reload();
        }
    }
};
// 쿠키 삭제
const delCookie = () => {
    if(popupCookie == undefined) 
        alert('Cookie가 존재하지 않습니다.');
    else {
        if(confirm('Pop up Cookie를 삭제하시겠습니까?')) {
            Cookies.remove('popupCookie');
            location.reload();
        }
    }
};

// cookie가 없으면 팝업창이 보이게 한다.
if(popupCookie == undefined)
    showPopup();

// 배경화면 또는 확인 버튼을 눌렀을 때 팝업창이 안보이도록 한다.
popup_bg.addEventListener('click', closePopup);
closeBtn.addEventListener('click', closePopup);

// 오늘 하루 창 닫기
popupCookieBtn.addEventListener('click', () => {
    closePopup(1, 1);
});

// 쿠키 삭제
btn.addEventListener('click', delCookie);