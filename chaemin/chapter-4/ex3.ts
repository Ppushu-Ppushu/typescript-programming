/**
 * 3. 바로 시작되는, 즉 시작 날짜가 바로 지금인 휴가를 예약하는 기능을 구현하려 한다.
 * 오버로드된 reserve 함수(4.1.9)에 명시적 날짜 없이 목적지만 인수로 받는 세 번째 호출 시그니처를 추가하자.
 * 또한 새로 추가한 오버로드된 시그니처를 지원하도록 reserve의 구현도 갱신하자.
 */

// 값의 구조를 정의 하는 타입
type Reservation = unknown;

// 함수의 타입을 정의하는 타입
type Reserve = {
  (from: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string): Reservation;
  (destination: string): Reservation;
};

let reserve: Reserve = (
  fromOrDestination: Date | string,
  toOrDestination?: Date | string,
  destination?: string
) => {
  if (
    fromOrDestination instanceof Date &&
    toOrDestination instanceof Date &&
    destination !== undefined
  ) {
    // 편도 여행 예약
  } else if (
    fromOrDestination instanceof Date &&
    typeof toOrDestination === "string"
  ) {
    // 왕복 여행 예약
  } else if (typeof fromOrDestination === "string") {
    // 목적지만 주어진 경우
  }
};

reserve(new Date("2025-07-01"), new Date("2025-07-10"), "Hawaii");
reserve(new Date("2025-07-01"), "Hawaii");
reserve("Hawaii");
