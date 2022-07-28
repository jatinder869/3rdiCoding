import { useState } from 'react';
import List from './List';
import Login from './Login'

function App() {
  
  const [loginSuccess, setLoginSuccess] = useState(false)

  const handleLogin = (loginValue) => {
    setLoginSuccess(loginValue)
  }

  if (loginSuccess){
    return (
      <div>
        <List/>
      </div>
    );
  } else {
    return (
      <div>
        <Login onLogin={handleLogin}/>
      </div>
    );
  }
}

export default App;
