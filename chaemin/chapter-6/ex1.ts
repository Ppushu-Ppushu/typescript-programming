/**
 * 1. 다음 각 타입 쌍에서 첫 번째 타입을 두 번째 타입에 할당할 수 있는지 정하고, 그 이유를 설명해보자.
 * 서브타입과 가변성 관점에서 고민해보고, 확신이 서지 않으면 이 장의 처음 부분에서 설명한 규칙들을 확인하자.
 * (그래도 잘 모르겠으면 코드 편집기에 직접 코드를 입력해서 확인해보자!)
 *
 * a. 1과 number
 * b. number와 1
 * c. string과 number | string
 * d. Boolean과 number
 * e. number[]와 (number | string)[]
 * f. (number | string)[]과 number[]
 * g. {a: true}와 {a: boolean}
 * h. {a: {b: [string]}}과 {a: {b: [number | string]}}
 * i. (a: number) => string과 (b: number) => string
 * j. (a: number) => string과 (a: string) => string
 * k. (a: number | string) => string과 (a: string) => string
 * l. E.X (열거형 enum E = {X = 'X'}에 정의됨)와 F.X (열거형 enum F = {X = 'X'}에 정의됨)
 */

// a
let a: number = 1; // ok
// 1은 number의 리터럴 서브타입. 1 extends number이므로 가능.

// b
let b: 1 = number; // error
// number은 1보다 넓은 타입 => number extends 1은 성립하지 않음

// c
let c: number | string = "string"; // ok
// string은 number | string의 서브타입

// d
let d: number = new Boolean(true); // error
// Boolean(객체 타입)은 boolean(원시 타입)과도 다르고, number와도 호환되지 않음.

// e
let e: (number | string)[] = [1, 2, 3]; // ok
// number는 number | string의 서브타입이므로 number[]는 (number | string)[]의 서브타입으로 간주됨 (배열은 공변(covariant)).

// f
let f: number[] = ["hi", 1]; // error
// number | string 배열은 string이 포함될 수도 있으므로 number[]에는 할당 불가.

// g
let g: { a: boolean } = { a: true }; // ok
// true는 boolean의 서브타입. 구조적 타입 시스템에서 a: true는 a: boolean로 간주 가능.

// h
let h: { a: { b: [number | string] } } = { a: { b: ["hello"] } }; // OK
// 구조적으로 호환되기 때문에 가능

// i
let i: (b: number) => string = (a: number) => "ok"; // OK
// 매개변수 이름은 타입 호환성에 영향 없음. 시그니처가 같으면 호환됨.

// j
let j: (a: string) => string = (a: number) => "hello"; // error
// 매개변수 타입이 다르기 때문에 에러가 난다.

// k
let k: (a: string) => string = (a: number | string) => "hi"; // ok
// 여기서 (a: number | string)는 더 넓은 타입이므로 에러가 날 거라 생각했지만..
// 타입스크립트는 기본적으로 함수 매개변수에 대해 양변성 허용 → 그래서 OK

// l
enum E {
  X = "X",
}
enum F {
  X = "X",
}

let ex: E = E.X;
let fx: F = F.X;

ex = fx; // Error
// 서로 다른 enum의 멤버는 이름과 값이 같더라도 타입상 다른 열거형으로 간주됨.
