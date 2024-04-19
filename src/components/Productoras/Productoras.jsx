import React from "react";
import MediaPresentation from "../MediaPresentation/MediaPresentation";

function Productoras({ mediaItems }) {

    const TwentyFox = mediaItems.filter(item => item.productora.nombre === "20th Century Fox");
    const Paramount = mediaItems.filter(item => item.productora.nombre === "Paramount");
    const WarnerBros = mediaItems.filter(item => item.productora.nombre === "Warner Bros");
    const Illumination = mediaItems.filter(item => item.productora.nombre === "Illumination");
    const ColumbiaPictures = mediaItems.filter(item => item.productora.nombre === "Columbia Pictures");
    const Netflix = mediaItems.filter(item => item.productora.nombre === "Netflix");




    return <>

        <h2>Nuestras películas y series filtradas por productora:</h2>

        <h3>20th Century Fox</h3>
        <MediaPresentation data={TwentyFox}/>

        <h3>Paramount</h3>
        <MediaPresentation data={Paramount}/>

        <h3>Warner Bros</h3>
        <MediaPresentation data={WarnerBros}/>

        <h3>Illumination</h3>
        <MediaPresentation data={Illumination}/>

        <h3>Columbia Pictures</h3>
        <MediaPresentation data={ColumbiaPictures}/>

        <h3>Netflix</h3>
        <MediaPresentation data={Netflix}/>

    </>

}

export default Productoras;