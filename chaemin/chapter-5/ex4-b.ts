// 문제 b: a 조건 만족 + 호출자가 원하는 순서대로 호출하도록 하기
// => 메서드를 호출할 때마다 현재 상태를 누적 추적할 수 있어야 한다.

type Method = "get" | "post";
type BuilderState = {
  url?: string;
  method?: Method;
};

class RequestBuilderB<State extends BuilderState = {}> {
  private url?: string;
  private method?: Method;

  setURL(url: string): RequestBuilderB<State & { url: string }> {
    this.url = url;
    return this as any;
  }

  setMethod(method: Method): RequestBuilderB<State & { method: Method }> {
    this.method = method;
    return this as any;
  }

  // url과 method를 모두 포함해야 send() 호출 가능
  send(this: RequestBuilderB<Required<Pick<BuilderState, "url" | "method">>>) {
    console.log(`Sending ${this.method!.toUpperCase()} to ${this.url}`);
  }
}

new RequestBuilderB().setMethod("post").setURL("/submit").send(); // ok
new RequestBuilderB().setURL("/page").setMethod("get").send(); // ok

// new RequestBuilderB().setURL("/error").send();
