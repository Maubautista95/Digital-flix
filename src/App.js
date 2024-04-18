import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header/Header';
import AllMedia from "./components/AllMedia/AllMedia";
import AllSeries from "./components/AllSeries/AllSeries";
import AllMovies from "./components/AllMovies/AllMovies";
import AccionYAventura from "./components/AccionYAventura/AccionYAventura";
import Comedia from "./components/Comedia/Comedia";
import Crimen from "./components/Crimen/Crimen";
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios'; // Importar Axios

function App() {
  const [mediaItems, setMediaItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/mediaitems/getall');
        setMediaItems(response.data);

      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };
    fetchData();
  }, []);

  

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AllMedia mediaItems={mediaItems} />} /> 
          <Route path="/series" element={<AllSeries mediaItems={mediaItems} />} />
          <Route path="/peliculas" element={<AllMovies mediaItems={mediaItems} />} />
          <Route path="/AccionYAventura" element={<AccionYAventura mediaItems={mediaItems} />} />
          <Route path="/Comedia" element={<Comedia mediaItems={mediaItems} />} />
          <Route path="/Crimen" element={<Crimen mediaItems={mediaItems} />} />
          
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
