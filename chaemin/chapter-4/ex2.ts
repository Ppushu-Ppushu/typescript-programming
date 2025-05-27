/**
 * 2. 자바스크립트의 arguments 객체는 타입 안정성을 제공하는가? 그렇지 않다면 무엇으로 대체할 수 있을까?
 */

function hello1() {
  console.log(arguments);
}

// 대체 방안: rest parameters(...args)
function hello2(...args: string[]) {
  args.forEach((arg) => {
    console.log(arg.toUpperCase());
  });
}

hello2("hihihi");
