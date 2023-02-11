import React from 'react'
import './chef.css'
import { images } from '../../constants'

const Chef = () => {
    return (
        <div className="chef section__padding section__margin">
            <div className="chef__image"><img src={images.chef} alt="" /></div>

            <div className="chef__description">
                <div className="row1">
                    <h4 className="chef__banner">Chef’s Word</h4>
                    <img src={images.spoon} alt="" className="spoon" />
                    <div className="chef__title">What we believe in</div>
                </div>
                <p className="chef__sentence row2">
                    <img src={images.quote} alt="" />
                    <span className="chef__qoute">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</span>
                </p>

                <div className="chef__info row3">
                    <h5 className="chef__name">Kevin Luo</h5>
                    <h6 className="chef__position">Chef & Founder</h6>
                </div>
                <div className="row4">
                    <img src={images.sign} alt="" className="chef__signature" />
                </div>
            </div>

        </div>

    )
}

export default Chef