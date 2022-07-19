import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img4 from '../images/new.jpg'


function Contactus() {
  return (
    <div>
    <div className="body">
    <div >
      <h2 className="heading">Find Book</h2>
      
      <h4 className='heading1'>WHAT WOULD YOU LIKE TO CHOOSE?</h4>
      

      <div  className='container '> 
<div className=   " row">


<div className="col-md-7 ">



      <img src={img4} alt='img4'  width="600" height={400} className="Helpimg"/>

      </div>


      <div className="col-md-5 ">
    
   <div className="steps">
     
  
   <div>   
    <h3>LEARN ANYTHING</h3>     
    <p>Whether you want to develop as a professional or discover a new hobby, there's a Library app for you.
       You can even take your learning further with Library Manager.</p>
       <h3>CLICK HERE! To Check Our various books</h3>
       <a href="/services" className="btn btn-primary active" aria-current="page">Click here</a>
       </div>
    
   </div>
   </div>
   
</div>





   </div>
   </div>

   
   </div> 
    </div>
  )
}

export default Contactus