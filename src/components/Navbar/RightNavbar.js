import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 10;

  a {
    text-decoration: none;
    color: #36014f;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #0c1c24;
    opacity: 0.9;
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100vh;
    padding-top: 4rem;
    transition: all 0.2s linear;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    a li {
      color: #f1f1f1;
      :hover {
        color: #f1f1f1;
      }
    }
  }

  li {
    padding: 15px 15px;
    font-weight: bold;
    cursor: pointer;
    :hover {
      background-color: rgba(48, 2, 85, 0.1);
      color: #36014f;
    }
  }
`;

const RightNavbar = ({ open, close }) => {
  return (
    <div>
      <Ul open={open}>
        <Link to="/" onClick={close}>
          <li>صفحه اصلی</li>
        </Link>
      </Ul>
    </div>
  );
};

export default RightNavbar;
