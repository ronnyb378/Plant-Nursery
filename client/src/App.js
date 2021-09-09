import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyGarden from './pages/MyGarden';
import Plant from './pages/Plant';
import Profile from './pages/Profile';
import Calendar from './pages/Calendar';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/profile/:user">
            <Profile />
          </Route>
          <Route path="/mygarden/:user">
            <MyGarden />
          </Route>
          <Route path="/:user/:plantId">
            <Plant />
          </Route>
          <Route path="/calendar/:plantId">
            <Calendar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
