import React from "react";
import styled from "styled-components";
import {AiOutlineMenuFold} from 'react-icons/ai'
import { Link } from "react-scroll";
const Header = ({toggle,}) => {
  return (
    <Container>
      <Wrapper>
        <Sigh>T8m0thy.</Sigh>
        <Nav>
     
          <Links to="Home" spy={true} offset={-70} smooth={true} duration={500}>Home</Links>
          <Links to="Services" spy={true} offset={-70} smooth={true} duration={500}>Services</Links>
          <Links to="About" spy={true} offset={-70} smooth={true} duration={500}>About</Links>
          <Links to="Portfolio" spy={true} offset={-70} smooth={true} duration={500}>Portfolio</Links>
          <Links to="Testimomny" spy={true} offset={-70} smooth={true} duration={500}>Testimonies</Links>
          <Links to="Downtown" spy={true} offset={-70} smooth={true} duration={500}>Contact</Links>
      
        </Nav>
        <Icon>
        <AiOutlineMenuFold onClick={toggle}/>
        
        </Icon>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background: white;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  top: 0;
`;

const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// const Logo = styled.img`
//   height: 70px;
// `;

const Nav = styled.div`
  display: flex;
  @media screen and (max-width:767px){
  display: none;
  }
`;

const Links = styled(Link)`
  font-weight: bold;
  font-size: 16px;
  font-family: inter, sans-serif;
  margin-left: 50px;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

const Sigh = styled.div`
  font-family: "Comforter", cursive;
  font-size: 25px;
`;
const Icon = styled.div`
cursor: pointer;
font-size: 25px;
  @media screen and (min-width:768px){
  display: none;
  }
`