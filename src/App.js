import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header/Header';
import AllMedia from "./components/AllMedia/AllMedia";
import AllSeries from "./components/AllSeries/AllSeries";
import AllMovies from "./components/AllMovies/AllMovies";
import AccionYAventura from "./components/AccionYAventura/AccionYAventura";
import Comedia from "./components/Comedia/Comedia";
import Crimen from "./components/Crimen/Crimen";
import Documental from "./components/Documental/Documental";
import Drama from "./components/Drama/Drama";
import Musical from "./components/Musical/Musical";
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios'; // Importar Axios
import styled from "styled-components";
import Misterio from "./components/Misterio/Misterio";

const GeneralStyles = styled.div`

min-height: 400px;
background-color: lightblue;
h2{
padding: 4rem 10vw 2rem 10vw;
font-size: 2rem;
}
`


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

  console.log(mediaItems);

  return (
    <BrowserRouter>
      <Header />
      <GeneralStyles>
      <main>
        <Routes>
          <Route path="/" element={<AllMedia mediaItems={mediaItems} />} /> 
          <Route path="/series" element={<AllSeries mediaItems={mediaItems} />} />
          <Route path="/peliculas" element={<AllMovies mediaItems={mediaItems} />} />
          <Route path="/AccionYAventura" element={<AccionYAventura mediaItems={mediaItems} />} />
          <Route path="/Comedia" element={<Comedia mediaItems={mediaItems} />} />
          <Route path="/Crimen" element={<Crimen mediaItems={mediaItems} />} />
          <Route path="/Misterio" element={<Misterio mediaItems={mediaItems} />} />
          <Route path="/Documental" element={<Documental mediaItems={mediaItems} />} />
          <Route path="/Drama" element={<Drama mediaItems={mediaItems} />} />
          <Route path="/Musical" element={<Musical mediaItems={mediaItems} />} />

        </Routes>
      </main>
      </GeneralStyles>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
