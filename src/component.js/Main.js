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
import "./Main.css"
import FS from './FS'
import Footer from './Footer'
import Card from './Card'
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
      <FS></FS>
    <div className='Total'>
      <div classname="utube">
        <img src='https://www.dealsshutter.com/blog/wp-content/uploads/2020/03/Home-Services-Image-30-march-2020.png' style={{"width":"100%","height":"50%"}}/>
      </div>

    <div className="container">
        <div className="row my-5">
            <Card image={"https://img.freepik.com/free-vector/city-destroy-war-zone-abandoned-buildings-bridge-with-smoke-cataclysm-destruction-natural-disaster-post-apocalyptic-world-ruins-with-broken-road-street-cartoon-illustration_107791-3826.jpg?size=626&ext=jpg&ga=GA1.2.708867965.1657127663"}
            head={"Earth Quake"}
            para={"To know more  click here"}/>
            <Card image={"https://t4.ftcdn.net/jpg/03/99/50/79/240_F_399507907_ihIVdrantaY6B6lJ6j0xV5c85eel9Rli.jpg"}
               head={"Sink holes"}
               para={"To know more  click here"}/> 
                <Card image={"https://media.istockphoto.com/photos/israel-impressions-timna-sandstorm-picture-id898310020?k=20&m=898310020&s=612x612&w=0&h=e-S6nSu66LZicRSM92ZASrpQbxdiHWaKrZy8icwb9v0="}
               head={"Sand Storm"}
               para={"To know more  click here"}/> 
        </div>
    </div>
    <div className="container">
        <div className="row my-5">
          <Card image={"https://t4.ftcdn.net/jpg/01/45/02/67/240_F_145026793_SqNcilXyQ1L7S0Fzsab2IKviVAIRhQ40.jpg"}
          head={"Volcano"}
          para={"To know more  click here"}/>
           <Card image={"https://t3.ftcdn.net/jpg/02/95/32/60/240_F_295326025_iGaR2nAK825YByWDhKeWHj2RCEr4TAD1.jpg"}
           head={"Drought"}
               para={"To know more click here"}/> 
          <Card image={"https://t4.ftcdn.net/jpg/03/45/39/61/240_F_345396184_SY3kTA5VxjZeIJXrBObFfurRiaRJiT90.jpg"}
          head={"Tsunami"}
          para={"To know more  here"}/>
          </div>
     </div>
    <div className="container">
        <div className="row my-5">
          <Card image={"https://t3.ftcdn.net/jpg/03/69/46/52/240_F_369465299_mlh45khJQhK1ibX9EgUEuoA53zS0ASPn.jpg"}
          head={"Firestorms"}
          para={"To know more click here"}/>
          <Card image={"https://t4.ftcdn.net/jpg/03/45/39/61/240_F_345396184_SY3kTA5VxjZeIJXrBObFfurRiaRJiT90.jpg"}
          head={"Floods"}
          para={"To know more  click here"}/>
         <Card image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrx9wRRszyoJUJrj-AS7psNhbpgM3KQlzUKw&usqp=CAU"}
         head={"heatwaves"}
         para={"To know more click here"}/>
         </div>
    <div className="container">
        <div className="row my-5">
          <Card image={"https://t4.ftcdn.net/jpg/03/45/39/61/240_F_345396184_SY3kTA5VxjZeIJXrBObFfurRiaRJiT90.jpg"}
          head={"valanches&Landslides"}
          para={"To know more  click here"}/>
          <Card image={"https://t4.ftcdn.net/jpg/03/45/39/61/240_F_345396184_SY3kTA5VxjZeIJXrBObFfurRiaRJiT90.jpg"}
          head={"liminic eruptions"}
          para={"To know more  click here"}/>
      
            <div className="col-md-4 col-10 mx-auto col-xxl-4 ">
                <div className="card shadow-lg p-3 mb-1 bg-body rounded" style={{width:"22rem"}} >
                    <img src={"https://t4.ftcdn.net/jpg/03/45/39/61/240_F_345396184_SY3kTA5VxjZeIJXrBObFfurRiaRJiT90.jpg"} style={{width:"300px",height:"200px"}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">liminic eruptions</h5>
                      <p className="card-text">To know more  click here</p>
                      <a href="#" className="btn btn-primary active" aria-current="page">Click here</a>
                    </div>
                  </div>
            </div>
        </div>
    </div>
    <h1 className='text-center'>  ABOUT WATER HAZARDS</h1>
    <div className="card-group">
        <div className="container">
      

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
       
            
            <div className="col">

         <div className="card  mt-5 h-35 mb-5">
            <img src={"https://t4.ftcdn.net/jpg/03/45/39/61/240_F_345396184_SY3kTA5VxjZeIJXrBObFfurRiaRJiT90.jpg"} style={{width:"300px",height:"200px"}} alt="" className="w-150 rounded" />
            <h2 className="card-title">Tsunami</h2>
            <button className="btn btn-primary class-body w-75 ms-5" data-bs-toggle="modal" data-bs-target="#m">Know More</button>
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
            
            <img src={"https://t4.ftcdn.net/jpg/03/45/39/61/240_F_345396184_SY3kTA5VxjZeIJXrBObFfurRiaRJiT90.jpg"} alt="" style={{height:"150px"}}class="w-100 rounded" />
            <h2 class="card-title">Floods</h2>
            <button class="btn btn-primary class-body w-75 ms-5" data-bs-toggle="modal" data-bs-target="#p">Know More</button>
        
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
            <img src={"https://t4.ftcdn.net/jpg/03/45/39/61/240_F_345396184_SY3kTA5VxjZeIJXrBObFfurRiaRJiT90.jpg"} alt=""  style={{height:"150px"}}class="w-100 rounded" />
            <h2 class="card-title">Coastal Threats</h2>
            <button class="btn btn-primary class-body w-75 ms-5" data-bs-toggle="modal" data-bs-target="#n">Know More</button>
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
 </div>
 </div>
 <Footer></Footer>
 </div>
  )
}
