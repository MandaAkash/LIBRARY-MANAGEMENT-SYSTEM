import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'

import Card from './Card'
import {useNavigate} from "react-router-dom"
import Userhome from './Userhome'
import UseNav from './UseNav'
function Header({image,head,para}) {
  return (
    
    <div>
      <UseNav/>
      <ImgSlider/>
      <Userhome/>
    </div>
  )
}


export default Header
