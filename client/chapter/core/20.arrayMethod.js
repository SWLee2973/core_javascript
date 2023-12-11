/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

console.log(Array.isArray([]));
console.log(isArray([]));
// console.log(isArrayArrow([]));

function isArray(target) {
  // return Array.isArray(target);
  return Object.prototype.toString.call(target).slice(8, -1).toLowerCase() === 'array';
}

// const isArrayArrow = target => Array.isArray(target);

const people = [
  {
    id: 0,
    name: '김다영',
    job: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'ASdkl31'
  },
  {
    id: 1,
    name: '김충만',
    job: '치킨집사장',
    age: 52,
    imageSrc: 'asFkzo23'
  },
  {
    id: 2,
    name: '조윤주',
    job: '화가',
    age: 12,
    imageSrc: 'Gzoskq13'
  },
  {
    id: 3,
    name: '송현규',
    job: '마델',
    age: 25,
    imageSrc: 'aabaq23'
  }
]

/* 요소 순환 ---------------------------- */

// forEach
// arr.forEach((item, index) => {
//   // console.log(item, index)
// })

people.forEach((item) => {
  console.log(item.job);
})

const span = document.querySelectorAll('span');

span.forEach((item) => {
  item.addEventListener('click', function(e) {
    this.style.color = 'red';    
  })
})

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort


// const reverseArray = arr.reverse();
const arr = [10, 100, 1000, 10_000];
const reverseArray = arr.toReversed(); // 원형 파괴 안함.

// console.log(arr);
// console.log(reverseArray);

console.log(arr.toSpliced(1, 2, 'javascript', 'css', 'react'));
console.log(arr);

const a = arr.toSorted((a, b) => {
  return b - a;
})

console.log(a);


/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map


// 
const card = people.map((item,index)=>{
  return /* html */`
    <div class='userCard card${index}'>
      <div class="imageField">
        <img src="${item.imageSrc}.jpg" alt="${item.alt}" />
      </div>
      <span>이름 : ${item.name}</span>
      <span>나이 : ${item.age}</span>
      <span>직업 : ${item.job}</span>
    </div>
  `
})

// console.log(card);


// card.forEach((item)=>{
//   document.body.insertAdjacentHTML('beforeend',item);
// })

const newAge = people.map(item => item.age - 2)

console.log( newAge );

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find

// 이름이 송현규
console.log( people.find(item => item.name == '송현규') );

const findUser = people.find((item) => {
  return item.age < 30;
})

console.log(findUser);

// findIndex
console.log( people.findIndex(item => item.name == '송현규') );

/* 요소 걸러내기 --------------------------- */

// filter

const 사장님빼고모여 = people.filter((item) => {
  return item.age < 30;
})

console.log(사장님빼고모여);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const totalAge = people.reduce((acc, cur) => {
  return acc + cur.age
}, 0)

const template = people.reduce((htmlCode, cur) => htmlCode + `<div>${cur.name} : ${cur.age} 살</div>`, '');

console.log( template );

document.body.insertAdjacentHTML('beforeend', template);

// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join

const str = '종명 예진 현주 지인 훈 은원';

// split : 문자 -> 배열
const stringToArray = str.split(' ');

console.log(stringToArray)

// join : 배열 -> 문자
const arrayToString = stringToArray.join('-');
console.log(arrayToString);