import React, { useState } from "react";
import styled from "styled-components";
import Backdrop from "./Backdrop";
import RightNavbar from "./RightNavbar";
const Div = styled.div`
  width: 2rem;
  height: 1.7rem;
  position: fixed;
  top: 12px;
  right: 20px;
  z-index: 20;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#f1f1f1" : "#36014f")};
    border-radius: 10px;
    transform-origin: 3px;
    transition: all 0.2s linear;
    :nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
const Burger = () => {
  const [open, setOpen] = useState(false);
  
  const clickHandler = () => {
    setOpen(!open);
  };
  const closeHandler = () => {
    setOpen(false)
  }
  
  return (
    <div>
      <Div open={open} onClick={clickHandler}>
        <div></div>
        <div></div>
        <div></div>
      </Div>
      <RightNavbar open={open} close={closeHandler}/>
      <Backdrop open={open} backdrop={clickHandler}/>
    </div>
  );
};

export default Burger;
