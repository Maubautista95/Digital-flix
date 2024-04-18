import React from "react";
import styled from "styled-components";


const ContentAllMovies = styled.div`
background-color: lightblue;
padding: 50px 10vw;

h1{
  
  color: #02122c;
  font-size: 3rem;
  margin: 3rem 0;
  

}

`


const StyledAllMovies = styled.div`
  
  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px 2rem;
  

  @media(max-width: 425px){

    grid-template-columns: 1fr 1fr;
    grid-gap: 10px 10px;
  }
`;

const MovieItem = styled.div`
  
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




function AllMedia({ mediaItems }) {
  // Use map to create an array of JSX elements for each movie
  const allMedia = mediaItems.map((movie) => (
    <MovieItem key={movie._id}>
    <a href={movie.urlPelicula} target="_blank">
    <div>
    <img src={movie.imagenPortada} alt={movie.titulo} />
      <h2>{movie.titulo}</h2>
    </div>
    </a>
    </MovieItem>
  ));

  console.log(mediaItems);

  return (
    <ContentAllMovies>
    <h1>Todas nuestras películas y series</h1>
    <StyledAllMovies>
      
      {allMedia}
    </StyledAllMovies>

    </ContentAllMovies>
  );
}

export default AllMedia;
