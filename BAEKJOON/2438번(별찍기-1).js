/*
[문제]
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

[입력]
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

[출력]
첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

[예제 입력1]
5

[예제 출력1]
*
**
***
****
*****
*/

//fs모듈로 입력값 받기
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

//입력되는 연도를 정수로 변환
var N = parseInt(input);
var star = "*";
var result = "";

for (i=0; i<N; i++) {
	for (z=0; z<1; z++){
	result += star;
};

console.log(result);
};