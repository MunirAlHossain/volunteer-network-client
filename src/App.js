import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AdminDashBoard from './Components/AdminDashBoard/AdminDashBoard';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MyTask from './Components/MyTasks/MyTask';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm'

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/registration/:task">
            <RegistrationForm></RegistrationForm>
          </PrivateRoute>
          <Route path="/myTask">
            <MyTask></MyTask>
          </Route>
          <Route path="/admin">
            <AdminDashBoard></AdminDashBoard>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
