import React from "react";
import styled from "styled-components";
import a from "./image/sky.jpg";
const Contact = () => {
  return (
    <Div>
      <Contt>
        <Con>Contact Us</Con>
        <Fiv>hshshsj hshsusujseioeoeek hde hdhdkd</Fiv>
        <Aiv>No 4 Barrister Ahmed Musa street Orige Lagos</Aiv>
        <Niv>7372828282829,3672728282929</Niv>
      </Contt>
      <Container>
        <WriteUp>
          <Join>Join Us</Join>
          <Tiv>Empower</Tiv>
          <Tiv>our Girls and Women</Tiv>
          <Button>Donate</Button>
        </WriteUp>
        <Forimage>
          <Photo src={a} />
        </Forimage>
      </Container>
    </Div>
  );
};

export default Contact;
const Div = styled.div`
  /* display: flex;
  justify-content: center; */
  height: 100%;
  /* background-color: lightblue; */
`;
const Contt = styled.div`
  padding: 10px;
  line-height: 30px;
`;
const Con = styled.div`
  color: pink;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;
const Fiv = styled.div`
  display: flex;
  justify-content: center;

  font-size: 12px;
`;
const Aiv = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
`;
const Niv = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
`;
const Container = styled.div`
  height: 300px;
  background-color: blue;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;
const Forimage = styled.div`
  height: 300px;
  background-color: pink;
  width: 50%;
`;
const Photo = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;
`;
const WriteUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 300px;
  width: 50%;
  line-height: 29px;
`;
const Join = styled.div`
  color: white;
  font-size: 25px;
  font-weight: bold;
`;
const Button = styled.div`
  background-color: red;
  height: 30px;
  width: 80px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;
const Tiv = styled.div`
  color: white;
`;
