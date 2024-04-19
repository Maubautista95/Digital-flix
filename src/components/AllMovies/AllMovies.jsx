import React from "react";
import MediaPresentation from "../MediaPresentation/MediaPresentation";


function AllMovies({ mediaItems }) {
  
  const movies = mediaItems.filter(item => item.tipo.nombre === "Película")

  return (
    <>
    <h2>Todas nuestras películas</h2>

    <MediaPresentation  data={movies}/>

    </>
  );
}

export default AllMovies;
