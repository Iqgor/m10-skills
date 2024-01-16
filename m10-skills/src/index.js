import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Home from './pages/Home';
import Organisatie from "./pages/Organisatie";
import Projecten from "./pages/Projecten";
import Werk from "./pages/Werk";
import NoPage from './pages/noPage'


export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Layout/>}>
            <Route index element={<Home />} />
            <Route path="organisatie" element={<Organisatie naam="Organisatie" />} />
            <Route path="projecten" element={<Projecten naam="Organisatie"/>} />
            <Route path="werkenbij" element={<Werk naam="Organisatie"/>} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));

