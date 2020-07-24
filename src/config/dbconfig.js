//route singup 파일

import React, { useState } from 'react';

function SingUp() {
  const [state, setState] = useState({
    id : "",
    name: "",
    list: [],
  });

  function handleChange(e) {
    const {value} = e.target;
    setState({
      name: value,
      list: state.list,
    })
  }
  
  function handleClick(){
    const {name} = state;
    localStorage.setItem('name', name);//로컬에 아이디를 넣어줌
    showAllList() // 콘솔로 불러온다.
  }

  function checkSession(){
    const session = localStorage.getItem();
    console.log(session);
  }

  // 모든 localStorage 리스트 가져오기
  function showAllList(){
    console.log(localStorage.length);
    for(let i = 0 ; i < localStorage.length ; i++){
      console.log(localStorage[localStorage.key(i)]);
    }
  }

  function handleCheck(){
    const {list, name} = state;
    localStorage.setItem('name',name);
    setState({
      list: list.concat({name: localStorage.getItem('name')}),
      name: "",
    })
    console.log("=========================");
    for(let i = 0; i < list.length; i++){
      console.log(list[i].name);
    }
    console.log("=========================");
  }

  

    return (
        <div>
          이름 : <input value={state.name} onChange={handleChange}/> <a onClick={handleCheck}>등록</a>
        </div>
      );
    }

export default SingUp;
