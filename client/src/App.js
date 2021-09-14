// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyGarden from './pages/MyGarden';
import Plant from './pages/Plant';
import Profile from './pages/Profile';
import Calendar from './pages/Calendar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { actionLoggedIn } from './redux/actions/user';

function App() {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   fetch('/api/v1/users/current')
  //     .then(res => res.json())
  //     .then(data => {
  //       dispatch(actionLoggedIn(data))
  //     })
  //   // todo: store user info in redux
  // }, [dispatch])

  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
        <Container className="pt-4 pb-4">
          <Switch>
            <Route exact path="/login">
              <NavBar NavBarToggle={false} />
              <Login  />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/profile/:user">
              <Profile />
            </Route>
            <Route path="/mygarden">
              <MyGarden NavBarToggle={true} />
            </Route>
            <Route path="/:user/:plantId">
              <Plant />
            </Route>
            <Route path="/calendar">
              <Calendar />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
