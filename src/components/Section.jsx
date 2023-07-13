import React, {useState} from 'react'
import'../styles/Section.css'
import data from '../Data'
import Adventures  from './Adventures'

const Section = () => {
  
        const [adventures, setAdventures] = useState(data)

        // remove adventure
 
        const removeAdventure = (id) => {
          const remainingAdventure = adventures.filter((a) => a.id !== id);
          setAdventures(remainingAdventure);
        };

        // refresh fun
      const refresh = () =>{
        setAdventures(data)
      }
  
  return (
    <div className='section'>
        <div className="sec-heading">
            <h2 className='take'>Take Yourself</h2>
            <h2 className='ideals'>Adventure Ideals</h2>
        </div>
        <div>
            <Adventures adventures = {adventures} setAdventures={setAdventures} 
            removeAdventure = {removeAdventure}
            refresh = {refresh}
            />
        </div>


    </div>
  )
}

export default Section