# 엘리스 실시간 수업_(이고잉 코치님)_ 리액트
## 3.08.(화)
 
## 실시간
### 1교시

#### 깃에서 node.js 기반 프로젝트를 클론해서 세팅하는방법
#### vs코드로 깃을 간단하게 클론하는 방법
- 클론클릭하면 HTTPS 링크 복사
- 로컬 환경에서 새 프로젝트 '디렉토리' 생성
- 왼쪽 explore 클릭하면 clon repository가 있을거임 => 주소 붙여넣기하면 어디에 복제할건지 물어봄 => 원하는 곳 이름 지정하고 생성함 => 열기
- vscode 폴더를 보면 react-app(작업중인 react 프로젝트) 으로 터미널에서 cd로 이동
- package.json 이 있으면 node.js 프로젝트라는거
- npm install 명령어 입력하면 node-modules(프로젝트에 필요한 부품들)라는 폴더 생김 
- npm start 명령어 입력하면 실행이됨

#### 벡엔드 필요 : json server

- App.js은 JSX임 javascript가 아님!!!
- JSX를 웹브라우저가 실행할수 있는 자바스크립트로 번역해주는 시스템이 필요함
- 리엑트가 npm start 하면 compiled successfully라고 알아서 컴파일 해줌 -> 이터미널 끄면 안됨
- 새로운 터미널로 npx json-server --watch --port ??? db.json 명령어로
db.json에 데이터를 저장하고 읽어 오겠다/
watch옵션을 주어서 db.json을 수정해도 json-server가 변경될거 알게해줌/
port옵션으로 다른 포트를 줌/


#### 컴포넌트에서 최초한번만 실행해야하는 로직이 있다면 useEffect를 쓴다
#### useEffect(function () { }, []);

리액트는 예측가능성을 높이기 위해서 순수한 함수여야함
- 순수함수 : 언제나 같은 결과가 나오는 함수
- 비순수함수 : 외부 영향을 받아 같은 결과를 나타내지 않음

비순수함수의 대표적인 예 서버통신으로 다르게 동작하게 되는 상황 => useEffect를 사용하자!


### 3교시

제이슨 서버가 자동으로 create 할때 id 값을 1씩 올려줌


#### bootstrap
- 부트스트랩: 전문 CSS 디자이너가 아니어도 간단하게 이쁜 CSS 쓸수있음
https://getbootstrap.com/

#### reactbootstrap
https://react-bootstrap.github.io/
- react 맞춤 부트스트랩

터미널 설치 : npm install react-bootstrap bootstrap@5.1.3

설치후 app.js에 import하기
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

- modal 



#### MUI
https://mui.com/
- mui 를 부트스트랩보다 더 추천함
- mui가 훨씬더 강력한거 같음
- 부트스트랩이랑 거의 비슷해서
- 부트스트랩 공부하고 mui로 넘어가기


### 실습 강의
