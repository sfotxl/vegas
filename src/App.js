import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import { Container } from 'reactstrap';
// import Landing from './pages/Landing';
import Events from './pages/Events';
// import Hotels from './pages/Hotels';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Events />} />
        {/* <Route path='/Hotels' elements={<Hotels />} /> */}
      </Routes>
    </Container>
  );
}

export default App;
