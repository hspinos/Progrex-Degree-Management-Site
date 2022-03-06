import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Layout from './components/layout';
import Signup from './page/authentication/signup';
import Login from './page/authentication/login';
import UserDash from './page/dashboards/userdash';

function App() {
  return (
    <Router>
      <div className="App bg-neutral-900 text-white h-screen">
        <header className="App-header">
        </header>
        <Layout>
          <Switch>
            <Route path="/login"><Login /></Route>
            <Route path="/signup"><Signup /></Route>
            <Route path="/userdash"><UserDash /></Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
