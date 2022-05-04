import { ThumbDownRounded } from "@material-ui/icons"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { sliderItems } from "../data"
import { useState } from "react"
import { mobile } from "../responsive"
import React from "react"
const Container=styled.div`

    background-color: #edf2fb;
    width: 100%;
    height: 75vh;
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
    width: 25vw;
    height: 50vh;
    display: flex;
    align-items: center;
    /* background-color: #${props=>props.bg}; */
    background: linear-gradient(-45deg, #d6d6d6,#${props=>props.bg} , #adb5bd, #001233 );
	background-size: 400% 400%;
	animation: gradient 8s ease infinite;
    border-radius: 20px;
    /* margin-left: 10px;
    margin-right: 50px; */





    /* margin-right: 1%;
    margin-left: 2.45%;
    margin-top: 95px; */

    margin-right: 1%;
    margin-left: 0.7%;
    margin-top: 85px;



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

    @mixin backlight($x, $y, $spread, $size, $colorA, $colorB, $duration) {
    &:after {
        position: absolute;
        content: "";
        top: $y;
        left: $x;
        right: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        transform: scale($size);
        -webkit-filter: blur($spread);
        -moz-filter: blur($spread);
        -ms-filter: blur($spread);
        filter: blur($spread);
        background: linear-gradient(270deg, $colorA, $colorB);
        background-size: 200% 200%;
        animation: animateGlow $duration ease infinite;
        
        @keyframes animateGlow {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
        }
    }
    }

    position: relative;
    line-height: 30vw;
    animation: textColor 10s ease infinite;
    @include backlight(0, 5vw, 5vw, 0.75, #0fffc1, red, 10s);
        

`
// const InfoContainer=styled.div`
//     flex: 1;
    
// `




const Image=styled.img`
    /* height: 80%; */
    /* height: 600px;
    width: 470px; */
    /* margin-bottom: 40px; */
    /* margin-left: 5px; */
    height: 350px;
    width: 270px;
    margin-left: 15px;
    margin-bottom: 40px;
    
`

// const Title=styled.h1`
//     font-size: 70px;
// `
// const Desc=styled.p`
//     margin: 50px 0px;
//     font-size: 20px;
//     font-weight: 500;
//     letter-spacing: 3px;
// `
// const Button=styled.button`
//     padding: 10px;
//     font-size: 20px;
//     background-color: transparent;
//     cursor: pointer;
// `


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);


  const handleClick = (direction) => {
      if(direction==="left"){
          setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      }else{
          setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
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
                {/* <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOP NOW</Button>

                </InfoContainer> */}
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


