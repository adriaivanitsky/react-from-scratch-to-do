import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Authorize from './views/Authorize';
import { getUser } from './services/users';
import { useState } from 'react';
import { logout } from './services/users';
import ToDoLogic from './views/ToDoLogic';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser ? (
              <div>
                <button onClick={(e) => logoutUser(e.target.value)}>logout</button>
                <ToDoLogic />
              </div>
            ) : (
              <Authorize currentUser={currentUser} setCurrentUser={setCurrentUser} />
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
