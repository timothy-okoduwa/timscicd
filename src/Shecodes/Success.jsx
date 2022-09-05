import React from "react";
import styled from "styled-components";
const Success = () => {
  return (
    <Div>
      <First>our Community is to help stop Sexual Violence</First>
      <First2>Success Stories of Abuse Stopped</First2>
      <Logg>
        <Two>
          <REsult>
            <Title>kddididi</Title>
            <Num>49,8,729</Num>
          </REsult>
          <REsult>
            <Title>kddididi</Title>
            <Num>49,8,729</Num>
          </REsult>
          <REsult>
            <Title>kddididi</Title>
            <Num>49,8,729</Num>
          </REsult>
          <REsult>
            <Title>kddididi</Title>
            <Num>49,8,729</Num>
          </REsult>
          <REsult>
            <Title>kddididi</Title>
            <Num>49,8,729</Num>
          </REsult>
          <REsult>
            <Title>kddididi</Title>
            <Num>49,8,729</Num>
          </REsult>
        </Two>
      </Logg>
    </Div>
  );
};

export default Success;
const Div = styled.div`
  height: 200px;
  background-color: pink;
  @media screen and (max-width: 768px) {
    height: 260px;
  }
`;
const First = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
`;
const First2 = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
  font-size: 34px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
const Logg = styled.div`
  height: 120px;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Two = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px;
  height: 120px;
`;
const REsult = styled.div`
  margin: 20px;
`;
const Title = styled.div`
  font-size: 17px;
  font-weight: 400;
`;
const Num = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
