/**
 * 2. type O = {a: {b: {c: string}}}라는 객체 타입이 있을 때 keyof O는 무슨 타입을 반환할까?
 * O['a']['b']는 무슨 타입인가?
 */

type O = { a: { b: { c: string } } };

// keyof O
type A = keyof O; // "a"

let o = {
  a: {
    b: {
      c: "hi",
    },
  },
};

// 이런 객체 구조를 가지기 때문에..
o["a"]["b"]; // {c: 'hi'}
