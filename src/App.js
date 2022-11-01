import React, { useState, useEffect } from "react";
import './App.css';
import Cards from './compnent/Cards';
import Nav from "./compnent/Nav"
import Footer from "./compnent/Footer"
const [cours, setcours] = useState([]);

function App() {
  return (
    <div >
     <Nav></Nav>
     <Cards></Cards>
     <Footer></Footer>

    </div>
  );
}

export default App;
