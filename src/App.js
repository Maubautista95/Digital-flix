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
import Productoras from "./components/Productoras/Productoras";
import FormMedia from "./components/Formularios/FormMedia/FormMedia";
import FormDirectores from "./components/Formularios/FormDirectores/FormDirectores";
import FormGeneros from "./components/Formularios/FormGeneros/FormGeneros";
import FormTipos from "./components/Formularios/FormTipos/FormTipos";
import FormProductoras from "../src/components/Formularios/FormProductoras/FormProductoras"
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios'; // Importar Axios
import styled from "styled-components";
import Misterio from "./components/Misterio/Misterio";

const GeneralStyles = styled.div`

min-height: 400px;
background-color: lightblue;

h1{
  padding: 20px 10vw;
}

h2{
padding: 4rem 10vw 2rem 10vw;
font-size: 2rem;
}

h3{
  padding: 1rem 10vw 0 10vw;
  font-size: 1.75rem;
  }

  form{
    padding: 20px 10vw;
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




  const [generoItems, setGeneroItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/generos/getall');
        setGeneroItems(response.data);

      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };
    fetchData();
  }, []);


  const [productoraItems, setProductoraItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/productoras/getall');
        setProductoraItems(response.data);

      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };
    fetchData();
  }, []);


  const [directorItems, setDirectorItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/directores/getall');
        setDirectorItems(response.data);

      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };
    fetchData();
  }, []);

  
  const [tipoItems, setTipoItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/tipos/getall');
        setTipoItems(response.data);

      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };
    fetchData();
  }, []);

  

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
          <Route path="/Productoras" element={<Productoras mediaItems={mediaItems} />} />
          <Route path="/editar_medios" element={<FormMedia mediaItems={mediaItems}
            generoItems={generoItems} 
            productoraItems={productoraItems} 
            directorItems={directorItems} 
            tipoItems={tipoItems}/>} />
          <Route path="/editar_generos" element={<FormGeneros mediaItems={mediaItems} generoItems={generoItems}/>} />
          <Route path="/editar_productoras" element={<FormProductoras mediaItems={mediaItems} productoraItems={productoraItems}/>} />
          <Route path="/editar_directores" element={<FormDirectores mediaItems={mediaItems} directorItems={directorItems}/>} />
          <Route path="/editar_tipos" element={<FormTipos mediaItems={mediaItems} tipoItems={tipoItems}/>} />
          


        </Routes>
      </main>
      </GeneralStyles>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
