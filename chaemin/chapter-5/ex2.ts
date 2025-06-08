/**
 * 2. 클래스의 생성자를 private로 선언하면 인스턴스를 만들 수 없고 클래스를 확장할 수도 없다.
 * 생성자를 protected로 선언하면 어떻게 될까?
 * 코드 편집기로 실험해보고 어떤 일이 일어나는지 확인하자.
 */

class Animal {
  protected constructor(public name: string) {}
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
}

const cat = new Cat("meow");
// const dog = new Animal("Dog");
// error: Constructor of class 'Animal' is protected and only accessible within the class declaration.ts(2674)
