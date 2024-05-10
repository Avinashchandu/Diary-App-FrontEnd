import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Entries from './Entries.js'; 
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
     <container>
    
   <Router>
      <div>
      
        <Routes>
          <Route path="/" element={<AnimatePresence >
                  <Home />
                </AnimatePresence>} />
          <Route path="/entries" element={< Entries/>} />
        </Routes>
      </div>
    </Router>

    </container>

     
  );
}

export default App;
