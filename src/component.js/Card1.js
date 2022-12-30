import React from 'react'
import './Card1.css'
function Card({title,body}) {
    return ( 
        <div className='card'>
        <div className="container card-container">
            <div className="card-content">
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
            </div>
        </div>
        </div>
     );
}

export default Card;