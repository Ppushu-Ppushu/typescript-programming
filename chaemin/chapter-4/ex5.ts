/**
 * 5. 타입 안정성을 지원하는 작은 어서션 라이브러리 is를 구현해보자.
 * 먼저 어떤 타입들을 지원할지 구상해보고, 다음처럼 사용할 수 있도록 만들어보자.
 *
 * // string과 string 비교
 * is('string', 'otherstring') // false
 *
 * // boolean vs. boolean
 * is(true, false) // false
 *
 * // number vs. number
 * is(42, 42) // true
 *
 * // 서로 다른 두 타입을 비교하려 하면 컴파일 타임 에러가 발생
 * is(10, 'foo') // error: 'foo' 타입의 인수를 'number' 타입의 매개변수에 할당할 수 없음
 *
 * // 임의의 개수의 인수를 전달할 수 있어야 함
 * is([1], [1, 2], [1, 2, 3]) // false
 */

// 우선, is(a, b) => a와 b가 같은 타입일 경우에만 비교 가능하도록 짜야 한다. (다르면 컴파일 에러)
function is<T>(...args: [T, ...T[]]): boolean {
  return args.every((arg) => arg === args[0]);
}

is(1, 1, 1); // true
is("a", "a", "b"); // false
is(true, true, false); // false
// is(10, "10"); // ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'
is([1], [1]); // false (참조형 비교이므로 값이 같아도 false)
