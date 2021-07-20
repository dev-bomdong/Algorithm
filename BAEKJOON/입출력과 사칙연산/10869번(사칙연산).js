/*
[문제]
두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.

[입력]
두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)

[출력]
첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.

[예제입력1]
7 3

[예제출력2]
10
4
21
2
1 */

//fs모듈을 이용해 입력값을 받았다.
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

//parseInt()로 입력값을 정수로 만든다.
var A = parseInt(input[0]);
var B = parseInt(input[1]);

//결과값 보여주기. 나누기의 경우엔 소수점을 제거하고 몫만 건져내기위해 parseInt를 사용했다.
console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(parseInt(A/B));
console.log(A%B);
