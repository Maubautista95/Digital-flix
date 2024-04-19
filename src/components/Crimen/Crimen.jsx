import React from "react";
import MediaPresentation from "../MediaPresentation/MediaPresentation";

function Crimen({ mediaItems }) {
  
  const CrimeMedia = mediaItems.filter(item => item.generoPrincipal.nombre === "Crimen");

  return (
    <>

    <h2>Todas las películas y series de crimen.</h2>
    <MediaPresentation data={CrimeMedia}/>
    </>
  );
}

export default Crimen;
