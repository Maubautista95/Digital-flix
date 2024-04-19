import React from "react";
import MediaPresentation from "../MediaPresentation/MediaPresentation";


function AllSeries({ mediaItems }) {

  const series = mediaItems.filter(item => item.tipo.nombre === "Serie")


  return (
    <>
    
    <MediaPresentation data={series}/>

    </>
  );
}

export default AllSeries;
