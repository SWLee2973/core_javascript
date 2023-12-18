/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

const first = getNode('.first');

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler

function handler() {
  console.log('클릭 발생!!');
}

// first.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick() {

  console.log('클릭했습니다.');
}

// first.addEventListener('mouseenter', handleClick);
// first.addEventListener('mouseleave', handleClick);
// first.addEventListener('mousemove', handleClick);

// getNode('.second').addEventListener('click',()=>{
//   first.removeEventListener('click',handleClick)
// })

// function bindEvent(node, type, handler) {

//   if( typeof node === 'string' ) {
//     node = getNode(node);
//   }

//   node.addEventListener(type, handler);

//   return function() {
//     node.removeEventListener(type, handler);
//   }
// }

// bindEvent('.first', 'click', handleClick);


/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener






const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClickBall({offsetX: x, offsetY: y}) {

  // const {offsetX: x, offsetY: y} = e;

  console.log(x, y);

  ball.style.transform = `
    translate(${x-(ball.offsetWidth/2)}px, ${y-(ball.offsetHeight/2)}px)
  `
}

// 몇 초에 한번씩만 호출되도록, 마우스의 움직임이 끝나면 호출되도록

ground.addEventListener('mousemove', throttle(({offsetX: x, offsetY: y}) => {
  let template = `
  <div class='emotion' style=top:${y}px;left:${x}px>😍</div>
`

  ground.insertAdjacentHTML('beforeend', template);
}));



function debounce(callback, limit = 100) {
  
  let timeout;

  return function( ...args ) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit)
  }

}

debounce(() => {

}, 1000)

// call
// apply
// bind

function func(a, b) {
  console.log('this : ' , this);
  console.log('A : ', a);
  console.log('B : ', b);
}

// func.call('tiger', 1, 2) // 바로 실행

// func.apply('tiger', [1, 2]) // 바로 실행

const a = func.bind('tiger', 1, 2) // 바로 실행 시키지 않음
// a()


function throttle(callback, limit = 100) {
  
  let waiting = false;

  return function() {
    if(!waiting) {
      callback.apply(this, arguments);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  }
}