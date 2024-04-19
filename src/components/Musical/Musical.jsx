import React from "react";
import MediaPresentation from "../MediaPresentation/MediaPresentation";

function Musical({ mediaItems }) {
  // Filtrar los elementos de los medios de comunicación que coinciden con el género "Musical"
  const MusicalMedia = mediaItems.filter(item => item.generoPrincipal.nombre === "Musical");

  return (
    <>
      <h2>Todas las películas y series de tipo musical.</h2>
      <MediaPresentation data={MusicalMedia} />
    </>
  );
}

export default Musical;
