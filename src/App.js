import React from 'react';
import './App.css';
import Landing from './components/Landing';
import { BrowserRouter as Routes ,Route } from 'react-router-dom'

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' component={Landing } />
    </Routes>
     
    </div>
  );
}

export default App;
