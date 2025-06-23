/**
 * 3. "5.11.1 팩토리 패턴"에서 개발한 코드를 추상화 원칙을 조금 어기는 대신
 * 안전성을 확보할 수 있도록 개선하자.
 * 기존에는 항상 Shoe가 반환되었지만 이번에는 사용자가 Shoe.create('boot')를 호출하면 Boot를 반환하고,
 * Shoe.create('balletFlat')를 호출하면 BalletFlat을 반환할 것임을 컴파일 타임에 알 수 있도록 바꿔보자.
 */

type Shoe = {
  purpose: string;
};

class BalletFlat implements Shoe {
  purpose = "dancing";
}

class Boot implements Shoe {
  purpose = "woodcutting";
}

class Sneaker implements Shoe {
  purpose = "walking";
}

// 오버로드된 시그니처
interface ShoeFactory {
  create(type: "balletFlat"): BalletFlat;
  create(type: "boot"): Boot;
  create(type: "sneaker"): Sneaker;
}

// 신발 팩토리
const Shoe: ShoeFactory = {
  create(type: "balletFlat" | "boot" | "sneaker") {
    switch (type) {
      case "balletFlat":
        return new BalletFlat();
      case "boot":
        return new Boot();
      case "sneaker":
        return new Sneaker();
    }
  },
};

const shoe1 = Shoe.create("boot"); // 타입은 Boot
const shoe2 = Shoe.create("sneaker"); // 타입은 Sneaker
const shoe3 = Shoe.create("balletFlat"); // 타입은 BalletFlat

console.log(shoe1.purpose); // 'woodcutting'
