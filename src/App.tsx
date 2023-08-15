import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { Demos } from './components/Demos';

export interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/demos" element={<Demos />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
