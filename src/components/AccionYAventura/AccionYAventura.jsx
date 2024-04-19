import React from "react";
import MediaPresentation from "../MediaPresentation/MediaPresentation";

function AccionYAventura({ mediaItems }) {
  // Filtrar los elementos de los medios de comunicación que coinciden con el género "Crimen"
  const AccionMedia = mediaItems.filter(item => item.generoPrincipal.nombre === "Acción y Aventura");

  return (
    <>

    <h2>Todas las películas y series de acción y aventura.</h2>
      <MediaPresentation data={AccionMedia}/>
    </>
  );
}

export default AccionYAventura;

