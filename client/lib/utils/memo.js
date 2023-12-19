


// 피보나치 메모이제이션

const cache = {
  // key : value

}


export const memo = (key, callback) => {

  if(!callback) return cache[key];

  if(cache[key]) {
    console.warn(`${key} 안에는 이미 캐시된 값이 존재합니다.`);
    return cache[key];
  }

  cache[key] = callback();
}






