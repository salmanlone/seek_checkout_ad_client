import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Home from './components/Home';
import HomePromis from './components/Home'
import Cart from './components/Cart';
// import Login from './components/Login/index';
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePromis} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;