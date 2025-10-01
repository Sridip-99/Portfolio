import { useState, useEffect } from 'react'
import './App.css'
import Preloader from './components/Preloader.jsx'
import Header from './sections/Header'
import Main from './sections/Main'
import Footer from './sections/Footer'

const API_URL = import.meta.env.VITE_API_URL;
const baseURL = API_URL.replace(/\/+$/, ""); // Remove trailing slashes if any

function App() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
    // Hide preloader after window load
    const handleLoad = () => setLoading(false);
    window.addEventListener('load', handleLoad);
    // Fallback: hide after 3s in case 'load' never fires
    const timeout = setTimeout(() => setLoading(false), 3000);

    // Backend wake-up call
    fetch(`${baseURL}/ping`, { method: "GET" });

    return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timeout);
    };
    }, []);
  
  return (
    <>
      {loading && <Preloader />}
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
