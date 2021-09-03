# react-1h-cloneStudy
- 유투브 강좌 clone 코딩 입니다. 
- https://www.youtube.com/watch?v=nahwuaXmgt8
# 리액트 설치 
- npx create-react-app blog
- 리액트 기본을 세팅해줌

## 미리보기 띄우기 
- npm start

- create-react-app 라이브러리 때문에 nodejs 설치함
- nodejs설치하면 npm 툴 이용가능 
- app.js 메인페이지에 들어갈 html 짜는곳 
- public 에 index.html이 메인페이지 
- app.js 코드를 indes.html 에 심는거 , index.js가 심게 도와줌
- node_modules에 라이브러리 모은 폴더 
- public : static 파일 보관함 
- src 코드 보관함 
- package.json 설치한 라이브러리 목록, npm으로 다운로드할때마다 추가됨

---

- App.js 에 리액트 문법 틀리면 컴파일 해줌
## 왜 app.js가 메인페이지냐?
- index.js에서 app.js에서 쓴것을 index.html에 박으라고 하고있음.
- id가 root인 app.js를 다 갖다가 붙이세요
- App() return에 쌩으로 html 코드 작성 할수있음
## 태그에 클래스를 주고싶으면?
- 리액트에서는 JSX 문법을 씀 html 대용
- class를 쓰지않고 className을 씀
- app.css에 css디자인
---
## 리액트는 데이터 바인딩을 쉽게 해준다. 
```
let posts = '강남 고기 맛집';
```
- 서버에서 데이터를 받아서 데이터를 html에 넣는것을 데이터 바인딩이라고하는데, 전통적인 방식보다 쉽다. 
- document.getElementById().innerHTML = ''; 이런게 쉽다.
- 데이터 바인딩 하고싶은곳에 중괄호하고 변수명,함수를 넣으면된다. 태그사이에 {}
- 속성안에 src, id, href {변수명, 함수} 태그안에서도 가능하다. 
```
import logo from './logo.svg';
<img src = {logo} />
<img src = "어쩌고저쩌고.png"> 도가능
```
- 추가도됨, className 처럼 오브젝트 만드는거도됨
```
	let posts = {color : 'blue', fontSize:'30px'}
 <div style={{color : 'blue', fontSize:'30px'}}>개발 blog</div>
<div style={posts}>개발 blog</div>
```
---

# 리액트에서 변수말고 state 만들어서 쓰자 (useState)
- 데이터를 let 변수명 으로 저장하는 방법이 아닌 state라는 문법을 사용할 수 있다.
- 데이터는 변수에 넣거나, state에 넣거나 2가지 방법이있다. 
- useState 함수를 실행하면 array가 나오는데 하나는 쓸수있는것, 나머지하나는 수정하는 용도
- destructuring 문법은 array object에 있던 자룔를 변수에 쉽게 담고 싶을 때 쓰는 문법
```
let [글제목, 글제목변경] = useState('남자 코트 추천 ');
```
- useState는 \[ state데이터, state 데이터 변경 함수 \] 가 output임
- state에 데이터 저장하는 이유는 웹이 app처럼 동작하게 만들고싶어서 
- let 변수로 만든애들은 데이터가 바뀌어도 재랜더링이 안된다. 
- state는 변경되면 새로고침없이도 html에 렌더링 된다. 변경이 되는 중요한 데이터는 state로 만든다.
---

# 리액트에서 번튼에 이벤트 리스너 장착하는법
## state 변경 하는법
```
onClick = { 클릭될때 실행할 함수 }
onClick = { ()=>{실행할 내용} }
let [따봉, 따봉변경] = useState(0);
<h3>{a[0]} <span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍</span> {따봉} </h3>
```
- state는 deep copy를 해서 바꿀수있다. 

```
function 제목바꾸기(){
    //b(['여자 코트 추천', '강남 우동 맛집','파이썬 독학']);
    // 복사본을 만들어서 수정해야한다.
    var newArray = [...a];
    newArray[0] = '여자코트 추천';
    b(newArray);
  }
```
---
# component로 html 줄이는방법
## Component 문법

- 함수 끝에 하나의 div 태그만 가능 여러개하고싶으면 안에다가 div여러개로 구성해야됨
- 하나의 함수 만들고 함수안에 html 넣으면됨 원하는곳에 함수태그 사용
## component 관습 
- 대문자로 해야된다. 
- 리턴 소괄호 안에다가 html 태그 써야되는데 div하나만 가능 
- 묶고싶으면 
```
<>
</>
```

## 어떤걸 Component로 만들면 좋을까? 
- 반복 출현하는 HTML 덩어리들
- 자주 변경되는 HTML UI들
- 다른 페이지 만들떄도 컴포넌트로 만듬 

## 상위 컴포넌트에서 state쓰려면 props 문법 이용해야됨

