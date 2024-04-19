import React from "react";
import MediaPresentation from "../MediaPresentation/MediaPresentation";

function Misterio({ mediaItems }) {

  const MisteryMedia = mediaItems.filter(item => item.generoPrincipal.nombre === "Misterio");

  return (
    <>

    <h2>Todas las películas y series de misterio.</h2>
    
    <MediaPresentation data={MisteryMedia}/>  

    </>
  );
}

export default Misterio;
