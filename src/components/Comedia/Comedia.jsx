import React from "react";
import MediaPresentation from "../MediaPresentation/MediaPresentation";

function Comedia({ mediaItems }) {
  // Filtrar los elementos de los medios de comunicación que coinciden con el género "Crimen"
  const CoMedia = mediaItems.filter(item => item.generoPrincipal.nombre === "Comedia");

  return (
    <>

    <h2>Todas las películas y series de acción y aventura.</h2>
      <MediaPresentation data={CoMedia}/> 
    </>
  );
}

export default Comedia;

