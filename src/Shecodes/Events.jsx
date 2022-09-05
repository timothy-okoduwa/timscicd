import React from "react";
import styled from "styled-components";
import a from "./image/sky.jpg";
const Events = () => {
  return (
    <Div>
      <Heading>
        <div>Events</div>
        <div>jfdlxkjdjxjjdljdj dhddiuddiuzsauiua</div>
      </Heading>

      <Gallery>
        <Imagecard>
          <Photo src={a} />
          <Info>
            <Sub>Shecodes help young girls</Sub>
            <Dateee>12 March 2022</Dateee>
          </Info>
        </Imagecard>
        <Imagecard>
          <Photo src={a} />
          <Info>
            <Sub>Shecodes help young girls</Sub>
            <Dateee>12 March 2022</Dateee>
          </Info>
        </Imagecard>
        <Imagecard>
          <Photo src={a} />
          <Info>
            <Sub>Shecodes help young girls</Sub>
            <Dateee>12 March 2022</Dateee>
          </Info>
        </Imagecard>
        <Imagecard>
          <Photo src={a} />
          <Info>
            <Sub>Shecodes help young girls</Sub>
            <Dateee>12 March 2022</Dateee>
          </Info>
        </Imagecard>
        <Imagecard>
          <Photo src={a} />
          <Info>
            <Sub>Shecodes help young girls</Sub>
            <Dateee>12 March 2022</Dateee>
          </Info>
        </Imagecard>
      </Gallery>
    </Div>
  );
};

export default Events;
const Div = styled.div``;
const Heading = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;
const Gallery = styled.div`
  height: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Imagecard = styled.div`
  height: 220px;
  width: 220px;
  background-color: green;
  /* position: relative; */
  margin: 10px;
`;
const Photo = styled.img`
  height: 220px;
  width: 220px;
  object-fit: cover;
  position: absolute;
`;
const Info = styled.div`
  color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1%;
  margin-top: 15%;

  flex-direction: column;
`;
const Dateee = styled.div``;
const Sub = styled.div`
  font-weight: bold;
`;
