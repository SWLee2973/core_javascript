import { jujeobData } from './data/data.js';
import { clearContents, copy, getNode, getRandom, insertLast, isNumbericString, shake, showAlert } from './lib/index.js';

// [phase-1]
// 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러 연결
// 2. nameField에 있는 값 가져오기
// 3. jujeob 데이터 가져오기
// 4. jujeobData에서 랜덤한 주접 하나 가져오기

// [phase-2]
// 1. 아무 값도 입력받지 못했을 때 예외 처리 (콘솔창 출력)
// 2. 공백 문자를 받았을 때 예외 처리 (콘솔창 출력)

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const result = getNode('.result');


function handleSubmit(e) {
  e.preventDefault();
  const name = nameField.value;
  const list = jujeobData(name);
  const pick = list[getRandom(list.length)];

  if(!name || name.replaceAll(/\s*/g, '') === '') {
    showAlert('.alert-error', '이름을 입력해주세요!', 1500);
    shake.restart();

    return;
  }

  if(!isNumbericString(name)) {
    showAlert('.alert-error', '제대로 된 이름을 입력해주세요.', 2000);
    shake.restart();

    return;
  }

  clearContents(result);
  insertLast(result, pick);
}

function handleCopy() {
  const text = result.textContent;

  // navigator.clipboard.writeText의 리턴 값은 promise
  copy(text).then(() => showAlert('.alert-success', '클립보드에 복사되었습니다!'));
  
}

submit.addEventListener('click', handleSubmit);
result.addEventListener('click', handleCopy);