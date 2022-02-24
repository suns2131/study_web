console.log('반복문 알고리즘')
//2739 구구단 출력
//for문
const input = require('fs').readFileSync("/dev/stdin").toString().split(' ');
const loop = Number(input[0]);
for(let i = 1; i < 10; i++)
{
    console.log(loop +' * ' + i + ' = ' + loop*i);
}
//while문
//do while문

//10950
//for문
const input = require('fs').readFileSync("/dev/stdin").toString().split('\n');
let loops,a,b;
for(let i = 1; i <= Number(input[0]); i++)
{
    loops =input[i].split(' ');
    a = Number(loops[0]);
    b = Number(loops[1]);
    console.log(a+b);
}
//while문
//8393
//for문
const input = require('fs').readFileSync("/dev/stdin").toString().split('\n');
const loop_cnt = Number(input[0]);
let total = 0;
for(let i=1; i <= loop_cnt; i++)
{
    total += i;
}
console.log(total);
//15552
//반복문을 할 때 루프 돌때마다 출력하는 것보단 하나의 변수에 모두 담아내는것이 속도면에서는 더 빠르다.
const input = require('fs').readFileSync("/dev/stdin").toString().split('\n');
let loops,a,b;
let total = '';
for(let i = 1; i <= Number(input[0]); i++) {
    loops = input[i].split(' ');
    a = Number(loops[0]);
    b = Number(loops[1]);
    total += a + b + '\n';
}
console.log(total);
//2741
const input = require('fs').readFileSync("/dev/stdin").toString().split('\n');
let total = '';
for(let i = 1; i <= Number(input[0]); i++) {
    total += i+ '\n';
}
console.log(total);
//2742
const input = require('fs').readFileSync("/dev/stdin").toString().split('\n');
let total = '';
for(let i = Number(input[0]); i >= 1; i--) {
    total += i+ '\n';
}
console.log(total);
//11021
const input = require('fs').readFileSync("/dev/stdin").toString().split('\n');
const loop_cnt = Number(input[0]);
let loops,a,b,ts;
let total = '';
for(let i = 1; i <= loop_cnt ; i++) {
    loops = input[i].split(' ');
    a = Number(loops[0]);
    b = Number(loops[1]);
    ts = a+b;
    console.log(`Case #${i}: ${a} + ${b} = ${ts}`);
}
console.log(total);