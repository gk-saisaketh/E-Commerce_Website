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
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        


`;
const Wrapper=styled.div`
    padding: 20px;
    width: 25%;
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
    flex-direction: column;


`;

const Input=styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;

    padding: 10px;
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
    background-size: cover;
    margin-bottom: 10px;



`;
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login=()=>{
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    
                    <Input placeholder="username" />
                    
                    <Input placeholder="password" />
                    
                    
                    <Button>LOGIN</Button>
                    <Link>DO NOT REMEMBER THE PASSWORD ?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
