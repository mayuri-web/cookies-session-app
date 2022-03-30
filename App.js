import React,{useState} from 'react';
import './App.css';
import {CookiesProvider} from 'react-cookie';
import {useCookies} from 'react-cookie';

function App() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['user']);
  const [getData, setGetData] = useState([]);

  const handleCookie =()=>{
    setCookie('UserName', userName, {path:'/'});
    setCookie('Password', password, {path:'/'});
  }
  const sessionData =()=>{
    let data = {userName, password};
    sessionStorage.setItem('mysession', JSON.stringify(data));
    setGetData(JSON.parse(sessionStorage.getItem('mysession', data)));
    // console.log(JSON.parse(getData).userName);
    
  }
  
  return (
    <CookiesProvider>
      <div className="App">
        <header className="App-header">
            <div>
              <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            <div>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <br/>
            <button onClick={handleCookie}>Set Cookie</button>
            <button onClick={sessionData}>Set Session</button>
            
              {cookies.UserName && (
                  <h4>User name in cookie is: {cookies.UserName}</h4>
              )}
              <div>This is user's session name: {(getData).userName}</div>
              {cookies.Password && (
                  <h4>User password in cookie is: {cookies.Password}</h4>
              )}
              <div>This is user's session password: {(getData).password}</div>
        </header>
      </div>
    </CookiesProvider>
  );
}

export default App;
