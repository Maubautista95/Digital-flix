import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';

const StyledDivNav = styled.div`


 
.navbar{

  padding: 100px;
  background-color: #041e49 !important;
  
  
}

.dropdown-item{
  background-color: #041e49 !important;
  color: white;
}


.nav-item dropdown{
  border-color: #041e49 !important;
}

img{
  width: 7vw;
}

span{
  font-size: 3rem;  
}




@media(max-width: 415px){

  img{
    width: 15vw ;
  }
  
  span{
    font-size: 3rem;  
  }

}

.container{

  gap: 17vw;
}
`;

function Header() {


  return (


    <StyledDivNav>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark justify-content-center">
        <div className='container justify-content-center'>
        <a className="navbar-brand" href="/"><Logo id="logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav text-center" >

          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Géneros
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/AccionYAventura">Acción y Aventura</a>
                <a className="dropdown-item" href="/Comedia">Comedia</a>
                <a className="dropdown-item" href="/Misterio">Misterio</a>
                <a className="dropdown-item" href="/Crimen">Crimen</a>
                <a className="dropdown-item" href="/Documental">Documental</a>
                <a className="dropdown-item" href="/Drama">Drama</a>
                <a className="dropdown-item" href="/Musical">Musical</a>

                
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Productoras</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Tipo
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/peliculas">Peliculas</a>
                <a className="dropdown-item" href="/series">Series</a>
                
              </div>
            </li>
          </ul>
        </div>
        </div>
      </nav>

    </StyledDivNav>
  );

}

export default Header;
