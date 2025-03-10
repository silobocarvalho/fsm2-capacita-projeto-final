import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import PokemonList from './PokemonList';

const App = () => {
 return (
  <Router>
   <Routes>
    <Route path="/" element={<PokemonList />} />
   </Routes>
  </Router>
 );
};
export default App;