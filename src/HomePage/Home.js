import React from "react";
import styled from "styled-components";
// import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
// import { AiFillInstagram, AiFillTwitterCircle,  AiOutlineWhatsApp } from "react-icons/ai";
import Title from "../Title";

const Home = () => {
  return (
    <Container id='Home'>
      <Wrapper>
        <Left>
          <Text>
            <Title number="01" title="Home" />
            <p>Hey, i'm</p>
            <Name>
              Timothy
              <br /> Okoduwa
            </Name>
          </Text>
        </Left>
        <Right>
          <Myname>
            <br />
            <Text2>
              <Title number="01" title="Home" />
              <p>Hey, i'm</p>
              <br />
              <br />
              <br />
              <Name2>
                Timothy
                <br /> Okoduwa
              </Name2>
            </Text2>
          </Myname>
        </Right>
      </Wrapper>
      <SVG>
        <svg
          width="100%"
          height="208"
          viewBox="0 0 1440 208"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0.5L1384.5 152L1440 134V208H0V0.5Z" fill="white" />
          <path d="M0 1L187.5 21L0 41.5V1Z" fill="#E9204F" />
        </svg>
      </SVG>

    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: 120vh;
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 100px;
`;

const Wrapper = styled.div`
  height: 110vh;
  width: 100%;
  display: flex;
`;

const Left = styled.div`
  width: 50%;
  background: #325288;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  background-image: url("/images/timothy.JPG");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: fixed;
  right: 0;
  z-index: -1;
  @media screen and (max-width: 768px) {
    width: 100vw;
    position: relative;
  }
`;

const Text = styled.div`
  p {
    color: gold;
    font-size: 40px;
    margin: 0;
  }
`;

const SVG = styled.div`
  position: absolute;
  bottom: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width:770px){
    margin-top: 200px;
    display: none;
  }
  @media screen and (max-width:1024px){
    margin-top: 40px;
  }
`;

const Name = styled.div`
  color: white;
  font-weight: bold;
  font-size: 80px;
`;

// const Icons = styled.div`
//   background: #e9204f;
//   width: 30px;
//   height: 150px;
//   position: fixed;
//   right: 0;
//   top: 270px;
//   cursor: pointer;
//   z-index: 10;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
//   font-size: 13px;
//   color: white;
// `;

// const A = styled.a`
//   text-decoration: none;
//   color: white;
// `;

// const Container = styled.div``;

const Myname = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 520px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Text2 = styled.div`
  p {
    color: gold;
    font-size: 30px;
    margin: 0;
  }
  @media screen and (max-width: 768px) {
  }
`;
const Name2 = styled.div`
  color: white;
  font-weight: bold;
  font-size: 60px;
  @media screen and (max-width: 768px) {
    font-size: 19px;
    margin-top: 90px;
  }
`;
