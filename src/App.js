
import React from 'react';
import './App.css';
import Home from './components/pages/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Blog from './components/pages/Blog/Blog';
import Register from './components/pages/Register/Register';
import Join from './components/pages/Join/Join';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from './components/Button';


function App() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/blog' component={Blog} />
      <Route path='/join' component={Join} />
      <Route path='/button' component={Button} />
      <Route path='/register' component={Register} />

    </Router>
  )
}

export default App;
