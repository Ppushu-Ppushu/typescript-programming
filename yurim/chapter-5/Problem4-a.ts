/**
 * 4-a. 최소한 URL과 method를 설정한 다음에만 .send를 호출할 수 있음을 컴파일 타임에 보장한다. 메서드를 특정 순서로만 호출하도록 강제하면
 *      이 기능을 더 쉽게 구현할 수 있을까? (힌트, this 대신 무엇을 반환할 수 있는가?)
 */

class RequestBuilder {
    public data: object | null = null
    public method: 'get' | 'post' | null = null
    public url: string | null = null

    setMethod(method: 'get' | 'post'): RequestBuilderWithMethod {
        this.method = method
        return new RequestBuilderWithMethod(this)
    }
}

class RequestBuilderWithMethod {
    constructor(private builder: RequestBuilder) {}

    setURL(url: string): RequestBuilderReadyToSend {
        this.builder.url = url
        return new RequestBuilderReadyToSend(this.builder)
    }
}

class RequestBuilderReadyToSend {
    constructor(private builder: RequestBuilder) {}

    setData(data: object): this {
        this.builder.data = data
        return this
    }

    send() {
        console.log('Sending request:', {
            method: this.builder.method,
            url: this.builder.url,
            data: this.builder.data
        })
    }
}
