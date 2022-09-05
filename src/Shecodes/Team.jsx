import React from "react";
import styled from "styled-components";
import a from "./image/sky.jpg";
const Team = () => {
  return (
    <Div>
      <Heading>
        <div>Teams</div>
        <div>jfdlxkjdjxjjdljdj dhddiuddiuzsauiua</div>
      </Heading>

      <Gallery>
        <div>jfjfjfjdjd jjdkzzdj jzkjzkjzs\opsklxjjudjjcido</div>
        <div>OUR TEAM</div>
        <Second>
          <Imagecard>
            <Photo src={a} />
            <Con>Bukola Gbemi</Con>
            <Con2>jdud jdsh hdhd hdhdhdk</Con2>
          </Imagecard>
          <Imagecard>
            <Photo src={a} />
            <Con>Bukola Gbemi</Con>
            <Con2>jdud jdsh hdhd hdhdhdk</Con2>
          </Imagecard>
          <Imagecard>
            <Photo src={a} />
            <Con>Bukola Gbemi</Con>
            <Con2>jdud jdsh hdhd hdhdhdk</Con2>
          </Imagecard>
          <Imagecard>
            <Photo src={a} />
            <Con>Bukola Gbemi</Con>
            <Con2>jdud jdsh hdhd hdhdhdk</Con2>
          </Imagecard>
          <Imagecard>
            <Photo src={a} />
            <Con>Bukola Gbemi</Con>
            <Con2>jdud jdsh hdhd hdhdhdk</Con2>
          </Imagecard>
        </Second>
      </Gallery>
    </Div>
  );
};

export default Team;
const Div = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;
const Heading = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;
const Gallery = styled.div`
  height: 100%;
  background-color: pink;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
  div {
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }
`;

const Imagecard = styled.div`
  height: 270px;
  width: 220px;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: 10px;
  border-radius: 5px;
`;
const Photo = styled.img`
  height: 160px;
  width: 200px;
  object-fit: cover;
  justify-content: center;
  margin: 10px;
  border-radius: 3px;
`;
const Second = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Con = styled.div``;
const Con2 = styled.div`
  padding-bottom: 30px;
`;
