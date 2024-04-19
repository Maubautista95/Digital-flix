import React from "react";
import styled from "styled-components";

const ContentMedia = styled.div`
  background-color: lightblue;
  padding: 50px 10vw;
  a{
    color: white; 
  }

  a:hover{
    color: lightblue;
  }



`;

const StyledMedia = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  grid-gap: 10px;

  @media(max-width: 415px){
    grid-template-columns: 1fr 1fr; 
  }

`;

const StyledMediaItem = styled.div`
  text-align: center;
  max-width: 25vw;
  margin: 16px 0;
  padding: 2rem 0;
  border: 3px solid grey;
  background: radial-gradient(circle, rgba(173, 216, 230, 1) 6%, rgba(4, 30, 73, 1) 86%);
  color: white;

  h3 {
    font-weight: 600;
    margin: 0.5rem 0;
    max-with: 80%;
    padding: 0 !important;
    
  }

  img {
    width: 80%; /* Ajustando el ancho de la imagen al 100% del contenedor */
    max-width: 80%; /* Asegurando que la imagen no se expanda más allá de su tamaño original */
    height: auto; /* Permitiendo que la altura se ajuste automáticamente para mantener la relación de aspecto */
    border: 4px solid #041e49;
    margin-bottom: 24px;
    aspect-ratio: 1 / 1;  
  }

  a {
    text-decoration: none;
  }

  @media(max-width: 415px){

    max-width: 40vw;
  }
`;

function MediaPresentation({ data }) {
  const allContent = data.map(dataItem => (
    <StyledMediaItem key={dataItem._id}>
      
      <a href={dataItem.urlPelicula} target="_blank" rel="noreferrer">
        <img src={dataItem.imagenPortada} alt={dataItem.titulo} />
        <h3>{dataItem.titulo}</h3>
        <span>{dataItem.tipo.nombre}</span><br></br>
        <span>Género: {dataItem.generoPrincipal.nombre}</span>
        
      </a>
    </StyledMediaItem>
  ));

  return (
    <ContentMedia>
      <StyledMedia>{allContent}</StyledMedia>
    </ContentMedia>
  );
}

export default MediaPresentation;
