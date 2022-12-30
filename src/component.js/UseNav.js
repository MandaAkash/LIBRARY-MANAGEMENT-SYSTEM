import React from 'react'
import ImgSlider from './ImgSlider'
import styled from 'styled-components'
import {useNavigate} from "react-router-dom"
import {useStateValue} from '../StateProvider'
function UseNav() {
    const navigate=useNavigate();
    const [{basket},dispatch]=useStateValue();
  return (
    <div>
    <Nav>
        <Logo src="./nasaimg.png"/>
        <NavMenu>
           <a>
            <img src='/images/home-icon.svg'/>
            <span>HOME</span>
           </a>
           <a>
           <img src='/images/search-icon.svg'/>
           <span>SEARCH</span>
           </a>
           <a>
           <img src='/images/watchlist-icon.svg'/>
           <span>ABOUTUS</span>
           </a>
           <a>
           <img src='/images/original-icon.svg'/>
           <span>BLOGS</span>
           </a>
           <a>
           <img src='/images/movie-icon.svg'/>
           <span onClick={()=>navigate("/checkout")}>CHECKLIST</span>
           <p>{basket.length}</p>
           </a>
        </NavMenu>
        <UserImg src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
      </Nav>
      </div>
  )
}
const Nav=styled.div`
height:70px;
background-color:#090b13;
display:flex;
align-items:center;
padding:0 36px;
overflow-x:hidden;
`
const Logo=styled.img`
 width:130px;
 height:80px;
`
const NavMenu=styled.div`
display:flex;
flex:1;
margin-left:25px;
align-items:center;
a{
  display:flex;
  align-items:center;
  padding :0 12px;
  cursor:pointer;
  img{
    height:20px;
  }
  span{
    font-size:13px;
    letter-spacing:1.42px;
    position:relative;
    color:white;
    &:after{
      content:"";
      height:2px;
      background:white;
      position:absolute;
      left:0;
      right:0;
      bottom:-6px;
      opacity:0;
      transform-origin:left center;
      transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
      transform:scaleX(0);
    }
  }
  &:hover{
    span:after{
      transform:scaleX(1);
      opacity:1;
    }
  }
  p{
    color:blue;
    padding-left:5px;
    padding-top:0px;
  }
}
`
const UserImg=styled.img`
width:48px;
height:48px;
border-radius:50%;
cursor:pointer;
`

export default UseNav