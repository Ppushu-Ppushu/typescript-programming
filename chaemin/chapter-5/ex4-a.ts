// 문제 a => 각 단계마다 다른 타입의 객체를 반환하도록 하면 특정 순서를 강제할 수 있다.

class RequestBuilderA {
  setURL(url: string): RequestBuilderWithUrl {
    return new RequestBuilderWithUrl(url);
  }
}

class RequestBuilderWithUrl {
  constructor(private url: string) {}

  setMethod(method: "get" | "post"): RequestBuilderReadyToSend {
    return new RequestBuilderReadyToSend(this.url, method);
  }
}

class RequestBuilderReadyToSend {
  constructor(private url: string, private method: "get" | "post") {}

  send() {
    console.log(`sending! ${this.method.toUpperCase()} to ${this.url}`);
  }
}

new RequestBuilderA().setURL("/page").setMethod("get").send(); // ✅ 가능

// new RequestBuilder().send(); // ❌ 컴파일 에러 (send 없음)
