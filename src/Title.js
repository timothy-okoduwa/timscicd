import React from "react";
import styled from "styled-components";

const Title = ({ number, title, clr }) => {
  return (
    <Container>
      <span>{number}</span>
      <Text clr={clr}>{title}</Text>
    </Container>
  );
};

export default Title;

const Container = styled.div`
  display: flex;
  font-family: "Dosis", sans-serif;
  align-items: center;
  span {
    font-size: 100px;
    font-weight: bold;
    color: #e9204f;
    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
  }
`;

const Text = styled.div`
  font-size: 36px;
  font-weight: bold;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  border-color: ${({ clr }) => (clr ? "white" : "black")};
  padding: 2px;
  margin-left: 7px;
  color: ${({ clr }) => (clr ? "white" : "black")};
  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
`;
