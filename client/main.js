/* global gsap */

import { cat, 
          getNode as $, 
          renderUserCard, 
          changeColor,
          renderSpinner,
          delayP,
          insertLast,
          renderEmptyCard,
          clearContents} from './lib/index.js';






// [phase-1]
// 1. user 데이터 fetch
// 2. 함수 안에 넣기
// 3. user 데이터 이름만 랜더링
const END_POINT = 'http://localhost:3000/users'
const userCardInner = $('.user-card-inner');

async function renderUserList() {

  renderSpinner(userCardInner);

  try {

    await delayP(2000);

    // $('.loadingSpinner').remove();
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        $('.loadingSpinner').remove();

      }
    })

    const response = await cat.get(END_POINT);
    const userData = response.data;
    
    userData.forEach(data => renderUserCard(userCardInner, data));
    changeColor('.user-card');
  
    gsap.from('.user-card', {
      x: 100,
      opacity: 0,
      stagger: {
        // from: 'end',
        each: 0.1,
        // amount: 0.2
        ease: 'power2.inOut'
      }
    })
  } catch(err) {
    console.log(err);

    renderEmptyCard(userCardInner);
  }
  
}

renderUserList();


function handleDelete(e) {
  const button = e.target.closest('button');
  const article = e.target.closest('article');

  if( !article || !button ) return;
  
  const id = article.dataset.index.slice(5);

  cat.delete(`${END_POINT}/${id}`).then(() => {

    clearContents(userCardInner)
    renderUserList();
  })

  
}

userCardInner.addEventListener('click', handleDelete);




const createButton = $('.create');
const cancelButton = $('.cancel');
const doneButton = $('.done');




function handleCreate(e) {



  gsap.to('.pop', {autoAlpha: 1});
}

function handleCancel(e) {
  e.stopPropagation();
  gsap.to('.pop', {autoAlpha: 0});
}

function handleDone(e) {
  e.preventDefault();

  const name = $('#nameField').value;
  const email = $('#emailField').value;
  const website = $('#siteField').value;

  const obj = { name, email, website };

  cat.post(END_POINT, obj).then(() => {
    clearContents(userCardInner);
    renderUserList();
    gsap.to('.pop', { autoAlpha:0 });
  })
}


createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);










