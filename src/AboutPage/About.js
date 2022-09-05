import React from "react";
import styled from "styled-components";
import Title from "../Title";

const About = () => {
  return (
    <Container id='About'>
      <Title number="03" title="About" />
      <Wrapper>
        <Right>
          <H1>About me</H1>
          <H2>
            I am Dynamic Developer, Project Manager and Creative Designer{" "}
          </H2>
          <Text>
            <P>
              Since beginning my journey as a SoftWare developer(Fullstack)
              nearly 3 years now(Through CodeLab) , I've done alot of pocket
              projects for agencies and individuals,trained a lot of
              Newbies(over 30 people) in Tech, and collaborated with talented
              people to create digital products for both business and consumer
              use,i'm also good at debugging . I'm quietly confident, naturally
              curious, and perpetually working on improving my skill set one
              development problem at a time.
            </P>
            <P>
              And i've also partnered with major companies in tech to build
              solution that are still in use till date.
            </P>
          </Text>
          <Sign>Timothy Okoduwa</Sign>
        </Right>
        <Left src="/images/about.jpg" />
      </Wrapper>
      <Rest>
        {/* <Thetwo> */}
        <Skill>
          <Top>
            <H1>My Skills</H1>
          </Top>
          <SkilHolder>
            <SkillLevel>
              <TopInfo>
                <span>FrontEnd Development</span>
                <span>95%</span>
              </TopInfo>
              <Level1 />
            </SkillLevel>
            <SkillBar />
          </SkilHolder>
          <SkilHolder>
            <SkillLevel>
              <TopInfo>
                <span>Design</span>
                <span>80%</span>
              </TopInfo>
              <Level2 />
            </SkillLevel>
            <SkillBar />
          </SkilHolder>
          <SkilHolder>
            <SkillLevel>
              <TopInfo>
                <span>ui/ux</span>
                <span>85%</span>
              </TopInfo>
              <Level3 />
            </SkillLevel>
            <SkillBar />
          </SkilHolder>
          <SkilHolder>
            <SkillLevel>
              <TopInfo>
                <span>BackEnd Development</span>
                <span>50%</span>
              </TopInfo>
              <Level4 />
            </SkillLevel>
            <SkillBar />
          </SkilHolder>
        </Skill>
       
        <BoxHolder>
     
          <BoxInner>
            <NumHolder1>
              <span>10</span>
              <p>Happy Client</p>
            </NumHolder1>
            <NumHolder2>
              <span>3+</span>
              <p>Years of Experience</p>
            </NumHolder2>
            <NumHolder3>
              <span>30+</span>
              <p>People Taught</p>
            </NumHolder3>
            <NumHolder4>
              <span>10+</span>
              <p>Project Complete</p>
            </NumHolder4>
          </BoxInner>
        </BoxHolder>
        {/* </Thetwo> */}
      </Rest>
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 100%;
  height: auto;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    margin-top: 520px;
    width: 80%;
    justify-content: center;
    margin-left: 35px;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

const Left = styled.img`
  margin-right: 40px;
  height: 100vh;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    height: 300px;
    display: flex;
    justify-content: center;
    margin-left: 50px;
  }
`;

const Right = styled.div`
  width: 600px;
  height: 100%;
  margin-right: -90px;
  @media screen and (max-width: 768px) {
    width: 300px;
    margin: 30px;
  }
`;

const H1 = styled.div`
  font-family: "Dosis", "sans-serif";
  font-weight: 700;
  font-size: 28px;
`;

const H2 = styled.div`
  font-family: "Dosis", "sans-serif";
  font-weight: 700;
  font-size: 20px;
  margin-top: 20px;
  opacity: 0.7;
  max-width: 450px;
  line-height: 1.6;
`;

const Text = styled.div`
  margin-top: 30px;
`;

const P = styled.p`
  max-width: 500px;
  font-size: 18px;
  margin-top: 25px;
  opacity: 0.5;
  line-height: 1.6;
`;

const Sign = styled.div`
  font-family: "Comforter", cursive;
  font-size: 30px;
  margin-top: 50px;
`;

const Rest = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  flex-wrap: wrap;
`;

const Skill = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SkilHolder = styled.div`
  width: 85%;
  height: 40px;
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-top: 20px;
  margin-bottom: 10px;
  @media screen and (max-width: 425px) {
    width: 85%;
  }
`;

const SkillLevel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
`;

const TopInfo = styled.div`
  width: 100%;
  display: flex;
  font-family: "Dosis", "sans-serif";
  align-items: center;
  font-weight: 600;
  margin-bottom: 10px;
  justify-content: space-between;
  span {
    font-size: 18px;
  }
`;

const Level1 = styled.div`
  background: #e9204f;
  width: 95%;
  height: 4px;
`;
const Level2 = styled.div`
  background: #e9204f;
  width: 90%;
  height: 4px;
`;
const Level3 = styled.div`
  background: #e9204f;
  width: 85%;
  height: 4px;
`;

const Level4 = styled.div`
  background: #e9204f;
  width: 50%;
  height: 4px;
`;

const SkillBar = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(0, 0, 0, 0.1);
`;

const Top = styled.div`
  width: 85%;
  margin-bottom: 30px;
`;

const BoxHolder = styled.div`
  width: 150%;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    /* width: 280px; */
  }
`;

const BoxInner = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
`;

const NumHolder1 = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 49%;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  span {
    font-weight: 800;
    font-size: 56px;
    font-family: "Dosis", "sans-serif";
    margin-bottom: -10px;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    color: #e9204f;
  }
`;

const NumHolder2 = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 49%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  span {
    font-weight: 800;
    font-size: 56px;
    font-family: "Dosis", "sans-serif";
    margin-bottom: -10px;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    color: #e9204f;
  }
`;

const NumHolder3 = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 49%;
  span {
    font-weight: 800;
    font-size: 56px;
    font-family: "Dosis", "sans-serif";
    margin-bottom: -10px;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    color: #e9204f;
  }
`;

const NumHolder4 = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 49%;

  border-left: 1px solid rgba(0, 0, 0, 0.2);
  span {
    font-weight: 800;
    font-size: 56px;
    font-family: "Dosis", "sans-serif";
    margin-bottom: -10px;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    color: #e9204f;
  }
`;

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``
// const Thetwo = styled.div`
//   padding-left: 40px;
// `;
