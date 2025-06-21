class usingProtected {
    protected constructor() { }
}

class usingPrivate {
    private constructor() { }
}

// private과 protected 모두 인스턴스를 생성할 수 없다.
const new_usingProtected = new testA()
const new_usingPrivate = new testB()

// protected로 선언시 상속할 수 있다.
class extendWithProtected extends usingProtected {
    constructor() {
        super();
    }
}

// private로 선언시 상속 불가능.
class extendWithPrivate extends usingPrivate {
    constructor(){
        super();
    }
}