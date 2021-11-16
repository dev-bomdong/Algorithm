# 문제 설명

이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(\*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

# 제한 조건

n과 m은 각각 1000 이하인 자연수입니다.

## 예시

### 입력

```javascript
5 3
```

### 출력

```javascript
*****<br />
*****<br />
*****
```

# 문제 풀이

```javascript
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let x = "";
  const star = "*";

  for (let i = 0; i < a; i++) {
    x += star;
  }

  for (let i = 1; i < b; i++) {
    console.log(x);
  }

  console.log(x);
});
```
