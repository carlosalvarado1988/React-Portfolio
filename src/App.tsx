import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { Demos } from './components/Demos';
import { ThreeFiber } from './components/ThreeFiber';

export interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="demos">
                    <Route index element={<Demos />} />
                    <Route path="images-explore" element={<ThreeFiber />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
