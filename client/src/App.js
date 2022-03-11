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
import UserDocuments from './page/documents/userdocuments';

function App() {
  return (
    <Router>
      <div className="App bg-neutral-900 text-white h-screen bg-auto">
        <header className="App-header">
        </header>
        <Layout>
          <Switch>
            <Route path="/login"><Login /></Route>
            <Route path="/signup"><Signup /></Route>
            <Route path="/userdash"><UserDash /></Route>
            <Route path="/userdocuments"><UserDocuments /></Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
