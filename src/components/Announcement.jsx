import styled from "styled-components"
import React from "react";
const Container=styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;


    background: linear-gradient(-45deg, #2c7da0,#ef233c , #adb5bd, #014f86 );
    background-size: 400% 400%;
    animation: gradient 0.5s ease infinite;
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
`;

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over 200/-
    </Container>
  )
};

export default Announcement;