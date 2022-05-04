import styled from "styled-components"
import { mobile } from "../responsive";
import React from "react";
const Container=styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5) 
        ),
        url("https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/12/Guardians-of-the-Galaxy-Game.jpg?q=50&fit=contain&w=1500&h=&dpr=1.5" ) center no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;


`;
const Wrapper=styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    border-radius: 5px;
    ${mobile({width: "75%" })}
    


`;
const Title=styled.h1`
    font-size: 24px;
    font-weight: 300 ;

`;
const Form=styled.form`
    display: flex;
    flex-wrap: wrap;

`;

const Input=styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement=styled.span`
    font-size: 12px;
    margin: 20px 0px ;

`;
const Button=styled.button`
    width: 40%;
    border: none;
    /* margin-top: 10px;
    margin-left: 52px; */

    /* margin: 10px 5px 0px 20px; */
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;

`;


const Register=()=>{
    return(
        <Container>
            <Wrapper>
                <Title>Create an Account</Title>
                <Form>
                    <Input placeholder="first name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>By creating an account, I consent to the processing of my personal
            data in accordance with the  <b> PRIVACY POLICY</b></Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
