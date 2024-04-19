import React from "react";
import MediaPresentation from "../MediaPresentation/MediaPresentation";

function Drama({ mediaItems }) {
  
  const DocumentalMedia = mediaItems.filter(item => item.generoPrincipal.nombre === "Drama");

  return (
    <>

    <h2>Todas las películas y series de tipo drama.</h2>
    <MediaPresentation data={DocumentalMedia}/>
    </>
  );
}

export default Drama;
