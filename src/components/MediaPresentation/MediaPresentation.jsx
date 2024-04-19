import React from "react";
import styled from "styled-components";

const ContentMedia = styled.div`
  background-color: lightblue;
  padding: 50px 10vw;

  h1 {
    color: #02122c;
    font-size: 3rem;
    margin: 3rem 0;
  }
`;

const StyledMedia = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Utilizando auto-fit para ajustar automáticamente el número de columnas */
  grid-gap: 10px;
`;

const StyledMediaItem = styled.div`
  text-align: center;
  margin: 16px 0;
  padding: 2rem 0;
  border: 3px solid grey;
  background: radial-gradient(circle, rgba(173, 216, 230, 1) 6%, rgba(4, 30, 73, 1) 86%);
  color: white;

  h3 {
    font-weight: 600;
    margin: 0.5rem 0;
  }

  img {
    width: 100%; /* Ajustando el ancho de la imagen al 100% del contenedor */
    max-width: 100%; /* Asegurando que la imagen no se expanda más allá de su tamaño original */
    height: auto; /* Permitiendo que la altura se ajuste automáticamente para mantener la relación de aspecto */
    border: 4px solid #041e49;
    margin-bottom: 24px;
  }

  a {
    text-decoration: none;
  }
`;

function MediaPresentation({ data }) {
  const allContent = data.map(dataItem => (
    <StyledMediaItem key={dataItem._id}>
      <a href={dataItem.urlPelicula} target="_blank" rel="noreferrer">
        <img src={dataItem.imagenPortada} alt={dataItem.titulo} />
        <h3>{dataItem.titulo}</h3>
        <span>{dataItem.tipo.nombre}</span>
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
