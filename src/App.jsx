import { useState } from 'react';
import List from './List';
import Login from './Login'

/**  
 * This is app component to toggle in between login and showing list of retailers.
 */
function App() {
  
  /**To maintain the record of user loggned in succesfully */
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
        {/* Using react props to pass from child componenet to parent componenet. custom function*/}
        <Login onLogin={handleLogin}/>
      </div>
    );
  }
}

export default App;
