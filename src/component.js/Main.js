import React from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from '../images/img-4.jpg'
import img2 from '../images/img-5.jpg'
import img3 from '../images/img-6.jpg'
import online from '../images/Free-online-courses_Feature-5.jpg'
import { CarouselItem } from 'react-bootstrap'
import { Router } from 'react-router-dom'
import ai from '../images/ai.jpg'
import { Component } from "react";
import Slider from "react-slick";
import ss from "../images/12.jpg"
import img5 from "../images/img-5.jpg"
import ml from "../images/ml.jpg"
import arti from "../images/Arti.jpg"
import ds from "../images/ds.jpg"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./slid.css"
import { multidata } from './data'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./slid.css"
import { data } from './data'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'


const PreviousButn=(props)=>{
  console.log(props)
  return(
    <div className=''>
      <ArrowBackIos />
    </div>
  )
}
const NextButn=(props)=>{
  return(
    <div className=''>
      <ArrowForwardIos />
    </div>
  )
}
export default function Main() {
  return (
    <div>
   <Carousel>
   <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className='akash'>COURSE FINDER</h1>
      <h2 className='vinay'>Course finder helps you to improve your skills in a good way.Start your career rightly by learning with us.</h2>
      <h3 className='rohith' class="mt-2" style={{color:"red"}}>Find numerous courses on our course finder and boost up your skills to start a bright career</h3>
      <h3 className='shoaib' class="mt-3" style={{color:"red"}}>So,what are you waiting for,to know more about our course click here</h3>
      <a href="/contact" className="btn btn-primary active" aria-current="page">Click here</a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={img1}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>We have a dedicated team to work for you</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img5}
      alt="Second slide"
    />
<Carousel.Caption>
      <h3>Join our course finder and excel your skills.</h3>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel> 

<h1 style={{color:"red",textAlign:"center"}}>TOP RECOMMENDED COURSES FOR YOU</h1>

<div className="container">
        <div className="row my-5">
            <div className="col-md-4 col-10 mx-auto col-xxl-4 ">
                <div className="card shadow-lg p-3 mb-5 bg-body rounded" style={{width:"22rem"}}>
                    <img src={ml} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title">MACHINE LEARNING</h4>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <p>Learn this top course from our top mentors to know more click here</p>
                      <a href="/Ml" className="btn btn-primary active" aria-current="page">Click here</a>
                    </div>
                  </div>
            </div>
            <div className="col-md-4 col-10 mx-auto col-xxl-4 ">
                <div className="card shadow-lg p-3 mb-5 bg-body rounded" style={{width:"22rem"}}>
                    <img src={arti} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Artificial Intelligence</h5>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <p className="card-text">Learn this course and excel your skills,to know more click here</p>
                      <a href="/Ml" className="btn btn-primary active" aria-current="page">Click here</a>
                    </div>
                  </div>
            </div>
            <div className="col-md-4 col-10 mx-auto col-xxl-4 ">
                <div className="card shadow-lg p-3 mb-1 bg-body rounded" style={{width:"22rem"}} >
                    <img src={ds} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Data Science</h5>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <p className="card-text">Learn about the data that is present every where in the worlsd.To know more click here</p>
                      <a href="/Ml" className="btn btn-primary active" aria-current="page">Click here</a>
                    </div>
                  </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row my-5">
            <div className="col-md-4 col-10 mx-auto col-xxl-4 ">
                <div className="card shadow-lg p-3 mb-5 bg-body rounded" style={{width:"22rem"}}>
                    <img src={ml} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title">MACHINE LEARNING</h4>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <p>Learn this top course from our top mentors to know more click here</p>
                      <a href="/Ml" className="btn btn-primary active" aria-current="page">Click here</a>
                    </div>
                  </div>
            </div>
            <div className="col-md-4 col-10 mx-auto col-xxl-4 ">
                <div className="card shadow-lg p-3 mb-5 bg-body rounded" style={{width:"22rem"}}>
                    <img src={arti} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Artificial Intelligence</h5>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <p className="card-text">Learn this course and excel your skills,to know more click here</p>
                      <a href="/Ml" className="btn btn-primary active" aria-current="page">Click here</a>
                    </div>
                  </div>
            </div>
            <div className="col-md-4 col-10 mx-auto col-xxl-4 ">
                <div className="card shadow-lg p-3 mb-1 bg-body rounded" style={{width:"22rem"}} >
                    <img src={ds} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Data Science</h5>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <p className="card-text">Learn about the data that is present every where in the worlsd.To know more click here</p>
                      <a href="/Ml" className="btn btn-primary active" aria-current="page">Click here</a>
                    </div>
                  </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row my-5">
            <div className="col-md-4 col-10 mx-auto col-xxl-4 ">
                <div className="card shadow-lg p-3 mb-5 bg-body rounded" style={{width:"22rem"}}>
                    <img src={ml} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title">MACHINE LEARNING</h4>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <p>Learn this top course from our top mentors to know more click here</p>
                      <a href="/Ml" className="btn btn-primary active" aria-current="page">Click here</a>
                    </div>
                  </div>
            </div>
            <div className="col-md-4 col-10 mx-auto col-xxl-4 ">
                <div className="card shadow-lg p-3 mb-5 bg-body rounded" style={{width:"22rem"}}>
                    <img src={arti} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Artificial Intelligence</h5>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <p className="card-text">Learn this course and excel your skills,to know more click here</p>
                      <a href="/Ml" className="btn btn-primary active" aria-current="page">Click here</a>
                    </div>
                  </div>
            </div>
            <div className="col-md-4 col-10 mx-auto col-xxl-4 ">
                <div className="card shadow-lg p-3 mb-1 bg-body rounded" style={{width:"22rem"}} >
                    <img src={ds} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Data Science</h5>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <p className="card-text">Learn about the data that is present every where in the worlsd.To know more click here</p>
                      <a href="/Ml" className="btn btn-primary active" aria-current="page">Click here</a>
                    </div>
                  </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row my-5">
            <div className="col-md-4 col-10 mx-auto col-xxl-4 ">
                <div className="card shadow-lg p-3 mb-5 bg-body rounded" style={{width:"22rem"}}>
                    <img src={ml} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title">MACHINE LEARNING</h4>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <p>Learn this top course from our top mentors to know more click here</p>
                      <a href="/Ml" className="btn btn-primary active" aria-current="page">Click here</a>
                    </div>
                  </div>
            </div>
            <div className="col-md-4 col-10 mx-auto col-xxl-4 ">
                <div className="card shadow-lg p-3 mb-5 bg-body rounded" style={{width:"22rem"}}>
                    <img src={arti} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Artificial Intelligence</h5>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <p className="card-text">Learn this course and excel your skills,to know more click here</p>
                      <a href="/Ml" className="btn btn-primary active" aria-current="page">Click here</a>
                    </div>
                  </div>
            </div>
            <div className="col-md-4 col-10 mx-auto col-xxl-4 ">
                <div className="card shadow-lg p-3 mb-1 bg-body rounded" style={{width:"22rem"}} >
                    <img src={ds} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Data Science</h5>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <i class="bi bi-star-fill" style={{color:"gold"}}></i>
                      <p className="card-text">Learn about the data that is present every where in the worlsd.To know more click here</p>
                      <a href="/Ml" className="btn btn-primary active" aria-current="page">Click here</a>
                    </div>
                  </div>
            </div>
        </div>
    </div>
    <h1 className='text-center'>OUR TOP 3 COURSES</h1>
    <div className="card-group">
        <div className="container">
      

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
       
            
            <div className="col">

         <div className="card  mt-5 h-35 mb-5">
            <img src={arti} alt="" style={{height:"150px"}}className="w-150 rounded" />
            <h2 className="card-title">Artificial Intelligence</h2>
            <button className="btn btn-primary class-body w-75 ms-5" data-bs-toggle="modal" data-bs-target="#m">Specifications</button>
        </div>
            <div className="modal fade" id="m" data-bs-backdrop="static">
                <div className="modal-dialog">

                    <div className="modal-content"> 
                        <div className="modal-header">
                            Model no
                            <button className="btn-close btn-danger" data-bs-dismiss="modal"></button>
                            </div>
                      
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-4 d-flex align-items-center">
                                    <img src={ml} alt="" className="w-100 shadow rounded" />
                                </div>
                                <div className="col-sm-8">
                                    <h6>Price:5000</h6>
                                    <h6>Mentor:XXXXXX</h6>
                                    <h6>COurse completion:3days</h6>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button class="btn"></button>
                        </div>
                    </div>
                </div>
            </div>
    
    
         </div>
         
            <div class="col">
         <div class="card mt-5 h-35 mb-5">
            
            <img src={ds} alt="" style={{height:"150px"}}class="w-100 rounded" />
            <h2 class="card-title">Machine Learning</h2>
            <button class="btn btn-primary class-body w-75 ms-5" data-bs-toggle="modal" data-bs-target="#p">Sepecifications</button>
        
            <div class="modal fade" id="p" data-bs-backdrop="static">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            Model no
                            <button class="btn-close btn-danger" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                    
                            <div class="row">
                                <div class="col-sm-4 d-flex align-items-center">
                                    <img src={ml}alt="" class="w-100 shadow rounded" />
                                </div>
                                <div class="col-sm-8">
                                <h6>Price:5000</h6>
                                    <h6>Mentor:XXXXXX</h6>
                                    <h6>COurse completion:3days</h6>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn"></button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    
    
         </div>

            <div class="col">
         <div class="card  mt-5 mb-5">
            <img src={arti} alt=""  style={{height:"150px"}}class="w-100 rounded" />
            <h2 class="card-title">Data Science</h2>
            <button class="btn btn-primary class-body w-75 ms-5" data-bs-toggle="modal" data-bs-target="#n">Sepecifications</button>
            <div class="modal fade" id="n" data-bs-backdrop="static">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            Model no
                            
                            <button class="btn-close btn-danger" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                           
                            <div class="row">
                                <div class="col-sm-4 d-flex align-items-center">
                                    <img src={ds} alt="" class="w-100 shadow rounded" />
                                </div>
                                <div class="col-sm-8">
                                <h6>Price:5000</h6>
                                    <h6>Mentor:XXXXXX</h6>
                                    <h6>COurse completion:3days</h6>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn"></button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
         </div>
        </div>
        </div>
        <div style={{margin:"30px"}}>
      <div className='text-center text-info'>
      <h1>OUR TOP COURSES</h1>
      </div>
      <Slider autoplay={true}
       autoplayspeed={1000} 
       dots={true}
        initialslide={2}
        infinite
        slidesToShow={3}
        >
        {
          multidata.map(item=>(
            <div>
          <img src={item}alt='' style={{width:"100%",height:"50vh"}}/>
           </div>
          ))
        }
      </Slider>
    </div>
    <div style={{margin:"30px"}}>
      <h1 className=''>We collaborate with <a href='#'>100+universities</a></h1>
      <Slider autoplay={true}
       autoplayspeed={1000} 
       dots={true}
        initialslide={2}
        infinite

        >
        {
          data.map(item=>(
            <div>
          <img src={item}alt='' style={{width:"100%",height:"50vh"}}/>
           </div>
          ))
        }
      </Slider>
    </div>
 </div>
  )
}
