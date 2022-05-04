import { ThumbDownRounded } from "@material-ui/icons"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { sliderItems } from "../data"
import { useState } from "react"
import { mobile } from "../responsive"
import React from "react"
const Container=styled.div`


    background-color: #ffffff;
    width: 100%;
    height: 85vh;
    display: flex;
    overflow: hidden;
    position: relative;
    ${mobile({display: "none" })}
    

`
const Arrow=styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom:0;
    left:${props=> props.direction == "left" && "10px"};
    right:${props=> props.direction == "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper=styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`

const Slide=styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
    /* background-color: #${props=>props.bg}; */
    background: linear-gradient(-45deg, #d6d6d6,#${props=>props.bg} , #adb5bd, #001233 );
	background-size: 400% 400%;
	animation: gradient 6s ease infinite;
    border-radius: 20px;
    margin-right: 0.3%;
    margin-left: 0.2%;
    

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

`
const ImgContainer=styled.div`
    height: 100%;
    flex: 1;
`
const InfoContainer=styled.div`
    flex: 1;
    
`

const Image=styled.img`
    /* height: 80%; */
    height: 600px;
    width: 470px;
    /* margin-bottom: 40px; */
    margin-left: 70px;
`

const Title=styled.h1`
    font-size: 70px;
`
const Desc=styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button=styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);


  const handleClick = (direction) => {
      if(direction==="left"){
          setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
      }else{
          setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
      }
  };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
            
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(

            
            <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOP NOW</Button>

                </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>

        </Arrow>
    </Container>
  )
}

export default Slider


