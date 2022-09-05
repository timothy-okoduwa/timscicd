import React from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
const Why = () => {
  return (
    <Div>
      <Holder>
        <Name>why Support Us</Name>
        <Name2>whmdu kdidd jdoijsjdfu jddjkisios jeuhs hysshj</Name2>
      </Holder>
      <Cardholder>
        <Card>
          <Icon>
            <AiFillHeart />
          </Icon>
          <Heading>
            Love
            <br />
            Womens
          </Heading>
          <Talks>jsiuhhjshdhdjhzhjzx jushsxsausius jsjs,sspokklsaopo jzj</Talks>
          <More>Read More</More>
        </Card>
        <Card>
          <Icon>
            <AiFillHeart />
          </Icon>
          <Heading>
            Love
            <br />
            Womens
          </Heading>
          <Talks>jsiuhhjshdhdjhzhjzx jushsxsausius jsjs,sspokklsaopo jzj</Talks>
          <More>Read More</More>
        </Card>
        <Card>
          <Icon>
            <AiFillHeart />
          </Icon>
          <Heading>
            Love
            <br />
            Womens
          </Heading>
          <Talks>jsiuhhjshdhdjhzhjzx jushsxsausius jsjs,sspokklsaopo jzj</Talks>
          <More>Read More</More>
        </Card>
        <Card>
          <Icon>
            <AiFillHeart />
          </Icon>
          <Heading>
            Love
            <br />
            Womens
          </Heading>
          <Talks>jsiuhhjshdhdjhzhjzx jushsxsausius jsjs,sspokklsaopo jzj</Talks>
          <More>Read More</More>
        </Card>
      </Cardholder>
    </Div>
  );
};

export default Why;
const Div = styled.div`
  background-color: lightgray;
  height: 100%;

  @media screen and (max-width: 768px) {
    height: 610px;
  }
`;
const Holder = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  height: 60px;
  flex-direction: column;
  padding: 9px;
`;
const Name = styled.div`
  color: ;
  font-size: 26px;
`;
const Name2 = styled.div`
  color: ;
  font-size: 16px;
  height: 20px;
  text-align: center;
`;
const Cardholder = styled.div`
  display: flex;
  margin: 5px;
  flex-wrap: wrap;
  justify-content: center;
`;
const Card = styled.div`
  margin: 5px;
  height: 250px;
  width: 200px;
  background-color: white;
  border-radius: 5px;
  :hover {
    background-color: #f2f2f2;
  }
`;
const Icon = styled.div`
  font-size: 50px;
  display: flex;
  justify-content: center;
`;
const Heading = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  text-align: center;
  font-weight: 700;
`;
const Talks = styled.div`
  margin: 25px;
  line-height: 20px;
  opacity: 0.5;
  display: flex;
  justify-content: center;
`;
const More = styled.div`
  color: red;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
