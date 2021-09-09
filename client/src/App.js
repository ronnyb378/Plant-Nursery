import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
