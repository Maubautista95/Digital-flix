import React from "react";
import styled from "styled-components";


const ContentActionMovies = styled.div`
background-color: lightblue;
padding: 50px 10vw;

h1{
  
  color: #02122c;
  font-size: 3rem;
  margin: 3rem 0;
  

}

`


const StyledActionMovies = styled.div`
  
  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px 2rem;
  

  @media(max-width: 425px){

    grid-template-columns: 1fr 1fr;
    grid-gap: 10px 10px;
  }
`;

const ActionItem = styled.div`
  
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


  @media(max-width: 425px){

    img {
      width: 30vw;
 
    }
  

  }

  span{
    color: white;
  }


`;

function AccionYAventura({ mediaItems }) {
  // Use map to create an array of JSX elements for each movie
// generoPrincipal: Object { _id: "65f9dbbfbd6cd558922992b6", nombre: "Acción y Aventura" }
  
const ActionMovies = mediaItems.filter(item => item.generoPrincipal.nombre === "Acción y Aventura")

  console.log(ActionMovies);

  const allMovies = ActionMovies.map((movie) => (
    <ActionItem key={movie._id}>

      <a href={movie.urlPelicula} target="_blank">
        <div>
          <img src={movie.imagenPortada} alt={movie.titulo} />
          <h2>{movie.titulo}</h2>
        </div>
      </a>
    </ActionItem>
  ));

  return (
    <ContentActionMovies>
    <h1>Todas nuestras películas y series de acción.</h1>
    <StyledActionMovies>
      
      {allMovies}
    </StyledActionMovies>

    </ContentActionMovies>
  );
}

export default AccionYAventura;
