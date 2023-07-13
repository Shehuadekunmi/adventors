import React from 'react'
import Rect from '../assets/Rect.png'
import'../styles/section1.css'


const Section1 = () => {
  return (
    <div className='sec1'>
        <div className="text">
            <h1>Making adventure tours, <br /> activities affordable.</h1> 
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor cursus tortor tempus ac. Purus amet risus amet sagittis. Enim nulla a sapien lectus tellus mauris integer ut. Magna viverra sit rhoncus convallis id. Aenean egestas turpis aenean feugiat pharetra sed sed morbi faucibus.</p>
        </div>
        <div className="img"> <img src={Rect} alt="Activities" /></div>


    </div>
  )
}

export default Section1