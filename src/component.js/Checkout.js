import React from 'react'
import { useStateValue } from '../StateProvider'
import styled from 'styled-components';
import UserNav from './UseNav'
import { useNavigate } from 'react-router-dom';
function Checkout() {
  const navigate=useNavigate();
    const [{basket}]=useStateValue();
  return (
    <Container>
      <UserNav/>
      <Main>
         <Cart>
           <h2>Your CheckList</h2>
           {
            basket?.map((product)=>(
            <Product>
              <Image>
                <img src={product.image} style={{width:"300px",height:"200px"}}  alt=''/>
              </Image>
              <Description>
                <h2>{product.head}</h2>
                <p>{product.para}</p>
                <button className='btn btn-info' onClick={()=>navigate("/aboutus")}>Know More</button>
                <Btn>
                <button>Remove</button>
                </Btn>
              </Description>
             </Product>))
           }
         </Cart>
      </Main>
    </Container>
  )
}
const Container=styled.div`
width:100%;
background-color:rgb(234,234,237);
margin:auto;
height:fit-content;
border:1px solid red;
position:relative;
`
const Main=styled.div`
display:flex;
padding:15px;
`
const Cart=styled.div`
flex:1;
padding:15px;
background-color:#fff;
h2{
  font-weight:500;
  border-bottom:1px solid lightgray;
  padding-bottom:15px;
}
`
const Product=styled.div`
display:flex;
align-items:center;
`
const Image=styled.div``
const Description=styled.div`
margin-left:100px;
`
const Btn=styled.div`
margin-top:10px;
`
export default Checkout