import React, { useState } from 'react'
import {MdOutlineStarOutline, MdStar} from 'react-icons/Md'


const Adventure = ({ id, image, info, title, removeAdventure }) => {
    // readmore button
    const [readMore, setReadMore] = useState(true)
    const toggleRead = () => {
        setReadMore(!readMore)
    }
    
    return (
        <div className='maincard'>
            <img src={image} alt={title} className='photo' />
            <article>
                <div className='title-icon'>
                    <h5>{title}</h5>
                    <p>
                    <MdStar/>
                    <MdStar/>
                    <MdStar/>
                   <MdOutlineStarOutline/>
                   <MdOutlineStarOutline/>
                   
                    </p>
                </div>
                <p className='adventure-test'>{readMore? `${info.substring(0, 50)}...` : info}
                        <button onClick={toggleRead}> {readMore? 'Read More' : 'Read Less'}</button>
                    </p>

            </article>
            <button onClick={() => removeAdventure(id)} className='notbtn' >Not Interested</button>
        </div>
    )
}

export default Adventure