import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
@media (max-width: 768px){
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    opacity: .9;
    width: 50%;
    height: 100vh;
    transition: all .2s linear;
    background-color: ${({open}) => open ? "#262626" : ""} ;
}

`
const Backdrop = ({open , backdrop}) => {

 
  return (
  <div>
    {open &&  <Div open={open} onClick={backdrop} ></Div>}
  </div>
  );
};

export default Backdrop;
