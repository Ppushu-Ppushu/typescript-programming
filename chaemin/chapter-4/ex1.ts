/**
 * 1. 타입스크립트는 함수 타입 시그니처에서 어떤 부분을 추론하는가? 매개변수 타입, 반환 타입 또는 두 가지 모두?
 */

// 매개변수 타입은 직접적으로 추론하지 않는다.
function add(x, y) {
  // Parameter 'x' implicitly has an 'any' type, but a better type may be inferred from usage.ts(7044)
  return x + y; // 에러!! x, y의 타입이 암시적으로 any
}

// 반환 타입은 타입스크립트가 자동 추론한다.
function greet(name: string) {
  return `Hello ${name}`;
}
// function greet(name: string): string
