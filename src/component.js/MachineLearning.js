import React from 'react'
import ml from "../images/ml2.png"
import './ml.css'
function MachineLearning() {
  return (
    <div>
      <img src={ml} style={{width:"1520px",height:"500px"}}/>
    <div className='bgimg'>
     <h5 className='about'>Machine Learning (ML)  is a sub-category of artificial intelligence, that refers to the process by which computers develop pattern recognition, or the ability to continuously learn from and make predictions based on data, then make adjustments without being specifically programmed to do so. </h5>
      <h4 className='head'>Boost your career with this Artificial Intelligence Course, in collaboration with IBM. Featuring exclusive hackathons and Ask me anything sessions by IBM, these AI courses help you master key AI concepts including Data Science with Python, Machine Learning, Deep Learning, & NLP. Moreover, get job-ready AI certification training with live sessions, practical labs, and hands-on projects.</h4>
      <h1 className='course'>To register this top recommended course click here</h1>
      <h1 className='home'><a className="btn btn-primary active" aria-current="page" href="/register">REGISTER HERE</a></h1>
    </div>
    </div>
  )
}
export default MachineLearning
