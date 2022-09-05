import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { MdLocalPhone } from 'react-icons/md';
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineDribbble,
  AiOutlineMail,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Container>
      <SVG>
        <svg
          id="visual"
          viewBox="0 0 900 600"
          width="800"
          height="600"
          version="1.1"
        >
          <path
            d="M0 429L450 200L900 340L900 601L450 601L0 601Z"
            fill="#325288"
            stroke-linecap="square"
            stroke-linejoin="bevel"
          />
        </svg>
      </SVG>
      <Wrapper>
        <Left>
          <Form>
            <FormHolder>
              <TopForm>
                <InputHolder>
                  <Label>Name :</Label>
                  <Input type="text" placeholder="put in your name" />
                </InputHolder>
                <InputHolder>
                  <Label>Email :</Label>
                  <Input type="email" placeholder="put in your email" />
                </InputHolder>
              </TopForm>
              <MessageHolder>
                {' '}
                <Label>Message</Label>
                <Message />
              </MessageHolder>
              <Button>Send</Button>
            </FormHolder>
          </Form>
        </Left>
        <Right>
          <Intro>Reach Out</Intro>
          <Text>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptuas. At vero eo et accusam et justo duo
          </Text>
          <Cont>
            <Hold>
              <AiOutlineMail />
              <Div>
                <H1>Email Address</H1>
                <span>timmyleeokoduwa7@gmail.com</span>
              </Div>
            </Hold>
            <Hold>
              <MdLocalPhone />
              <Div>
                <H1>Phone Number</H1>
                <span>+234 904 5339 820</span>
              </Div>
            </Hold>
          </Cont>
          <Icons>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <AiFillInstagram />
            </a>
            <a href="#">
              <AiOutlineDribbble />
            </a>
            <a href="#">
              <AiFillLinkedin />
            </a>
          </Icons>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  position: relative;
  padding-top: 236px;
`;

const SVG = styled.div`
  position: absolute;
  top: -100px;
  left: -60px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: brown;
  @media screen and (max-width: 768px) {
  }
`;

const Left = styled.div`
  width: 55%;
  height: 100%;
  background: #325288;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.div`
  width: 100%;
  height: 100%;
  background: lavender;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormHolder = styled.div`
  width: 80%;
  height: 80%;
  /* background: green; */
`;

const TopForm = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputHolder = styled.div`
  color: rgba(252, 252, 252, 0.9);
`;

const Input = styled.input`
  width: 270px;
  height: 40px;
  outline: 1px solid rgba(252, 252, 252, 0.2);
  border: none;
  padding-left: 10px;
  font-family: 'Dosis', 'sans-serif';
  font-size: 18px;
  background: transparent;
  color: rgba(252, 252, 252, 0.9);
  transition: 250ms;
  margin-top: 10px;
  :focus {
    outline: 2px solid rgba(252, 252, 252, 0.4);
  }
`;

const MessageHolder = styled.div`
  margin-top: 30px;
  color: rgba(252, 252, 252, 0.9);
`;

const Message = styled.textarea`
  width: 96.5%;
  height: 35px;
  min-height: 200px;
  outline: 1px solid rgba(252, 252, 252, 0.2);
  border: none;
  padding: 10px;
  font-family: 'Dosis', 'sans-serif';
  font-size: 18px;
  background: transparent;
  color: rgba(252, 252, 252, 0.9);
  transition: 250ms;
  margin-top: 10px;
  :focus {
    outline: 2px solid rgba(252, 252, 252, 0.4);
  }
`;

const Button = styled.div`
  /* background: #e9204f; */
  color: white;
  width: 150px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
  transition: 350ms;
  border: 1px solid white;

  :hover {
    background: #e9204f;
    color: white;
  }
`;

const Label = styled.div``;

const Right = styled.div`
  width: 45%;
  display: flex;
  height: 100%;
  /* background: #325288; */
  background-color: green;
  flex-direction: column;
  color: white;
  justify-content: center;
  z-index: 1;
`;

const Intro = styled.div`
  color: #fdbd05;
  margin-top: 90px;
  font-size: 20px;
`;

const Text = styled.div`
  margin-top: 30px;
  font-size: 20px;
  line-height: 1.7;
  margin-bottom: 30px;
  text-align: justify;
  max-width: 90%;

  @media screen and (max-width: 1024px) {
    text-align: unset;
  }
`;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
`;

const Hold = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  margin-bottom: 20px;
`;

const Icons = styled.div`
  margin-top: 20px;
  display: flex;
  a {
    margin-right: 20px;
    font-size: 20px;
    border: 1px solid white;
    border-radius: 100px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    transition: 350ms;

    :hover {
      background: #e9204f;
      color: white;
    }
  }
`;

const Div = styled.div`
  font-size: 16px;
  margin-left: 10px;
  span {
    font-style: italic;
  }
`;

const H1 = styled.div`
  margin-bottom: 3px;
  font-weight: 500;
`;

// const Container = styled.div``

// const Container = styled.div``
