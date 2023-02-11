import React from 'react'
import './footer.css'
import { Subheading } from '../../components'
import { AiOutlineTwitter, AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { images } from '../../constants'
const Footer = () => {
    return (
        <div className="footer section__padding">
            <div className="footer__top section__padding">
                <div className="footer__top_container ">
                    <Subheading label={'Newsletter'} title={'subcribe to our newsletter'} />
                    <p className="footer__update">And never miss latest Updates!</p>
                    <form className="footer__input">
                        <input className='footer__input_email' type="email" name="email" id="email" placeholder='email address' />
                        <input className='btn btn--golden' type="submit" value="Subcribe" />
                    </form>

                </div>
            </div>

            <div className="footer__bottom">
                <div className="footer__info">
                    <h4 className="footer__info_label">Contact Us</h4>
                    <p className="footer__info_address">9 W 53rd St, New York, NY 10019, USA</p>
                    <p className="footer__info_phone">+1 212-344-1230
                        <br />+1 212-555-1230</p>

                </div>

                <div className="footer__social">
                    <div className="footer__logo">
                        <img src={images.gericht} alt="" className="footer__logo_image" />

                    </div>
                    <p className="footer__promise">"The best way to find yourself is to lose yourself in the<br />service of others.”</p>
                    <img src={images.spoon} alt="" className="spoon" />
                    <div className="footer__social_icons">
                        <AiOutlineTwitter className='footer__icon' />
                        <AiFillFacebook className='footer__icon' />
                        <AiFillInstagram className='footer__icon' />
                    </div>

                </div>
                <div className="footer__info">
                    <h4 className="footer__info_label">Contact Us</h4>
                    <p className="footer__info_address">9 W 53rd St, New York, NY 10019, USA</p>
                    <p className="footer__info_phone">+1 212-344-1230
                        <br />+1 212-555-1230</p>

                </div>

            </div>

        </div>

    )
}

export default Footer