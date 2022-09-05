import React from "react";

import Header from "./Header";
import Slider from "./Slider";

const Thetwo = () => {
  const [open, setOpen]= React.useState(false)
  const toggle = ()=>{
    setOpen(!open)  
    
  }

  return <div>
<Header toggle={toggle}/>
<Slider toggle={toggle} open={open}  />
  </div>;
};

export default Thetwo;
