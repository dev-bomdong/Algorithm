/*문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
입력은 여러 개의 테스트 케이스로 이루어져 있다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
입력의 마지막에는 0 두 개가 들어온다.

출력
각 테스트 케이스마다 A+B를 출력한다.

예제입력 1
1 1
2 3
3 4
9 8
5 2
0 0

예제출력 1
2
5
7
17
7
*/

//fs모듈로 입력값 받아오기
var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('/n');
var input = inputs.split(' ');
trim()

for(i=0;i<inputs.length;i++){
    let A = parseInt(input[i]);
    let B = parseInt(input[i+1]);
    let result = A + B;
    if(result===0){
        console.log(result);
        break;
    } else {
    console.log(result)};
};

//현재 런타임에러 나오는 상태. 보완필요
