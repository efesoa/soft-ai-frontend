import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

import Client from './pages/Client'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Header from './components/Header'
import Employee from "./pages/Employee";


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header/>
          <PrivateRoute component={Dashboard} path="/" exact/>
          <PrivateRoute component={Client} path="/client" exact/>
          <PrivateRoute component={Employee} path="/employee" exact/>
          <Route component={Login} path="/login"/>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
