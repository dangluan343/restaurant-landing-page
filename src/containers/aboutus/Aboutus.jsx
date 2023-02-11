import React from 'react'
import './aboutus.css'
import { images } from '../../constants'
const Aboutus = () => {
    return (
        <div className="about section__padding">
            <div className="about__overlay section__padding">
                <div className="about__content about__content--right">
                    <h1 className="about__header">About Us</h1>
                    <div className="about__icon">
                        <img src={images.spoon} alt="" />
                    </div>
                    <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                    <a href="#" className="btn btn--golden">Know More</a>
                </div>

                <div className="about__overlay-image">
                    <img src={images.knife} alt="" />
                </div>
                <div className="about__content ">
                    <h1 className="about__header">Our History </h1>
                    <div className="about__icon">
                        <img src={images.spoon} alt="" />

                    </div>
                    <p className="about__description">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
                    <a href="#" className="btn btn--golden">Know More </a>
                </div>
            </div>
            <div className="about__overlay about__overlay--background section__padding">
                <div className="about__content about__content--right">
                    <h1 className="about__header">About Us</h1>
                    <div className="about__icon">
                        <img src={images.spoon} alt="" />
                    </div>
                    <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                    <a href="#" className="btn btn--golden">Know More</a>
                </div>

                <div className="about__overlay-image">
                    <img src={images.knife} alt="" />
                </div>
                <div className="about__content ">
                    <h1 className="about__header">Our History </h1>
                    <div className="about__icon">
                        <img src={images.spoon} alt="" />

                    </div>
                    <p className="about__description">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
                    <a href="#" className="btn btn--golden">Know More </a>
                </div>
            </div>

            <div className="about__img">
                <img src={images.G} alt="" />
            </div>

        </div>


    )
}

export default Aboutus