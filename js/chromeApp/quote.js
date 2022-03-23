'use strict'
const quotes = [
    {
        quote: `'나 자신에 대한 자신감을 잃으면 온 세상이 나의 적이 된다.'`,
        author: `-랄프 왈도 에머슨-`
    },
    {
        quote: `'인생에서 가장 슬픈 세 가지. 할 수 있었는데, 해야 했는데, 해야만 했는데.'`,
        author: `-루이스 E. 분-`
    },
    {
        quote: `'인생은 곱셈이다. 어떤 기회가 와도 내가 제로면 아무런 의미가 없다.'`,
        author: `-나카무라 미츠루-`
    },
    {
        quote: `'생명이 있는 한 희망이 있다. 실망을 친구로 삼을 것인가, 아니면 희망을 친구로 삼을 것인가.'`,
        author: `-J.위트-`
    },
    {
        quote: `'슬픔이 그대의 삶으로 밀려와 마음을 흔들고 소중한 것을 쓸어가 버릴 때면 그대 가슴에 대고 말하라. “이것 또한 지나가리라”'`,
        author: `-랜터 윌슨 스미스-`
    },
    {
        quote: `'추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다.'`,
        author: `-월트 디즈니-`
    },
    {
        quote: `'열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.'`,
        author: `-윈스턴 처칠-`
    },
    {
        quote: `'나는 실패한 게 아니다. 나는 잘 되지 않는 방법 1만 가지를 발견한 것이다.'`,
        author: `-토마스 에디슨-`
    },
    {
        quote: `'간단하게 설명할 수 없으면 제대로 이해하지 못하는 것이다.'`,
        author: `-알버트 아인슈타인-`
    },
    {
        quote: `'실패에서부터 성공을 만들어 내라. 좌절과 실패는 성공으로 가는 가장 확실한 디딤돌이다.'`,
        author: `-데일 카네기-`
    },
    {
        quote: `'성공하려면 당신을 찾아오는 모든 도전을 다 받아들여야 한다. 마음에 드는 것만 골라 받을 수는 없다.'`,
        author: `-마이크 가프카-`
    }
];

const quote = document.querySelector(`#quote span:first-child`);
const author = document.querySelector(`#quote span:last-child`);

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;