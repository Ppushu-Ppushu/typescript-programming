// console.log("Hello Chaemin");

let a = 1 + 2;
let b = a + 3;
let c = {
  apple: a,
  banana: b,
};

let d = c.apple * 4;

// c.apple = 3; // ok (c.apple은 숫자 타입으로 추론)
// c.apple = "사과";
// error => Type 'string' is not assignable to type 'number'.ts(2322)

// 타입 재정의 (명시적 타입 추가)
let c2: { apple: number | string; banana: number } = {
  apple: a,
  banana: b,
};
