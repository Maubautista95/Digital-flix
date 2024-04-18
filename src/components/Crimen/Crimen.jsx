import React from "react";
import MediaPresentation from "../MediaPresentation/MediaPresentation";

function Crimen({ mediaItems }) {
  // Filtrar los elementos de los medios de comunicación que coinciden con el género "Crimen"
  const CrimeMedia = mediaItems.filter(item => item.generoPrincipal.nombre === "Crimen");

  // Mapear los elementos filtrados para crear elementos de JSX para cada uno
  const allContent = CrimeMedia.map((media) => (
    <MediaPresentation key={media._id} data={media} />
  ));

  return (
    <>
      {allContent}
    </>
  );
}

export default Crimen;
