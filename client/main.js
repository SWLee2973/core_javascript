// 모듈 프로그래밍

// //named export (이름 내보내기) -> { 이름 }
// import { getNode } from "./lib/dom/getNode.js";
// import { insertLast } from "./lib/dom/insert.js";
// //default export (기본 내보내기) -> 이름
// import clearContents from "./lib/dom/clear.js";

import {getNode, clearContents, insertLast} from './lib/index.js';


const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const clear = getNode('#clear');
const result = getNode('.result');
let total = 0;

function handleCalculate() {

  const firstValue = +first.value;
  const secondValue = +second.value;
  
  if(typeof firstValue !== 'number' || 
      typeof secondValue !== 'number') return;
  total = firstValue + secondValue;

  
  // result.innerHTML = resultValue;
  clearContents(result);
  insertLast (result, total);

}

function handleClear(e) {
  e.preventDefault();

  clearContents(first);
  clearContents(second);
  clearContents(result);
}

first.addEventListener('input', handleCalculate);
second.addEventListener('input', handleCalculate);
clear.addEventListener('click', handleClear);