import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyGarden from './pages/MyGarden';
import Plant from './pages/Plant';
import Profile from './pages/Profile';
// import Calendar from './pages/Calendar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionLoggedIn, actionLoggedOut } from './redux/actions/user';
import Alerts from './components/Alerts';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  

  const dispatch = useDispatch()
  useEffect(() => {
    fetch('/api/v1/users/current')
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          dispatch(actionLoggedOut())
        } else {
          dispatch(actionLoggedIn(data))
        }
        
      })
    // todo: store user info in redux
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Alerts />
        <Container className="pt-4 pb-4">
          <Switch>
            <Route exact path="/">
              <Login  />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <ProtectedRoute path="/profile">
            <Profile />
          </ProtectedRoute>

            <ProtectedRoute path="/mygarden">
              <MyGarden NavBarToggle={true} />
            </ProtectedRoute>

            {/* changing path from :user/:plantId to just /:plantId */}
            <ProtectedRoute path="/:plantId">
              <Plant />
            </ProtectedRoute>
            {/* <Route path="/calendar">
              <Calendar />
            </Route> */}
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
