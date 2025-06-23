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
