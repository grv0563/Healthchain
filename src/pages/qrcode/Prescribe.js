import React from 'react'
import './Prescribe.css'
const handle_drug_adding_in_prescription =()=>{
    alert("Drug added in Precription")
  }

function Prescribe() {
  return (
    <div className='prescribe-container'>
       <div className="afterscan-prescribe-drug">
          <input placeholder="Type drug name" />
          <button onClick={handle_drug_adding_in_prescription}><span>&#43;</span></button>
        </div>
    </div>
  )
}

export default Prescribe
