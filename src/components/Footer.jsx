import React from 'react'
import '../styles/footer.css'
import fb from '../assets/facebook.png'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import vic from '../assets/Vector.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="foot">
                <div className="about">
                    <h3>About Adventor.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt id sem vel quis in turpis sit eget pellentesque. Nunc etiicies in rhoncus, rhoncus in arcu. Tincidunt neque fusce vitaenisi aliquet. que maeae tortoere necsem commodo ac.</p>
                </div>
                <div className="quick">

                    <div className="quick-home">
                        <h2>Quick Menu</h2>
                        <a href="#">Home</a><br />
                        <a href="#">Stories</a><br />
                        <a href="#">Trending Stories</a><br />
                        <a href="#">Popular Stories</a><br />
                    </div>
                    <div className="log-in">
                        <a href="#">Sign Up</a> <br />
                        <a href="#">Log In</a> <br />
                        <a href="#">Contact Us</a> <br />
                    </div>
                </div>
                <div className="sub">
                    <h4>Subscribe to our newsletter</h4>
                    <input type="email" placeholder='Email Address' />
                    <button>Subscribe <img src={vic} alt="arrow" /></button>
                </div>
            </div>
            <center><hr /></center>
            <div className="terms">
                <p>Terms and Policy</p>
                <div className="social">
                    <img src={twitter} alt="Twitter" /> <br />
                    <img src={fb} alt="Facebook" /><br />
                    <img src={insta} alt="Instagram" /><br />


                </div>
            </div>

        </div>
    )
}

export default Footer