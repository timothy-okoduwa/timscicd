import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Testimonies from "./Testimonies";

const Portfolio = () => {
  return (
    <Container id='Portfolio'>
      <Title number="04" title="Portfolio" />
      <Text>Timothy Okoduwa.</Text>
      <Projects>
        <Pro>
          <Img src="/images/1.JPG" />
          <Cover className="cover">
            <Span className="span">Bukola's Portfolio-(done)</Span>

            <A href="https://bukola-portfolio.web.app">
              <P className="p">Let's Take   a look😉</P>
            </A>
          </Cover>
        </Pro>
        <Pro>
          <Img src="/images/2.JPG" />
          <Cover className="cover">
            <Span className="span">Her Voice-(in progress)</Span>
            <A href="https://her-voice-7005b.web.app">
              <P className="p">Let's Take a look😉</P>
            </A>
          </Cover>
        </Pro>
        <Pro>
          <Img src="/images/uk.png" />
          <Cover className="cover">
            <Span className="span">udeme Kitchen-(done)</Span>
            <A href="https://udemekitchen.herokuapp.com">
              <P className="p">Let's Take a look😉</P>
            </A>
          </Cover>
        </Pro>
        <Pro>
          <Img src="/images/cloud.jpg" />
          <Cover className="cover">
            <Span className="span">Weather App-(done)</Span>
            <A href="https://wetherreact.herokuapp.com">
              <P className="p">Let's Take a look😉</P>
            </A>
          </Cover>
        </Pro>
        <Pro>
          <Img src="/images/learnX.jfif" />
          <Cover className="cover">
            <Span className="span">learnX-(done)</Span>
            <A href="https://learnx-segun.web.app">
              <P className="p">Let's Take a look😉</P>
            </A>
          </Cover>
        </Pro>
        <Pro>
          <Img src="/images/first.jpg" />
          <Cover className="cover">
            <Span className="span">My first Portfolio-(done)</Span>
            <A href="https://timothys-portfolio.web.app">
              <P className="p">Let's Take a look😉</P>
            </A>
          </Cover>
        </Pro>
        <Pro>
          <Img src="/images/7.png" />
          <Cover className="cover">
            <Span className="span">Todo App-(done)</Span>
            <A href="https://personeltod.firebaseapp.com">
              <P className="p">Let's Take a look😉</P>
            </A>
          </Cover>
        </Pro>
        <Pro>
          <Img src="/images/1371931.jpg" />
          <Cover className="cover">
            <Span className="span">Demo move -(done)</Span>
            <A href="https://redux-movie.herokuapp.com">
              <P className="p">Let's Take a look😉</P>

            </A>
          </Cover>
        </Pro>
        <Pro>
           <Img src="/images/ser.jpg"/>
          <Cover className="cover">
            <Span className="span">Service-(done)</Span>
            <A href="https://myservicecon.web.app">
              <P className="p">Let's Take a look😉</P>
            </A>
          </Cover>
        </Pro>
        <Pro>
          <Img src="/images/ss.jpg" />
          <Cover className="cover">
            <Span className="span">Security Webapp-(done)</Span>
            <A href="https://security-dev-project.firebaseapp.com">
              <P className="p">Let's Take a look😉</P>
            </A>
          </Cover>
        </Pro>
        <Pro>
          <Img src="/images/11.png" />
          <Cover className="cover">
            <Span className="span">Branding</Span>
            <A href="https://google.com">
              <P className="p">Let's Take a look😉</P>
            </A>
          </Cover>
        </Pro>
        <Pro>
          <Img src="/images/12.png" />
          <Cover className="cover">
            <Span className="span">Branding</Span>
            <A href="https://google.com">
              <P className="p">Let's Take a look😉</P>
            </A>
          </Cover>
        </Pro>
      </Projects>
      <Testimonies />

  
    </Container>
  );
};

export default Portfolio;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
`;

const Text = styled.div``;

const Projects = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
`;

const Pro = styled.div`
  width: 250px;
  height: 220px;
  background: white;
  margin: 15px;
  position: relative;
  display: flex;
  /* border-radius: 20px; */
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover > .cover {
    opacity: 1;
    .span {
      margin-bottom: 3px;
    }
    .p {
      margin-bottom: 20px;
    }
    .a {
      text-decoration: none;
    }
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Cover = styled.div`
  width: 80%;
  height: 80%;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  opacity: 0;
  transition: 400ms;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Span = styled.div`
  font-weight: 600;
  font-size: 14px;
  transition-duration: 400ms;
  margin-left: 20px;
  opacity: 0.7;
  margin-bottom: 40px;
`;

const P = styled.div`
  font-family: "Dosis", "sans-serif";
  margin-left: 20px;
  font-size: 22px;
  font-weight: 700;
  transition-duration: 400ms;
  :hover {
    color: #e9204f;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: white;
`;


