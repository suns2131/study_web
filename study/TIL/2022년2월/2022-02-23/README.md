## 📆 2022-02-23 TIL

### 📈 이번주 목표 및 진행상황
- [ ] Do it 자바스크립트 기본편 1 ~ 6장 정리
    - github 및 개인 블로그에 공부한 내용 업로드하자. > 1~2장 진행 중.
- [x] 토이 프로젝트
    - 매니저님 피드백 대기 중. > 피드백 받았고 기능별로 분리하여 작업 진행예정.
    - 피드 작성 화면 개발 (02/26까지)
- [ ] 백준 알고리즘 문제 풀기
   - 하루 10문제 이상 풀기 
- [ ] 웹개발 종합반 재수강
- [ ] (시간있으면)개인 프로젝트 구상하기
    - [X] 메이플 숙제 관리 사이트 기능 구체화
    - [ ] 기능에 대한 알고리즘 구성
    - [ ] 개발 언어 및 환경 정의(README파일 만들기.)

### 🌱 공부하면서 배운 점 정리
#### 🔔 백준 알고리즘 
 - node.js 파일시스템 사용시 참고사항 
```js
const input=fs.readFileSync('/dev/stdin').toString().trim();
//1. 하나의 값을 입력받을 때
const input=fs.readFileSync('/dev/stdin').toString().split(' ');
//2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const input=fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//3. 여러 줄의 값들을 입력받을 때
const input=fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/);
const [n,...arr]=input; //구조분해 할당을 사용하였음.
//4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
const input=fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
``` 
   * tostring()을 사용하는 이유 
     * fs.readFileSync는 반환값이 Buffer이기 때문에 예상하지 못한 오류가 발생할 수 있어 
       문자열로 형변환을 진행하는 것이 안전함.
   * tirm()을 사용하는 이유 
     * 입력받는 값 중에 보이지는 않지만 개행문자가 포함되어 있는 경우가 있음. 이를 방지하기 위해 사용.
   * 파라미터로 **'/dev/stdin'** 을 넣는 이유
     * 콘솔드라이버에서 입력받은 값이 들어오는 주소 정보.(표준입력장치)

   * 자바스크립트에서 문자열을 숫자로 변환하는 방법 
```js
Number('0') //0
Number('246.5') //246.5
Number('hello') // NaN
//0을리턴하고 숫자가 아닐경우 NaN을 리턴함 , 소수점까지 리턴함. 
parseInt('123') // 123
parseInt('123.31') // 123
parseInt('hello') //NaN
//입력된 숫자를 '정수'로 표현함. 소수점은 없애버림.
Math.ceil('220.5') //221
//입력된 숫자를 반올림하는 math함수
Math.floor('220.5') //220
//입력된 숫자를 버리는 math함수
Math.abs('-200') //200
Math.abs('200') //200
//입력된 숫자의 절대값만 가져오는 함수(음수든 양수든 무조건 양수만 반환함)
```

        

       

### 😭 아쉬운 점

### 😆 내일 할 일