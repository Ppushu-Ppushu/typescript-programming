// 94쪽 "한정된 다형성으로 인수의 개수 정의하기"에서 소개한 call 함수에서 두 번째 인수가 string인 함수여야 정상 동작하도록 구현을 바꿔보자.
// 이를 제외한 모든 함수는 컴파일 타임에 에러를 발생시켜야 한다.


type FuncWithSecondArgString<T extends [any, string, ...any[]]> = (...args: T) => any;

function call<T extends [any, string, ...any[]], F extends (...args: T) => any>(
    f: F,
    ...args: T
): ReturnType<F> {
    return f(...args);
}
