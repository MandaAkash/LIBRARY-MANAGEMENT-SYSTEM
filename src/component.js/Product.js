import React from 'react'

export default function Product(props) {
  return (
    <div className='row'>
      <div className='col-6'>
          <h2>{props.product.name}<span class="badge bg-secondary">{props.product.price}₹</span></h2>
      </div>
      <div className='col-4'>
      <button type="button" class="btn btn-primary">Primary</button>
      </div>
    </div>
  )
}
