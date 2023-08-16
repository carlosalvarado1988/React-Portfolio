import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { Demos } from './components/Demos';
import { ThreeFiber } from './components/ThreeFiber';
import { AppContainer } from './App.styles';

const basename = document.querySelector('base')?.getAttribute('href') ?? '/';

const App: React.FunctionComponent = () => {
  return (
    <AppContainer>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="demos">
            <Route index element={<Demos />} />
            <Route path="images-explore" element={<ThreeFiber />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
