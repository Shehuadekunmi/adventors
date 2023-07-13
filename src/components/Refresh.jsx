import React from 'react'
import'../styles/refresh.css'
import saly from '../assets/saly.png'

const Refresh = ({refresh}) => {
  return (
    <div>
        <div className="no-adventure">
            <img src={saly} alt="Refresh Image" />
            <h2>No Adventures Left</h2>
            <p>Refresh Page to view different adventures from the long list of ideas available </p>
            <button onClick={refresh} className='notbtn'>Refresh</button>
        </div>
    </div>
  )
}

export default Refresh