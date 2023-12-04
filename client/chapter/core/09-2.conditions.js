/* ------------------- */
/* Logical Operators   */
/* ------------------- */
let age = 20;
if(14 <= age && age <= 90) {
  console.log(age);
}

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);

// Logical AND Assignment : 논리곱 할당 연산자
// a = a && b;
// a &&= b;

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// Logical OR Assignment : 논리합 할당 연산자
// a = a || b;
// a ||= b;

// 부정 연산자
let reverseValue = !value;
console.log(reverseValue);


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisisTruthy:true};


while(true){
  let loginId = prompt('아이디를 입력하세요.');
  if(loginId.replace(/\s*/g, '')){
    if(loginId.toUpperCase() == 'ADMIN') {
      let loginPw = prompt('비밀번호를 입력하세요');
      if(loginPw) {
        if( loginPw.toUpperCase() == 'THEMASTER') {
          alert('환영합니다.');
          break;
        } else {
          alert('인증에 실패하였습니다.');
        }
      } else {
        alert('취소되었습니다.');
        break;
      }
    } else if(loginId.toUpperCase() != 'ADMIN') {
      alert('아이디가 없습니다.');
    } else {
      alert('취소되었습니다.');
      break;
    }
  } else {
    alert('취소되었습니다.');
    break;
  }
}