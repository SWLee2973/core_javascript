/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;
console.log(`1. typeof String(YEAR): ${typeof String(YEAR)}`);
console.log(`1. typeof (YEAR+''): ${typeof (YEAR+'')}`);

// undefined, null
let days = null;
let weekend;

console.log(`2. days + '': ${days + ''}`);
console.log(`2. weekend + '': ${weekend + ''}`);

// boolean
let isClicked = false;
console.log(`3. isClicked + '': ${isClicked + ''}`);

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(`4. Number(friend): ${Number(friend)}`);

// null
let money = null;
console.log(`5. Number(money): ${Number(money)}`);

// boolean
let cutie = true;
console.log(`6. Number(cutie): ${Number(cutie)}`);

// string
let num = '250';
console.log(`7. Number(num): ${Number(num)}`);
console.log(`7. +num: ${+num}`);
console.log(`7. num * 1: ${num * 1}`);
console.log(`7. num / 1: ${num / 1}`);

// numeric string
const width = '105.3px';
console.log(`8. Number(width): ${Number(width)}`);
console.log(`8. parseInt(width, 10): ${parseInt(width, 10)}`);
console.log(`8. parseFloat(width): ${parseFloat(width)}`);


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 
console.log(`9. Boolean(friend): ${Boolean(friend)}`);
console.log(`9. Boolean(' '): ${Boolean(' ')}`);
console.log(`9. Boolean('0'): ${Boolean('0')}`);
console.log(`9. Boolean(0): ${Boolean(0)}`);