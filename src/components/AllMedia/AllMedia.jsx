import React from "react";
import MediaPresentation from "../MediaPresentation/MediaPresentation";

function AllMedia({ mediaItems }) {

    
    return (
    <>

    <h2>Todas las películas y series.</h2>
    <MediaPresentation data={mediaItems}/>
    </>
  );
}

export default AllMedia;
