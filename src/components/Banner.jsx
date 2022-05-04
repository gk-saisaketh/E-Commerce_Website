import styled from "styled-components";
import React from "react";
const Container=styled.div`
    /* width: 100%; */
    /* height: 100vh; */
    /* display: flex; */
    /* overflow: hidden;
    position: relative; */
    position: relative;
    flex: 3;
    justify-content: center;

`

const Image=styled.img`
    width: 96.5%;
    height: 100%;
    object-fit: cover;
    margin: 25px;
    border-radius: 10px;
    
`;
const Banner=() => {
  return (
    <Container>
        <Image src="https://prod-img.thesouledstore.com/public/theSoul/uploads/users/artists/20211122104047-cp-1.jpg?format=webp&w=1500&dpr=1.3" />
    </Container>
  )
}

export default Banner



