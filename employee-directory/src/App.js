import React from 'react';
import Navbar from "./components/Navbar";
import Titles from "./components/Titles";
import Search from "./components/Search";


function App() {
  return(
      <div className="flexbox-container">
        <Navbar />
        <Titles/>
        <Search/>
      </div>
    

  
  )
}

export default App;
