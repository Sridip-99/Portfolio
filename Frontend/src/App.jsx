import { useState, useEffect } from 'react'
import './App.css'
import Header from './sections/Header'
import Main from './sections/Main'
import Footer from './sections/Footer'

const API_URL = import.meta.env.VITE_API_URL;
const baseURL = API_URL.replace(/\/+$/, ""); // Remove trailing slashes if any

function App() {
  
  useEffect(() => {
    // jaise hi portfolio load hoga, ye call backend ko wake karega
    fetch(`${baseURL}/ping`, {
      method: "GET",
    })
      .then(() => console.log("Backend wake-up request sent ✅"))
      .catch((err) => console.error("Wake-up failed ❌", err));
  }, []);
  
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
