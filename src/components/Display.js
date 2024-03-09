import React from 'react'

function Display({inputNumber,percentage,grandTotal}) {
  return (
    <div className='main-diplay'>
        <h5>{inputNumber}</h5>
      <h1>{grandTotal}</h1>
    </div>
  )
}

export default Display
