import React from "react";
import MediaPresentation from "../MediaPresentation/MediaPresentation";

function Documental({ mediaItems }) {

  const DocumentalMedia = mediaItems.filter(item => item.generoPrincipal.nombre === "Documental");

  return (
    <>

    <h2>Todas las películas y series de tipo documental.</h2>
    <MediaPresentation data={DocumentalMedia}/>
    </>
  );
}

export default Documental;


