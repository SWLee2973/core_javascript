/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

// const first = document.querySelector('.first')
// const spanList = document.querySelectorAll('span');


const first = getNode('.first'); // <span class="first">hello</span>

// function getNode(node, context = document) {
//   if(typeof node != 'string') {
//     throw new Error('getNode 함수의 인수는 string 이어야 합니다.');
//   }

//   if(context != document) {
//     context = document.querySelector(context);
//   }

//   if(node.split('.').length == 2 || node.split('#').length == 2) {
//     return context.querySelector(node);
//   } else {
//     return context.querySelectorAll(node);
//   }
// }

console.log(first);

/* 문서 대상 확인 */
// - matches

console.log( first.matches('span') );
console.log( getNode('h1').contains( getNode('.second') ) );
// - contains

