import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa'
import './TopBanner.css'

const TopBanner = () => {
  return (
    <div className='TopBanner'>
        <div className="contact_side">
            <div className="info">
                <FaEnvelope/>
                <p><a href="alkassadi.advocates@gmail.com">alkassadi.advocates@gmail.com</a></p>
            </div>
            <div className="info">
                <FaPhone/>
                <p className='phone_number'>
                <a href="tel:0586689000">058 668 9000</a> | 
            <a href="tel:0553122302"> 055 312 2302</a> | 
            <a href="tel:0553633377"> 05 536 3377</a>
                </p>
            </div>
        </div>
        <div className="social_side">
            <a href="#" className='Facebook'>
                <FaFacebook/>
            </a>
            <a href="#" className='Instagram'>
                <FaInstagram/>
            </a>
            <a href="#" className='Twitter'>
                <FaTwitter/>
            </a>
            <a href="#" className='Youtube'>
                <FaYoutube/>
            </a>
        </div>
    </div>

  )
}

export default TopBanner