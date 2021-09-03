import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  let [a,b] =  useState(['남자 코트 추천', '강남 우동 맛집','파이썬 독학']);
  let posts = '강남 고기 맛집';
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기(){
    //b(['여자 코트 추천', '강남 우동 맛집','파이썬 독학']);
    // 복사본을 만들어서 수정해야한다.
    var newArray = [...a];
    newArray[0] = '여자코트 추천';
    b(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
      <div className="list">
        <h3>{a[0]} <span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍</span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{a[1]}</h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
      <h3>{a[2]}</h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      
      <Modal />
    </div>
  );
}
function Modal(){
  return(
<div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>

      </div>
  )
}

export default App;
