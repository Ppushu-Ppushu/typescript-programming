/**
 * 2. 다음 코드는 왜 주석에 적힌 에러를 발생시킬까?
 */

// a
let i: 3 = 3;
// i = 4;
// => Type '4' is not assignable to type '3'.ts(2322)

// b
let j = [1, 2, 3];
j.push(4);
// j.push("5");
// => Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)

// c
// let k: never = 4;
// => Type '4' is not assignable to type 'never'.ts(2322)

// d
let l: unknown = 4;
// let m = l * 2;
// => 'l' is of type 'unknown'.ts(18046)
