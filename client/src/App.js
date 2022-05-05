import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { useState, useEffect } from 'react';

import Cookies from 'js-cookie';

import Layout from './components/layout';
import Signup from './page/authentication/signup';
import Login from './page/authentication/login';
import UserDash from './page/dashboards/userdash';
import UpdateUserPage from './page/user/updateuserinfo';
import UserDocuments from './page/documents/userdocuments';
import UserProgress from './page/progress/userprogress';
import DocSignConfirmation from './page/documents/docsignconfirmation';
import BadgeRequest from './page/badge/badgeRequest';
import AdminDocuments from './page/documents/admindocuments';
import AdminDash from './page/dashboards/admindash';
import AdminProgress from './page/progress/adminprogress';
import About from './page/about/aboutPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log("handleAuth was called. current status: " + isAuthenticated)
    if (Cookies.get('userCookie')) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false);
    }
  })

  const handleAuth = () => {
    console.log("handleAuth was called. current status: " + isAuthenticated)
    if (Cookies.get('userCookie')) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false);
    }
  }

  return (
    <Router>
      <div className="App bg-neutral-900 text-white h-full min-h-screen bg-auto">
        <header className="App-header">
        </header>
        <Layout
          authStatus={isAuthenticated}
        >
          <Switch>
            <Route path="/login"><Login handleAuth={handleAuth} /></Route>
            <Route path="/signup"><Signup /></Route>
            <Route path="/userdash"><UserDash /></Route>
            <Route path="/updateuserpage"><UpdateUserPage /></Route>
            <Route path="/admindash"><AdminDash /></Route>
            <Route path="/badgerequest"><BadgeRequest /></Route>
            <Route path="/userdocuments"><UserDocuments /></Route>
            <Route path="/userprogress"><UserProgress /></Route>
            <Route path="/docsignconfirmation"><DocSignConfirmation /></Route>
            <Route path="/admindocuments"><AdminDocuments /></Route>
            <Route path="/adminprogress"><AdminProgress /></Route>
            <Route path="/about"><About /></Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
