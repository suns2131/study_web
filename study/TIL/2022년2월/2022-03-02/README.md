## 📆 2022-02-23 TIL

### 📈 이번주 목표 및 진행상황
- [ ] Do it 자바스크립트 기본편 1 ~ 6장 정리
    - github 및 개인 블로그에 공부한 내용 업로드하자. > 1~2장 진행 중.
- [ ] 토이 프로젝트
    - 강동현님 개인사유로 불참 확정 
    - 강동현님 분량 어떻게 나누어서 진행할지 목요일 협의 필요함. 
- [ ] 백준 알고리즘 문제 풀기
    - 하루 10문제 이상 풀기
- [x] 사전 시험 (항해99) (03/02)
- [x] 주특기 선정 / 주특기 참석
  - [x] 주특기 참석 (02/28, 03/01, 03/02)
  - [ ] 주특기 선정[03/03] (**'React**', Node.js, spring)
- [ ] (시간있으면)개인 프로젝트 구상하기
    - [ ] 기능에 대한 알고리즘 구성
    - [ ] 개발 언어 및 환경 정의(README파일 만들기.)

### 🌱 공부하면서 배운 점 정리

#### 🔔 사전 테스트 
TO-DO-LIST 취소버튼 기능 구현 
1. 요청한 기능 
 - 취소버튼 클릭시 완료처리한 TO-DO-LIST를 완료처리 전으로 되돌리는 기능 구현
2. 구현 방법 설명
 - 완료처리하는 함수 done_bucket() 함수에 완료처리상태를 관리할 파라미터를 추가
 - 완료처리상태를 기준으로 if문으로 분기점 설정하여 업데이트 파라미터 추가 
 - Python에서 완료처리상태를 업데이트할 변수 추가 및 DB업데이트에 완료처리상태 변수 추가.
```js
// 완료처리상태 관리 파라미터 추가 
function done_bucket(num,done) {
  $.ajax({
    type: "POST",
    url: "/bucket/done",
    //python에서 받을 파라미터 전달.
    data: {num_give: num, done_give : done},
    success: function (response) {
      alert(response["msg"])
      window.location.reload()
    }
  });
//완료상태 파라미터 done의 값에 따라 python에 전달하는 done의 값을 반대로 전달함.
  if(done == '0')
  {
    temphtml = ` <li>
    <h2>✅ ${bucket}</h2>
    <button onclick="done_bucket(${num},1)" type="button" class="btn btn-outline-primary">완료!</button>
    </li>`
  }
//Python에서 완료파라미터를 전달받아서 DB 완료처리 상태값 업데이트
@app.route("/bucket/done", methods=["POST"])
def bucket_done():
  num_receive = request.form['num_give']
  done_receive = request.form['done_give']
  db.bucket.update_one({'num': int(num_receive)}, {'$set': {'done': done_receive}})

  return jsonify({'msg': '버킷 완료!'})
```
