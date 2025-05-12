/**
 * 1. 타입스크립트는 다음의 값을 어떻게 추론할까?
 */

let a = 1042;
// number

let b = "apples and oranges";
// string

const c = "pineapples";
// pineapples

let d = [true, true, false];
// boolean[]

let e = { type: "ficus" };
// { type: string }

let f = [1, false];
// (number | boolean)[]

const g = [3];
// const이기 때문에 리터럴 추론 -> readonly [3]
// 혹은 number[]

let h = null;
// null
