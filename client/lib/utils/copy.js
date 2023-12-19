

export function copy(text) {
  // navigator.clipboard.writeText의 리턴 값은 promise
  return navigator.clipboard.writeText(text);  
}
