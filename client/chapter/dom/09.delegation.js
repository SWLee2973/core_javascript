/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* global attr */

/* 클래스를 사용한 위임 ---------------- */

const nav = getNode('nav');


function handleClick(e) {

  let target = e.target;
  let li = target.closest('li');

  // if(target.dataset.name === 'contact') {
  //   target.style.border = '1px solid yellowgreen';
  // }

  // console.log(target.closest('li'));

  if(!li) return;

  if(li.className === 'home') {
    li.style.background = 'orange';
  }
  
  if(li.dataset.name === 'contact') {
    li.style.background = 'dodgerblue';
  }

  // console.log(attr(li, 'data-name'))

}



nav.addEventListener('click', handleClick);








/* 속성을 사용한 위임 ------------------ */


/* 노드를 사용한 위임 ------------------ */