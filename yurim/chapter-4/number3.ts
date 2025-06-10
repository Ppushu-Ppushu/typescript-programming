// 바로 시작되는, 즉 시작 날짜가 바로 지금은 휴가르 예약하는 기능을 구현하려 한다.
//     4.1.9 오버로드된 함수 타입에서 소개한 오버로드된 reserve 함수에 명시적 시작 날짜 없이 목적지만 인수로 받는 세 번째 호출 시그니처를 추가하자.
//     또한 새로 추가한 오버로드된 시그니처를 지원하도록 reserve의 구현도 갱신하자.

// type Reserve = {
//     (from: Date, to: Date, destination: string): Reservation
//     (from: Date, destination:string): Reservation
//     (destination:string): Reservation
// }
//
// let reserve: Reserve = (
//     from?: Date,
//     toOrDestination: Date | string,
//     destination?: string,
// )=> {
//     // ...
// }