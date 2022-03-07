## 📆 2022-03-07 TIL

### 📈 이번주 목표 및 진행상황
 - [ ] 웹 미니 프로젝트 기능구현 
 - [ ] 실용주의 프로그래머 읽기
 - [x] Git / Github 정리 
 - [ ] 인프런 렛츠기릿 자바스크립트 섹션 3강까지 듣고 정리.

### 🌱 공부하면서 배운 점 정리

#### 🔔 Git
##### Git에서 사용되는 단어 정리 
1. Commit : 파일의 변경사항을 저장소에 기록하는 작업
2. Repositories : 저장소 
3. Staging : Commit에 반영할 파일을 선택하는 작업
4. Push : 로컬저장소의 내용을 원격 저장소에 반영하는 작업
5. Pull : 원격저장소의 내용을 로컬 저장소에 반영하는 작업 
6. Tracking : 원격저장소와 로컬저장소를 연결하는 작업 
7. Clone : 원격저장소의 내용을 복제(로컬저장소가 없을때)
8. Fetch : 원격저장소의 내용을 가져옴(실제 로컬저장소에는 저장되지않음)
9. Fork : 다른 사람의 저장소에 있는 내용을 작업하기 위해서 내 저장소로 가져오는 작업.
10. Ammend : 마지막으로 Commit된 내용을 수정하는 작업.
11. Stash : 로컬저장소에서 작업하던 내용을 잠시 저장하는 작업(기록되지않음)
12. Revert : Commit된 내용을 되돌리며 되돌린 내용에 대한 Commit을 진행하는 작업.
13. Reset :  Commit된 내용을 되돌리지만 되돌린 내용에 대한 Commit을 하지않는 작업.
    - soft : Commit을 되돌리고 변경한 파일작업내역은 보존하여 파일 변경사항으로 보여줌. 근데 변경사항은 Add되지않음. 
    - mixed : Commit을 되돌리고 변경한 파일작업내역은 보존하여 파일 변경사항으로 보여줌. 변경사항은 Add됨.
    - hard : Commit을 되돌리고 그동안 작업했던 내역을 모두 삭제함. (작업내역 복원 불가)
***
##### Github를 이용한 작업 순서
1. 이슈 할당 : Github의 이슈를 통해 작업자 선정 및 담당업무 정의
2. 작업 진행 : 브랜치로 작업할 내용을 분리하여 작업 진행
3. 작업 병합 : 분리한 브랜치에서 작업한 내용을 메인 브랜치에 병합.
3-1. 리뷰 후 반영 : 작업한 내용에 대한 리뷰 진행 후 리뷰어를 통해서 메인 브랜치에 병합.
***
##### Github 이슈 작성시 라벨 분류 정리
<table>
    <thead> 
        <tr>
            <th>라벨명</th>
            <th>라벨 설명</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>bug</td>
            <td>해당 기능에 문제가 있고 잘되지 않네요.</td>
        </tr>
        <tr>
            <td>documentation </td>
            <td>문서의 개선 작업</td>
        </tr>
        <tr>
            <td>duplicate</td>
            <td>해당 이슈가 기존 이슈 및 PR에 존재</td>
        </tr>
        <tr>
            <td>enhancement</td>
            <td>새 기능 및 요청</td>
        </tr>
        <tr>
            <td>good first issue</td>
            <td>처음 기여해볼사람에게 좋은 문제 </td>
        </tr>
        <tr>
            <td>help wanted</td>
            <td>관리자가 문제 또는 PR요청에 대한 도움 요청 </td>
        </tr>
        <tr>
            <td>invaild</td>
            <td>이슈 PR요청이 관련이 없다 </td>
        </tr>
        <tr>
            <td>question</td>
            <td>이슈 또는 풀요청에 추가정보가 필요하다 </td>
        </tr>
        <tr>
            <td>wontfix</td>
            <td>문제나 PR요청에 대한 작업이 진행되지 않음. </td>
        </tr>
    </tbody>
</table>

***

##### Github 이슈 추적 사용법
 - 커밋 메세지에 "#이슈번호"가 입력될 경우 자동으로 등록된 이슈에 커밋내용 정보가 적용된다.
 ex) commit message : 추가 - index.html #1 
***
##### 브랜치 명명 규칙 (단순 참고용)
1. Master <br>
   설명 : 최종 배포를 관리하기 위한 브랜치 , 배포가능한 상태만을 관리한다.
2. Develop <br>
   설명 : Master에서 분기되어 신규 기능을 개발하여 적용하는 브랜치.<br>
   해당 브랜치가 안정화된 상태라면 최종적으로 Master 브랜치에 병합함
3. Feature <br>
   설명 : 새로운 기능을 개발하는 브랜치 <br>
   작업이 완료되면 Develop 브랜치에 병합한다. <br>
   명명규칙 : feature/Issue_num or feature/feature_name / 짧은 설명
4. Release <br>
   설명 : 출시하기 전 검토를 위한 브랜치 <br>
   명명 규칙 : Release/version_num
5. Hotfix/Issue <br>
   설명 : 버그 및 수정사항 작업을 위한 브랜치<br>
   명명규칙 : Hotfix/Issue_num or Issue/Issue_num
***
