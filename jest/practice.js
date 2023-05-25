function capitalized(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function reversed(str) {
  const arrayStr = str.split('');
  const newArr = [];
  for (let i = arrayStr.length - 1; i >= 0; i--) {
    newArr.push(arrayStr[i]);
  }
  return newArr.join('');
}

function caesarCipher(str, shiftFactor) {
  const arrayAlp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z'];
  
  const arrayStr = str.split('');
  const newArr = [];
  for (let i = 0; i < arrayStr.length; i++) {
    const ele = arrayStr[i];
    const indexEle = arrayAlp.indexOf(ele);
    let newIndex = indexEle + shiftFactor > 26 ? indexEle + shiftFactor - 26 : indexEle + shiftFactor;
    newArr.push(arrayAlp[newIndex]);
  }
  return newArr.join('');
}

module.exports = {
  capitalized,
  reversed,
  caesarCipher
};
