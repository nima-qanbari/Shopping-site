import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { setSearchContext } from '../../Context/SearchContextProvider';

const DIV = styled.div`
  position: relative;
  width: ${({ toggle }) => (toggle ? "240px" : "30px")};
  height: 30px;
  background: #fff;
  border-radius: 60px;
  margin-top: 3px;
  transition: 0.5s;
  box-shadow: 0 0 5px #6C757D;
  overflow: hidden;
  margin-bottom: 9px;
  .input {
    position: relative;
    right: 25px;
    display: flex;
    justify-content: center;
    width: 300px;
    height: 30px;
  }

  .input input {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 15px;
    padding: 10px 0;
  }

  .icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    cursor: pointer;
  }
  .icon::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border: 1px solid #6C757D;
    border-radius: 50%;
    transform: translate(-2px, -2px);
  }

  .icon::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 9px;
    background: #6C757D;
    transform: translate(5px, 6px) rotate(315deg);
  }


`;

const SearchInput = () => {
    const [toggle, setToggle ] = useState(false)
   const  setSearchTerm = useContext(setSearchContext)

    const toggleHandler = () => {
        setToggle(!toggle)
    }

  return (
    <DIV className="search" toggle={toggle}>
      <div className="icon" onClick={toggleHandler}></div>
      <div className="input">
        <input
          type="text"
          className="searchText"
          placeholder="جستجو..."
          onChange={(e) => setSearchTerm (e.target.value)}
        />
      </div>
    </DIV>
  )
}

export default SearchInput