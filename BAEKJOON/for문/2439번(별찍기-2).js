/*
[문제]
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

[입력]
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

[출력]
첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

[예제입력1]
5

[예제출력1]
    *
   **
  ***
 ****
*****
*/

//fs모듈로 입력값 받기
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

//input값을 정수로 변환
var N = parseInt(input);

for (i=1; i<N+1; i++) {
    console.log(" ".repeat(N-i) + "*".repeat(i));
    };

