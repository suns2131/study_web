console.log('입출력과 사칙연산 알고리즘 ')
//앞으로 js 호출하여 하는 방식으로 연습해볼생각
//10926
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
console.log(input+'??!')
//18108
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
console.log(input-543)

//10430
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);
console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C)*(B%C))%C);
//2588
//풀이법 1
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const A = Number(input[0]);
const B = input[1];
const C = Number(input[1]);
const a = Number(B.substring(0,1));
const b = Number(B.substring(1,2));
const c = Number(B.substring(2,3));
console.log(A*c);
console.log(A*b);
console.log(A*a);
console.log(A*C);
//풀이법 2 구조 분해할당을 적용해봄 소스 간소화 연습차원
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let A,B,C,a,b,c;
[A,B,C] = [Number(input[0]),input[1],Number(input[1])];
[a,b,...c] = [Number(B.substring(0,1)),Number(B.substring(1,2)),Number(B.substring(2,3))];
console.log(A*c);
console.log(A*b);
console.log(A*a);
console.log(A*C);


