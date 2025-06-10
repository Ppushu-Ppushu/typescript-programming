/**
 * 3. "5.11.1 팩토리 패턴"에서 개발한 코드를 추상화 원칙을 조금 어기는 대신 안전성을 확보할 수 있도록 개선하자.
 *      기존에는 항상 Shoe가 반환되었지만 이번에는 사용자가 Shoe.create('boot')를 호출하면 Boot를, Shoe.create('balletFlat')을 호출하면
 *      BalletFlat임을 컴파일 타임에 알 수 있도록 바꿔보자.
 */

type Shoe = {
    purpose: string
}

class BalletFlat implements Shoe {
    purpose = 'dancing'
}

class Boot implements Shoe {
    purpose = 'woodcutting'
}

class Sneaker implements Shoe {
    purpose = 'walking'
}

// 매핑 타입 선언
type ShoeTypeMap = {
    balletFlat: BalletFlat;
    boot: Boot;
    sneaker: Sneaker;
};

let Shoe = {
    create<T extends keyof ShoeTypeMap>(type: T): ShoeTypeMap[T] {
        switch(type) {
            case 'balletFlat': return new BalletFlat
            case 'boot': return new Boot
            case 'sneaker': return new Sneaker
        }
    }
}

const s1 = Shoe.create('balletFlat');
const s2 = Shoe.create('boot');
const s3 = Shoe.create('sneaker');

console.log(s1.purpose); // dancing
console.log(s2.purpose); // woodcutting
console.log(s3.purpose); // walking