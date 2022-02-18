import React, { useContext } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { Link } from "react-router-dom";

//context
import { cartContext } from "../../Context/CartContextProvider";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  width: 100%;
  padding: 0 20px;
  background-color: #f2f2f2;
  z-index: 30;
  position: sticky;
  margin-bottom: 30px;
  top: 0;
  box-shadow: 0 3px 7px rgb(180, 180, 170, .5);
  .cart, .user{
    font-size: 24px;
    color:#36014f;
    position: relative;
  }
  .user{
    margin: 0 18px;
  }
  .badge{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -10px;
    bottom: -6px;
    width: 15px ;
    height: 16px;
    background-color: red;
    border-radius:50%;
    font-size: 10px;
    color: #f1f1f1;
  }


`;
const Navbar = () => {
  const { state } = useContext(cartContext)
  return (
    <Nav>
      <Burger />
      <div>
      <Link to="/signup">
        <i className="fa fa-user-lock user"></i>
        </Link>

        <Link to="/cart" >
          <i className="fa fa-shopping-bag cart">
            <span className="badge">
              {state.itemsCounter}
            </span>
          </i>
        </Link>
      </div>
     
    </Nav>
  );
};

export default Navbar;
