import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Books from './components/pages/Books';
import Categories from './components/pages/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <main className="mainContainer">
      <section className="subcontainer ">
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* Books is the Homepage */}
            <Route path="/" element={<Books />} />
            <Route path="/Categories" element={<Categories />} />
          </Routes>
        </BrowserRouter>
      </section>
    </main>
  );
}

export default App;
