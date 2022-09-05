import React from "react";
import styled from 'styled-components'
import { Link } from "react-scroll";
const Slider = ({open,toggle}) => {
// const text =()=>{
//   const we = document.getElementById('hello')
//   if(we.styled.display === 'none') {
//     we.styled.display ='block'
//   } else{
//     we.styled.display ='none'
//   }
// }
  return <Div open={open }>

<Navholders  >

<Span>
<Links to="Home" spy={true} offset={-70} smooth={true} duration={500}>Home</Links>
</Span>

<Span>
<Links to="Services" spy={true} offset={-70} smooth={true} duration={500}>Services</Links>
</Span>
<Span>
<Links to="About" spy={true} offset={-70} smooth={true} duration={500}>About</Links>
</Span>

<Span>
<Links to="Portfolio" spy={true} offset={-70} smooth={true} duration={500}>Portfolio</Links>
</Span>
<Span>
<Links to="Testimomny" spy={true} offset={-70} smooth={true} duration={500}>Testimonies</Links>
</Span>

<Span>
<Links to="Downtown" spy={true} offset={-70} smooth={true} duration={500}>Contact</Links>
</Span>

</Navholders>
  </Div>;
};

export default Slider;
const Div = styled.div`
background-color: #325288;
height: 450px;
width: 100vw;
position: fixed;
z-index: 1;
border-radius: 0 0 5px 5px ;
@media screen and (min-width:768px) {
  display: none;
}
transition: 400ms;
/* transition-duration: 400ms; */
opacity: ${({open})=>(open?'100':'0')};
display: ${({open})=>(open?'block':'none')} ;
/* transition: ${({open})=>(open?'400ms':'400ms')} ; */


`
const Navholders = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px;
span{
  padding: 26px;
  color: whitesmoke;
  font-weight: bold;
  font-size: 16px;
  font-family: inter, sans-serif;
  text-decoration: none;
  cursor: pointer;
  :hover{
    // font-style: italic;
  }
}
`
// const Cancel = styled.div`
// display: flex;
// justify-content: flex-end;
// margin-right: 30px;
// margin-top: 20px;
// cursor: pointer;
// `
const Links = styled(Link)`
  font-weight: bold;
  font-size: 16px;
  font-family: inter, sans-serif;
  /* margin-left: 10px; */
  text-decoration: none;
  color:white;
  :hover{
    color:white;
    /* font-style: italic; */
  }
  cursor: pointer;
`;
const Span = styled.span`
color: white;

`