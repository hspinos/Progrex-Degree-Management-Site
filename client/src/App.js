import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Layout from './components/layout';
import Signup from './page/authentication/signup';
import Login from './page/authentication/login';

function App() {
  return (
    <Router>
      <div className="App bg-black text-white h-screen">
        <header className="App-header">
        </header>
        <Layout>
          <Switch>
            <Route path="/login"><Login /></Route>
            <Route path="/signup"><Signup /></Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
