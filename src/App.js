import React from 'react';
import Store from './components/Store'
import {BrowserRouter as Router , Switch,Route,Link} from 'react-router-dom'
import NewBook from './components/NewBook';

function App() {
  return ( // For Router we must define '/' Path to Home
    <Router>
      <div>
        <nav>
          <ul>
            <li> <Link to="/Home">Home</Link> </li>
            <li> <Link to="/Store"> Book Store</Link> </li>
            <li><Link to="NewBook"> Add New Book</Link></li>
          </ul>
        </nav>
      

      <Switch>
        <Route path="/Home"> <Home/> </Route>
        <Route path="/Store"> <Store/> </Route>
        <Route path="/NewBook"> <NewBook/> </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;




export  function Home() {
  return (
    <div>
     Welcome
    </div>
  )
}
