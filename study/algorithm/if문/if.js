console.log('if문 알고리즘')
//1330
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
let A,B;
[A,B] = [Number(input[0]),Number(input[1])];
if(A>B)
    console.log('>');
else if(A<B)
    console.log('<');
else if(A==B)
    console.log('==');
//9498
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const A = Number(input);
if(A >= 90 && A <= 100)
    console.log('A');
else if(A >= 80 && A <= 89)
    console.log('B');
else if(A >= 70 && A <= 79)
    console.log('C');
else if(A >= 60 && A <= 69)
    console.log('D');
else
    console.log('F');
//2753
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const A  = Number(input);
if((A%4 == 0 && A%100 != 0)|| A%400 ==0)
    console.log('1')
else
    console.log('0')
//14687
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const A = Number(input[0]);
const B = Number(input[1]);
if(A > 0 && B > 0)
    console.log('1');
else if(A < 0 && B > 0)
    console.log('2');
else if(A < 0 && B < 0)
    console.log('3');
else if(A > 0 && B < 0)
    console.log('4');
//readline 모듈 사용
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on('line', function (line)
{
    input.push(line) })
    .on('close', function ()
    {
        const A = Number(input[0]);
        const B = Number(input[1]);
        if(A > 0 && B > 0)
            console.log('1');
        else if(A < 0 && B > 0)
            console.log('2');
        else if(A < 0 && B < 0)
            console.log('3');
        else if(A > 0 && B < 0)
            console.log('4');
        process.exit();
});
//2884
let input = require('fs').readFileSync('dev/stdin').toString().split(' ');
let Hour = Number(input[0]);  // Hour
let Minute = Number(input[1]);  // Minute
Minute -= 45;
if (Minute < 0) {
    Minute += 60;
    Hour--;

    if (Hour === -1) {
        Hour = 23;
    }
}
console.log(Hour + ' ' + Minute);
//2525
let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let input2 = input[0].split(' ');
let Hour = Number(input2[0]);  // Hour
let Minute = Number(input2[1]);  // Minute
let plus_Minute = Number(input[1]);  // plus Minute
let total = Minute + plus_Minute;
if(total > 60)
{
    Hour = Number(Hour) + parseInt(total/60);
    Minute = Number(Minute) + parseInt(total%60);
    if(Hour > 23)
    {
        Hour = Hour - 24;
    }
    console.log(Hour + ' ' + Minute)
}
//////
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const current = input[0].split(' ').map(Number);
const currentHour = current[0];
const currentMinute = current[1];
const cookTime = Number(input[1]);
const cookEndTimeHour = parseInt((currentHour*60 + currentMinute + cookTime)/ 60) ;
const cookEndTimeMinute = parseInt((currentHour*60 + currentMinute + cookTime)% 60);
console.log(cookEndTimeHour >= 24 ? cookEndTimeHour - 24 : cookEndTimeHour, cookEndTimeMinute);


