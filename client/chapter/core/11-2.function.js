/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function(a, b, c, d, e, f, g) {

// 함수 안에서만 접근 가능한 인수들의 집합 객체
  // console.log(arguments);

  let total = 0;
  // for(let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }

  // for(let value of arguments) {
  //   total += value;
  // }

  // total = Array.prototype.reduce.call(arguments, (v, i)=>v += i);
  // Array.prototype.forEach.call(arguments, (v) => total += v);

  // 진짜 배열 만들기
  // const arr = Array.prototype.slice.call(arguments);
  // const arr = Array.from(arguments);

  // arguments의 (태생) 부모 자체를 배열로 바꿔버리면?
  // arguments.__proto__ = Array.prototype;
  // console.log(arguments);

  const arr = [... arguments];

  // arguments.forEach(v => total += v);
  
  // total = arr.reduce((acc, cur) => acc + cur);
  total = arr.reduce(function(acc, cur) {
    return acc + cur
  }, 0)


  return total;
};

const result = calculateTotal(1000, 2300, 5000, 1500, 3500, 4600, 35000);
console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;


// 콜백 함수 (표현)식
let callbackFunctionExpression;


// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression

let IIFE;

// 함수가 선언 됨과 동시에 실행되는 것을 말합니다.

// 📂
// import css from 'css.js' // module 


// var는 블록 스코프 : x
// var는 함수 스코프 : o


// incapsulation (캡슐화)
// 모듈화 

// const MASTER = (function (g){


//   console.log( g.alert() );
//   let uuid =  'askdjazxjd!@#!@$123';


//   return {
//     getKey(){
//       return uuid
//     },
//     setKey(value){
//       uuid = value
//     }
//   }

// })(window);




// // console.log(MASTER.getKey());

// MASTER.setKey('새로운 비밀번호')






const css = (function(){

  function getStyle(node,prop){

    if(typeof node === 'string') node = document.querySelector(node);
    if(typeof prop !== 'string') throw new Error('getStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.');

    return getComputedStyle(node,null)[prop]
  }

  function setStyle(node,prop,value){

    if(typeof node === 'string') node = document.querySelector(node);
    if(typeof prop !== 'string') throw new Error('setStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.');
    if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.')
    
    node.style[prop] = value;

  }

  function css(node,prop,value){
    // if(!value){
    //   return getStyle(node,prop) // getter
    // }else{
    //   setStyle(node,prop,value) // setter
    // }

    return !value ? getStyle(node,prop) : setStyle(node,prop,value);

  }

  return css
})()