// 타입 안정성을 지원하는 작은 어서션(assertion) 라이브러리 is를 구현해보자.
// 먼저 어떤 타입들을 지원할지 구상해보고, 다음처럼 사용할 수 있도록 만들어보자.

// function is<T>(a:T, b:T): boolean {
//     return a === b;
// }

function is<T>(...args: T[]): boolean {
    return args.every(arg => arg === args[0]);
}

