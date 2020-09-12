import React, {useState} from "react";

function Loginform({login}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleClick = () => {
        try{
          login({email, password});
        }catch(e){
          alert("fail")
          setEmail("")
          setPassword("")
        }
  }
    return (
        <>
          <h1>Login</h1>
          <input type="text" value={email} onChange={({target : {value}}) => setEmail(value)} placeholder="email" /> {/* onChange => input의 텍스트 값이 바뀔 떄 마다 발생 */}
          <input type="password" value={password} onChange={({target : {value}}) => setPassword(value)} placeholder="password" />
          <button onClick={handleClick}>Login</button>
        </>
      );
    }
 
export default Loginform;