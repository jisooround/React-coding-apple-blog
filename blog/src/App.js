import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let [title, setTitle] = useState(['블로그 시작','오늘의 일상','가나초콜릿 리뷰']);
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [input, setInput] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>

      <button onClick = { () => {
      let sortList = [...title]; 
      sortList.sort();
      setTitle(sortList)
     }}>이름순으로 정렬</button>

      <button onClick={ () => { 
        let copy = [...title];
        copy[0] = '여자 코트 추천';
        setTitle(copy);
        }}>제목 변경</button>

      {/* <div className="post">
      <h4>{title[0]}<span onClick={ () => { setLike(like += 1) }}>👍</span>{like}</h4>
      <p>22년 10월 20일 발행</p>
      </div>

      <div className="post">
      <h4>{title[1]}</h4>
      <p>22년 10월 20일 발행</p>
      </div>

      <div className="post">
      <h4 onClick={() => { setModal(!modal)}}>{title[2]}</h4>
      <p>22년 10월 20일 발행</p>
      </div> */}
      {
        title.map(function(a, i){
          return (
            <div className="post" key={i}>
            <h4 onClick={() => {setModal(!modal); setModalTitle(i)}}>{title[i]}
            <span onClick={ (e) => {e.stopPropagation(); setLike(like+1)}}>
              👍</span>{like}</h4>
            <p>22년 10월 20일 발행</p>
            <button onClick={() => {
              let copy = [...title]
              copy.splice(i,1)
              setTitle(copy)
            }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e) => {setInput(e.target.value); console.log(input)}} />
      <button onClick={() => {
        let copy = [...title]
        copy.splice(0,0,input)
        setTitle(copy)
      }}>발행</button>

      {
        modal === true ? <Modal modalTitle={modalTitle} setTitle={setTitle} title={title}/> : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
    <h4>{ props.title[props.modalTitle] }</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button onClick = { () => {
      let copy = [...props.title]
      copy[0] = '여자 코트 추천';
      props.setTitle(copy)
    }}>제목 변경</button>
  </div>
  )
}

// <button onClick={ () => { 
//   let copy = [...title];
//   copy[0] = '여자 코트 추천';
//   setTitle(copy);
//   }}>제목 변경</button>

const Blackskirt = () => {
  return (
    <>
     <img src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbapRua%2FbtrMnKRbx3y%2FqbQvnK0V2yRb791SdAKtCk%2Fimg.jpg" alt="검정치마" />
    </>
  )
}

export default App;
