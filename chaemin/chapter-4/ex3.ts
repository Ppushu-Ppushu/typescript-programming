/**
 * 3. 바로 시작되는, 즉 시작 날짜가 바로 지금인 휴가를 예약하는 기능을 구현하려 한다.
 * 오버로드된 reserve 함수(4.1.9)에 명시적 날짜 없이 목적지만 인수로 받는 세 번째 호출 시그니처를 추가하자.
 * 또한 새로 추가한 오버로드된 시그니처를 지원하도록 reserve의 구현도 갱신하자.
 */

// 값의 구조를 정의 하는 타입
type Reservation = {
  from: Date;
  to?: Date;
  destination: string;
};

// 함수의 타입을 정의하는 타입
type Reserve = {
  (from: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string): Reservation;
};
