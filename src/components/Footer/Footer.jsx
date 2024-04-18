import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";


const StyledFooter = styled.footer`

background-color: #041e49;
color: white;
padding: 50px 10vw;
display: flex;
align-items: center;
flex-direction: column;
gap: 7px;

`


function Footer () {

return <StyledFooter>

<span>Todos los derechos reservados ©.</span>

<Logo />

</StyledFooter>


}

export default Footer;