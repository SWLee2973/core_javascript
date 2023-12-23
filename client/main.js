




import { getNode, getStorage, setStorage } from "./lib/index.js";




// 1. textfield의 value를 로컬스토리지에 저장

const textField = getNode('#textField');

function handleTextField(e) {

  const value = e.target.value;
  setStorage('text', value);

}
textField.addEventListener('input', handleTextField);

// 2. 새로고침 시 로컬스토리지에 저장된 textField의 값을 가져와 뿌리기

function init() {
  console.log(document.readyState);
  getStorage('text').then(res => textField.value = res);

}
// document.addEventListener('DOMContentLoaded', init);
// window.addEventListener('DOMContentLoaded', init);

// ---
const DOMReady = function(callback) { 
  document.readyState === "interactive" || document.readyState === "complete" ? callback() : window.addEventListener("DOMContentLoaded", callback);
};

// //정의된 헬프 함수를 이용한 코드
DOMReady(init);











