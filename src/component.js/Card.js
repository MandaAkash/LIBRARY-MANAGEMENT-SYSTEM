import React from 'react'
import { useStateValue } from '../StateProvider'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
function Card({image,head,para}) {
  const [{basket},dispatch]=useStateValue();
  const navigate=useNavigate();
  const addToBasket=(e)=>{
    console.log(head)
    console.log("basket>>",basket)
    e.preventDefault();
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        image,
        head,
        para
      },
     })
    }
  return (
    <div className="col-md-4 col-10 mx-auto col-xxl-4 ">
                <div className="card shadow-lg p-3 mb-5 bg-body rounded" style={{width:"22rem"}}>
                    <img src={image} style={{width:"300px",height:"200px"}} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title">{head}</h4>
                      <p>{para}</p>
                      <Button>
                      
                      <a href="#" className="btn btn-primary active" aria-current="page" onClick={()=>navigate("/aboutus")}>Know More</a>
                      <Btn onClick={addToBasket}>
                      <button className='btn btn-info' >ADD</button>
                      </Btn>
                      </Button>
                    </div>
                  </div>
            </div>
  )
}
const Button=styled.div`
display:flex;
margin:auto;
justify-content:space-between;
`
const Btn=styled.div`

`
export default Card