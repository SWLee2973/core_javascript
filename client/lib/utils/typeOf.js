function isObject(data) {
  return Object.prototype.toString.call(data).split(' ')[1].includes('Object');
}