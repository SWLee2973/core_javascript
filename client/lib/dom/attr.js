function getAttr(node, prop) {
  if( typeof node === 'string' ) node = getNode(node);
  if( typeof prop !== 'string') throw new TypeError('getAttr 함수의 두번째 인수는 문자 타입 이어야 합니다.');

  return node.getAttribute(prop); 
}

function setAttr(node, prop, value) {
  if( typeof node === 'string' ) node = getNode(node);
  if( typeof prop !== 'string' ||
      typeof value !== 'string' ) throw new TypeError('setAttr 함수의 두번째 인수는 문자 타입 이어야 합니다.');
  if( value === '') {
    node.removeAttribute(prop);
    return;
  }
  if(!value) throw new Error('setAttr함수의 세번째 인수는 필수 입력값 입니다.');


  if( prop.startsWith('data') ) {
    node.dataset[prop.slice(5)] = value;
  } else {
    node.setAttribute(prop, value);
  }

}

const attr = (node, prop, value) => value === undefined ? getAttr(node, prop) : setAttr(node, prop, value);