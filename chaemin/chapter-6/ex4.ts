/**
 * 4. "6.6.3 확실한 할당 어서션"에서 소개한 예제를 확실한 할당 어서션을 사용하지 않도록 재구현하자.
 */

const globalCache = {
  get(input: string) {
    return "string";
  },
};

function fetchUser() {
  return globalCache.get("userId");
}

let userId = fetchUser();
userId.toUpperCase();
