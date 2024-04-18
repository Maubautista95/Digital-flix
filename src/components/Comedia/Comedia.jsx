import React from "react";
import styled from "styled-components";


const ContentComedyMovies = styled.div`
background-color: lightblue;
padding: 50px 10vw;

h1{
  
  color: #02122c;
  font-size: 3rem;
  margin: 3rem 0;
  

}

`


const StyledComedyMovies = styled.div`
  
  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px 2rem;
  

  @media(max-width: 425px){

    grid-template-columns: 1fr 1fr;
    grid-gap: 10px 10px;
  }
`;

const ComedyItem = styled.div`
  
  text-align: center;
  margin: 16px 0;
  padding: 2rem 0;
  border: 3px solid grey;
  background: rgb(173,216,230);
  background: radial-gradient(circle, rgba(173,216,230,1) 6%, rgba(4,30,73,1) 86%); 
  

  h2 {
    
    font-weight: 600;
    margin: 0.5rem 0;
    color: white;
    
  }

  img {
    width: 19vw;
    aspect-ratio: 3 / 3;
    border: 4px solid #041e49;
    margin-bottom: 24px;
  }

  a {
    text-decoration: none
    
  }

  span{
    color: white;
  }


  @media(max-width: 425px){

    img {
      width: 30vw;
 
    }
  

  }
  

`;

function Comedia({ mediaItems }) {
  // Use map to create an array of JSX elements for each movie
// generoPrincipal: Object { _id: "65f9dbbfbd6cd558922992b6", nombre: "Acción y Aventura" }
  
const ComedyMovies = mediaItems.filter(item => item.generoPrincipal.nombre === "Comedia")

  console.log(ComedyMovies);

  const allMovies = ComedyMovies.map((movie) => (
    <ComedyItem key={movie._id}>

      <a href={movie.urlPelicula} target="_blank">
        <div>
          <img src={movie.imagenPortada} alt={movie.titulo} />
          <h2>{movie.titulo}</h2>
          <span>{movie.anhoEstreno}</span>
        </div>
      </a>
    </ComedyItem>
  ));

  return (
    <ContentComedyMovies>
    <h1>Todas nuestras películas y series de comedia.</h1>
    <StyledComedyMovies>
      
      {allMovies}
    </StyledComedyMovies>

    </ContentComedyMovies>
  );
}

export default Comedia;