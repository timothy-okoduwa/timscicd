import React from "react";
import styled from "styled-components";
import {
  AiOutlineAndroid,
  AiOutlineCoffee,
  AiOutlineDesktop,
  // AiOutlineLineChart,
  AiOutlineRight,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import { DiPhotoshop } from "react-icons/di";
import Title from "../Title";
import { FaFigma } from "react-icons/fa";

const Servives = () => {
  return (
    <Container id='Services'>
      <Title number="02" title="Services" />
      <Text>my services</Text>
      <Service>
        <ServicesBox>
          <Icon className="white">
            <AiOutlineDesktop />
          </Icon>
          <Line className="whitebg" />
          <Icon1 className="white">
            <AiOutlineRight />
          </Icon1>
          <Name className="white">Web Development</Name>
        </ServicesBox>
        {/* <ServicesBox>
          <Icon className="white">
            <AiOutlineLineChart />
          </Icon>
          <Line className="whitebg" />
          <Icon1 className="white">
            <AiOutlineRight />
          </Icon1>
          <Name className="white">Digital Marketing</Name>
        </ServicesBox> */}
        <ServicesBox>
          <Icon className="white">
            <AiOutlineAndroid />
          </Icon>
          <Line className="whitebg" />
          <Icon1 className="white">
            <AiOutlineRight />
          </Icon1>
          <Name className="white">Project Management</Name>
        </ServicesBox>
        <ServicesBox>
          <Icon className="white">
            <AiOutlineVideoCamera />
          </Icon>
          <Line className="whitebg" />
          <Icon1 className="white">
            <AiOutlineRight />
          </Icon1>
          <Name className="white">Adobe XD</Name>
        </ServicesBox>
        <ServicesBox>
          <Icon className="white">
            <DiPhotoshop />
          </Icon>
          <Line className="whitebg" />
          <Icon1 className="white">
            <AiOutlineRight />
          </Icon1>
          <Name className="white">Graphic Design</Name>
        </ServicesBox>
        <ServicesBox>
          <Icon className="white">
            <AiOutlineCoffee />
          </Icon>
          <Line className="whitebg" />
          <Icon1 className="white">
            <AiOutlineRight />
          </Icon1>
          <Name className="white">Mockup Design</Name>
        </ServicesBox>
        <ServicesBox>
          <Icon className="white">
            <AiOutlineDesktop />
          </Icon>
          <Line className="whitebg" />
          <Icon1 className="white">
            <AiOutlineRight />
          </Icon1>
          <Name className="white">Coding Tutorial</Name>
        </ServicesBox>
        <ServicesBox>
          <Icon className="white">
            <FaFigma />
          </Icon>
          <Line className="whitebg" />
          <Icon1 className="white">
            <AiOutlineRight />
          </Icon1>
          <Name className="white">UI/UX Design</Name>
        </ServicesBox>
        {/* <ServicesBox>
          <Icon className="white">
            <DiPhotoshop />
          </Icon>
          <Line className="whitebg" />
          <Icon1 className="white">
            <AiOutlineRight />
          </Icon1>
          <Name className="white">Photo Manipulation</Name>
        </ServicesBox> */}
      </Service>
    </Container>
  );
};

export default Servives;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: white;
  padding-top: 20px;
  margin-top: -33px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Service = styled.div`
  width: 92%;
  height: 60vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 30px;
  @media screen and (max-width: 768px) {
    margin-top: 200px;
  }
`;

const Text = styled.div`
  @media screen and (max-width: 768px) {
    font-size: 9px;
  }
`;

const ServicesBox = styled.div`
  height: 90px;
  width: 380px;
  background: #f5f5f5;
  transition: 350ms;
  display: flex;
  align-items: center;
  border-radius: 5px;
  :hover {
    background: #e9204f;
  }
  :hover > .white {
    color: white;
  }
  :hover > .whitebg {
    background: rgba(252, 252, 252, 0.4);
  }
  @media screen and (max-width: 768px) {
    /* width: 50px; */
    margin: 10px;
    width: 220px;
  }
`;

const Icon = styled.div`
  font-size: 37px;
  margin: 20px;
  transition: 350ms;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Line = styled.div`
  height: 50%;
  background: rgba(0, 0, 0, 0.4);
  width: 1px;
  transition: 350ms;
  margin-right: 15px;
`;

const Icon1 = styled.div`
  transition: 400ms;
  font-size: 15px;
`;

const Name = styled.div`
  margin-left: 15px;
  font-size: 19px;
  font-weight: 600;
  font-family: "Dosis", sans-serif;
  transition: 350ms;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`;
