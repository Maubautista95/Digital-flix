import React from "react";
import styled from "styled-components";
import Proyector from "../../images/Proyector.svg";


const StyledLogo = styled.div`

    display: flex;
    align-items: center;

    img{

        width: 50px;
    }

    @media(max-width: 425px){

        img{
            width: 25px;
        }

    }

`

function Logo (){


    return <StyledLogo>
    
    
        <img src={Proyector} alt="Logo-página-proyector" />
        <span>Digital Flix</span>


    
    
    </StyledLogo>

}

export default Logo;