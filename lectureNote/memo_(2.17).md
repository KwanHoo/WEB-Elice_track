# 엘리스 실시간 수업_(JDY 코치님)_ 백엔드
## 2.17.(목)
 
## 1교시
비관계형 DB인 몽고DB를 배우게됨

// req : requext(요청) : 사용자의 브라우저 정보, 질문(쿼리 : 주소창), 로그인정보
// res : response(응답) : 사이트 내용 html


// 웹서버 실행 : 사용자 요청이 있는지 기다림
// (포트번호, 실행되는 함수)
// express는 포트번호로 3000을 약속했음
// 개발자 도구에서만 보이는 콘솔메세지임
// app.listen(3000)

[명령어]
npm init
npm i express

npm i nodemon

서버 시작 :npm start
서버 종료 : ctrl + c

.gitignore 에 node_module 넣기 why?
node_module은 패키지 파일로 설치함


## 2교시

_ 안쓰는 변수
__ 시스템 환경변수

get을 통해서 기본적인 라우팅 작업중임

// app.use() => error 핸들링 메소드
// (arr, req, res, next) : 매개변수 기본값
// status 상태코드

express 안에 내장되어 있는 router

app.use 는 만능키 (포괄적인 함수, 만능함수) <= 알아서 express 가 잘적용해줌
app.get은 요청에 대한 것을 get을 쓰거나 post로 사용할수있음
분리해야될때도 있으니깐


## 3교시
함수의 대가들은 6 ~ 8 줄 짜리 함수가 적당하고 봄

서비스의 시작은 app.js임
-> 라우터를 이용해서 index.js로 보내줌
-> index.html 뿌려줌

- templet 엔진 : 중간에 도와주는 엔진
- =>pug(제이드), 넌적스, handle-bars 다양하게 사용되고 있음
- 오늘은 pugs 템플릿 엔진 사용할 예정
- 템플릿 엔진을 사용하는 이용는 이전에는 사용자에게 문자열만 넘겼지만 복잡한 차트, 숫자 같은경우 서버에서 그려서 넘기기에는 연산시간과 용량 문제로 웹사이트 속도가 느려지게됨
- 사용자 단에서 수치데이터와 변수들을 사용자 브라우저에 보내고 돌리기 위해서 템플릿을 사용함
- 퍼그의 문법으로 두개의 태깅올수 없음,다음줄로 뛰우고 탭해야함
- 그리고 속성의 경우 ()로 구분함

설치 : npm i pug

pug를 만든사람이 html 기반에서
1) 꺽쇠 빼버림
2) 들여쓰기로 구분하고 닫는거 생략해버림 

//  : html에 보이는 주석
//- : html에 안보이는 주석

퍼그는 index.js에서 res.render를 사용함


## 4교시
### MongoDB
- 각자의 데이터베이스 공간을 할당
- 데이터베이스는 논리적으로 분리된 데이터 센터라고 이해
- 데이터베이스 안에서 논리적으로 독립되고 서로 강한 연관성이 있는 데이터 그룸으로 만들어 주어야함
- 컬렉션 : mongoDB에서 강한 연관성이 있는 데이터들의 묶음


cmd>>몽고 디비 설치되어 있는곳
>>mongo


내서버에서 생성된 db 모두 보여줌
>>show dbs 

nodejs라는 데이터베이스 생성이된 동시에 이동
>>use nodejs
현재 위치 node 데이터베이스 안에 있음
현재 임시 생성이 되어서 값이 안들어오기전에는 show dbs로 안보임

>> show 


### 몽구스(mongoose)
- node.js 랑 궁합이 잘맞는 DB => mongodb
- mongodb 와 express 를 서로 연결해주는 함수들의 묶음을 재정의한게 몽구스임
몽구스 설치 작업폴더(환경, 터미널에서)
npm i mongoose

// 현재 거주하는 데이터베이스 확인 
>> db

// 추가된 객체 확인
>> db.users.find( {} )

// 객체 추가 되어서 nodejs db 확인 가능
>> show.dbs


## 실습시간 1_(KBC 코치님)
### 패키지
- package.json
- package-lock.json
위 두파일이 있는 이유는??
: 코드를 공유하고 협업을 해야함.
-> 문제는 node_module 폴더는 엄청 무거움 ( 의존성때문에 여러개 다깔림 => 용량이 난리남 ㅎㄷ;;  )
=> 상대방도 다 깔아야 되고.. 로그도 난리나고..

solve) 
어차피 모듈은 외부에서 받는거니깐 목록만 보내보자 ->
패키지만 공유해주고 상대방은 패키지를 읽고 npm을 설치 하게됨


- package.json : 기본적인 것만 명시
- package-lock.json : 의존성 까지 다 디테일하게 명시

패키지만 폴더에 나두고 밑에 명령어 실행하면 node_module 알아서 깔림
>> npm install


### 라우터
배달웹에도 다양한 기능들이 들어가게됨(장바구니, 결제, 가게리스트, 리뷰....)
요기요 app 하나에 몰아서 코딩 X
yogiyoApp.com
기능별로 분리
yogiyoApp.com/shop
yogiyoApp.com/rank
yogiyoApp.com/review

이러한 분리의 의미에서 라우터를 사용함
- 코드를 분리함으로서 편안

### REST API
API : 프로그램 만드는데 도와주는것 : 내부 동작과정을 몰라도, API를 통해 응용 프로그램 개발이 가능
REST API : 주체가 웹으로 바뀜 : API지만 웹을 통해 원하는 요청을 보내고, 그 요청을 받는것!( 서버가 어떻게 돌아가는지 신경은 쓰지않고, 어떻게 요청이 오는지만 암(상태코드,결과) )
- REST API 규약. 약속, 명세

### GET(얻기) POST(붙이기) 차이
GET : ~~ 정보 주시겠어요??
- 주로 데이터를 읽거나, 검색 할때 사용하는 메서드 (성공시 | 200 return)
- HTTP 명세에 의하면 GET 요청은 데이터를 읽을 떄만 사용되어야 하고, 수정될 때느 사용하지 않아야함
Post : 이거 좀 올려주세요!!
- 주로 새로운 리소스 생성 (성공시 | 201 return)
- 일반적으로 GET은 URL에 정보를 담는데 비해, POST는 HTML BOdy나 JSON으로 전달함
- => get은 url에 password 같은 입력 정보가 보여짐..(보안 취약)


### middleware
- 클라이언트의 요청을 받아 그 요청을 처리하는 과정에서 거치는 모든 함수들
- Express.js에는 미들웨어를 순차적으로 처리할 수 있음
