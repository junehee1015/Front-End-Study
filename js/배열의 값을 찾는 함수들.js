'use strict'

// startWith()
// 문자열 검색시 특정 문자열로 시작하는지를 true또는 false로 반환한다.
// str.startWith(검색 문자열, position)
// -> position은 검색 문자열을 탐색할 위치를 지정한다. (default = 0)
// -> 대소문자 구분

// 1. 문자열
const str = '가나다라마바사아자차카타파하';
console.log(str.startsWith('가나다')); // true
console.log(str.startsWith('다라')); // false
console.log(str.startsWith('다라', 2)); // index 0부터 시작하여 2번째에 '다라'로 시작하여 true

// 2. 배열
const animal = '1=dog; 2=cat; 3=horse; 4=tiger; 5=lion';
const arr = animal.split('; ');
console.log(arr);

// find()
// find vs forEach
// -> paramter는 value, index, array로 같다.
// -> find는 배열에서 원하는 값만 찾아낼 수 있지만 forEach는 배열의 길이만큼 실행된다.
const value1 = arr.find(value => value.startsWith(5));
console.log(value1);

const value2 = value1.split('=');
// const value2 = value1.split('=')[1]; // lion
console.log(value2[1]); //lion


// findIndex()
// -> 일치하는 값의 index 번호를 반환한다.
const value3 = arr.findIndex(value => value.startsWith(5));
console.log(value3); // 4


// indexOf()
// -> 배열에 해당 값이 있는지 확인하여 해당 값이 존재하는 index 번호를 반환한다. 없으면 -1
const value4 = arr.indexOf('2=cat');
console.log(value4);


// includes()
// -> 배열에 해당 값이 있는지 확인하여 true 또는 false를 반환한다.
const value5 = arr.includes('1=dog');
console.log(value5);