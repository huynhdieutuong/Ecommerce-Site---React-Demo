import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import TopMenu from './components/TopMenu';
import Products from './pages/Products';

const Index = () => <h2>Home</h2>;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopMenu />

          <Route path='/' exact component={Index} />
          <Route path='/products/' exact component={Products} />
        </div>
      </Router>
    );
  }
}

export default App;
