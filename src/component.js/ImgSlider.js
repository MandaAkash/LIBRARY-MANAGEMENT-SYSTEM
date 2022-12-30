import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
function ImgSlider() {
    let settings={
        dots:true,
        infinite:true,
        speed:300,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true
    };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src='https://st2.depositphotos.com/1000423/5408/i/600/depositphotos_54085277-stock-photo-destruction-concept.jpg' alt=''/>
      </Wrap>
      <Wrap>
        <img src='https://t3.ftcdn.net/jpg/05/26/29/16/240_F_526291640_YlUdaATt7BfPwBMqnQ1MWK9PHmWA2ZF1.jpg' alt=''/>
      </Wrap>
      <Wrap>
        <img src='https://t4.ftcdn.net/jpg/03/99/50/79/240_F_399507907_ihIVdrantaY6B6lJ6j0xV5c85eel9Rli.jpg' alt=''/>
      </Wrap>
      <Wrap>
        <img src='https://t4.ftcdn.net/jpg/01/45/02/67/240_F_145026793_SqNcilXyQ1L7S0Fzsab2IKviVAIRhQ40.jpg' alt=''/>
      </Wrap>
      <Wrap>
        <img src='https://t3.ftcdn.net/jpg/02/95/32/60/240_F_295326025_iGaR2nAK825YByWDhKeWHj2RCEr4TAD1.jpg' alt=''/>
      </Wrap>
      <Wrap>
        <img src='https://t3.ftcdn.net/jpg/01/80/65/68/240_F_180656803_23bAMoCV2q4onVIh4V1RYVyyDOuP6oqz.jpg' alt=''/>
      </Wrap>
    </Carousel>
  )
}
const Carousel=styled(Slider)`
li.slick_active button:before{
  color:white;
}
ul li button{
  &:before{
    font-size:10px;
    color:rgb(150,150,171);
  }
}
.slick-list{
  overflow:visible;
}
`
const Wrap=styled.div`
cursor:pointer;
img{
    border-radius:4px;
    width:2000px;
    height:400px;
    transition-duration:300ms;
    &:hover{
      border:4px solid rgba(249,249,249,0.8);
    }
}
`
export default ImgSlider