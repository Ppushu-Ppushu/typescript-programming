/**
 * 4-b. a의 조건을 만족하면서도 호출자가 원하는 순서대로 메서드를 호출하도록 허용할 수 있을까?
 *      (힌트, 타입스크립트의 어떤 기능을 이용하면 각각의 메서드를 호출할 때마다 this에 반환 타입을 추가할 수 있을까?)
 */

type HasMethod = { method: 'get' | 'post' }
type HasURL = { url: string }
type HasData = { data: object }

class RequestBuilder {
    method?: 'get' | 'post';
    url?: string;
    data?: object;

    setMethod(method: 'get' | 'post'): this & HasMethod {
        (this as any).method = method;
        return this as this & HasMethod;
    }

    setURL(url: string): this & HasURL {
        (this as any).url = url;
        return this as this & HasURL;
    }

    setData(data: object): this & HasData {
        (this as any).data = data;
        return this as this & HasData;
    }
}


// send는 method와 url이 모두 있는 경우에만 호출 가능
function send(builder: HasMethod & HasURL) {
    console.log('Sending request:', {
        method: builder.method,
        url: builder.url,
        data: (builder as any).data ?? null
    })
}

const builder = new RequestBuilder()
    .setData({ hello: 'world' })
    .setMethod('post')
    .setURL('https://example.com')

send(builder)
