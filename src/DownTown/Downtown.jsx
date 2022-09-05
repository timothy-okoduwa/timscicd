import React,{useState} from "react";
import styled from 'styled-components'
import Modal from "react-bootstrap/Modal";
// import ModalBody from "react-bootstrap/ModalBody";
// import ModalHeader from "react-bootstrap/ModalHeader";
// import ModalFooter from "react-bootstrap/ModalFooter";
// import ModalTitle from "react-bootstrap/ModalTitle";
import confirm from './checkmark.gif'
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { AiFillInstagram, AiFillLinkedin,AiOutlineDribbble, AiOutlineMail,} from "react-icons/ai";
import emailjs from 'emailjs-com'




const Downtown = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8vyq8ok', 'template_915la2v', e.target, 'opXca3zh-s4K59SO1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  
  const hideModal = () => {
    setIsOpen(false);
  };
  return <Div id='Downtown'>

  <Holder>
<Mail> 
<Form  onSubmit={sendEmail} >
<FormHolder>
  <TopForm>
    <InputHolder>
      <Label>Name :</Label>
      <Input type="text"  placeholder='put in your name' name='name' />
    </InputHolder>
    <InputHolder>
      <Label>Email :</Label>
      <Input type="email" placeholder='put in your email' name='from_name' />
    </InputHolder>
  </TopForm> 
  <MessageHolder>
    {" "}
    <Label>Message</Label>
    <Message name='message' placeholder="enter your message"/>
  </MessageHolder>


  <Button type="submit" value="Send message" onClick={showModal}>Send</Button>
  <Modal show={isOpen} onHide={hideModal}>
    <Modal.Header>
      <Modal.Title style={{'display':'flex', 'height':'100%','justifyContent':'center'}}>Thank You 😃</Modal.Title>
    </Modal.Header>
    <div style={{'display':'flex', 'height':'100%','justifyContent':'center'}}> 
    <Hmg src={confirm} />
    </div>

    <Modal.Body style={{'display':'flex', 'height':'100%','justifyContent':'center'}} >Your Message is on its way to Timothy 👨‍💻</Modal.Body>
    
    <Modal.Footer>
      <Piv onClick={hideModal} >Cancel</Piv>
     
    </Modal.Footer>
  </Modal>


</FormHolder>
</Form>
</Mail>
<Contact>
<Text>
You can also reach me via my phone number or my social media handles.

reviews, comments, and recommendations are also welcome. My mail is always 

open for business discussions and deals 😉.
</Text>
<Infoholder>
<Foremail>
   <H1>
   Email :
   </H1>
   <Span>Timmyleeokoduwa7@gmail.com</Span>
   </Foremail>
<Forphone>
   <H1>
  Phone :
   </H1>
   <Span>+234 904 5339 820</Span>
   </Forphone>
</Infoholder>
<Icons>
<a href="https://web.facebook.com/timmy.lee.37669528">
  <FaFacebook />
</a>
<a href="https://github.com/timothy-okoduwa">
  <FaGithub />
</a>


<a href="https://www.linkedin.com/in/timothy-okoduwa-3845ab215/">
  <AiFillLinkedin />
</a>
</Icons>
  </Contact> 
  </Holder>
  </Div>;
};

export default Downtown;


const Piv = styled.div`

display: flex;
justify-content: center;
cursor:pointer;
`
const Div = styled.div`
height:140vh;
background-color: #325288;
@media screen and (max-width:768px){

/* height: 200vh; */
}
`
const Holder = styled.div`
background-color: #325288;
/* height: 100vh; */

display: flex;
flex-direction: row;
justify-content: space-around;
@media screen and (max-width:768px){
  display:flex;
  flex-direction:column;
/* height: 300vh; */
margin-bottom: 40px;
}

`
const Mail = styled.div`
/* background-color: pink; */
width: 100%;

@media screen and (max-width:768px){
 margin-bottom: 890px;
}
`
const Contact = styled.div`
/* background-color: green; */
width: 100%;
height: 100vh;
@media screen and (max-width:768px){
  margin-top:
-900px;
}
`



const Form = styled.form`
  width: 100%;
  height: 100%;
  /* background: lavender; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width:768px){
    margin-top: 190px;
}

`;

const FormHolder = styled.div`
  width: 80%;
  height: 80%;
  /* background: green; */
`;

const TopForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 80px;
  flex-direction: column;
`;

const InputHolder = styled.div`
  color: rgba(252, 252, 252, 0.9);
  /* margin-right: 30px; */
`;

const Input = styled.input`
  width: 180px;
  height: 40px;
  @media screen and (min-width:768px) {
    width: 290px;
  }
  outline: 1px solid rgba(252, 252, 252, 0.2);
  border: none;
  padding-left: 5px;
  font-family: "Dosis", "sans-serif";
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
  resize: none;
  font-family: "Dosis", "sans-serif";
  font-size: 18px;
  background: transparent;
  color: rgba(252, 252, 252, 0.9);
  transition: 250ms;
  margin-top: 10px;
  :focus {
    outline: 2px solid rgba(252, 252, 252, 0.4);
  }
`;

const Button = styled.button`
  background: #325288;
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

const Text = styled.div`
font-size: 20px;
line-height: 1.7;
padding: 40px;
margin:10px;
color:whitesmoke;
`
const Infoholder = styled.div`
display:flex;
align-items:center;
margin-top:40px;
flex-direction: column;

`
const Foremail = styled.div`


`
const H1 = styled.div`
font-size:25px ;
font-weight: bold;

`
const Span = styled.div`
font-size:20px;
margin-top:20px;
font-style: italic;
color: whitesmoke;
`
const Forphone = styled.div`

`
const Icons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
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


const Hmg = styled.img`
height:250px;

`



