import { getNode, insertLast } from "../dom/index.js";
import { isNumber, isObject } from "./typeOf.js";
import { xhrPromise } from "./xhr.js";





function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);

}


const first = getNode('.first');
const second = getNode('.second');


// delay(() => {
//   first.style.top = '-100px';
//   delay(() => {
//     first.style.transform = 'rotate(360deg)'
//     delay(() => {
//       first.style.top = '0px';
//       second.style.top = '0px';
//     })
//     second.style.transform = 'rotate(360deg)';
//   })
//   second.style.top = '100px';
// })

const defaultOptions = {
  shouldReject:false,
  timeout:1000,
  data: '아싸 성공!',
  errorMessage:'알 수 없는 오류가 발생했습니다.'
}

export function delayP(options) {

  let config = { ...defaultOptions }

  if(isNumber(options)) {
    config.timeout = options
  }

  if(isObject(options)) {
    config = { ...defaultOptions, ...options };
  }

  const {shouldReject, timeout, data, errorMessage} = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!shouldReject){
        resolve(data)

      } else {
        reject({message: errorMessage});

      }
    }, timeout)
  })
}

// delayP(true)
//   .then((res) => {
//     console.log ( res );
//   })
//   .catch((err) => {
//     console.log(err);
//   })

// promise object

// async - 함수가 promise 객체를 반환하도록
//       - await 사용 -> promise 객체

// await - 코드의 실행 흐름 제어(멈춤)
//       - result값 가져오기


async function delayA(data) {
  return data;
}

const value = await delayA('이슬기나');

// value.then((res) => {
//   console.log(res);
// })


// console.log( value );



async function 라면끓이기() {

  // delayP({data: '물'})
  // .then(res => {
  //   console.log('물넣기');
    
  //   return delayP({data: '스프'})
  //         .then(res => {
  //           console.log('스프넣기');
            
  //           return delayP({data: '면'})
  //                   .then(res => {
  //                     console.log('면넣기')
  //                   })
  //         })
  // });
  // console.log('그릇넣기');

  // const 물 = await delayP({data:'물', timeout: 500});
  // console.log(물);

  // const 스프 = await delayP({data:'스프', timeout: 500});
  // console.log(스프);

  // const 면 = await delayP({data:'면', timeout: 500});
  // console.log(면);

  // const 그릇 = await delayP({data:'그릇', timeout: 500});
  // console.log(그릇);
}



// 라면끓이기();

async function getData() {

  // const data = await xhrPromise.get('https://jsonplaceholder.typicode.com/users');
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/15');

  insertLast(document.body, `<img src="${data.sprites['front_default']}" alt="독침붕" />`);

  console.log(data.sprites['front_default']);
}


// getData();


