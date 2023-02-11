import React from 'react'
import './findus.css'
import { Subheading } from '../../components'
import { images } from '../../constants'

const Findus = () => {
    return (
        <div className="findus section__padding section__margin">
            <div className="findus__left">
                <Subheading label={'contact'} title={"find us"} />
                <p className="findus__description">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
                <div className="findus__open">
                    <h4 className="findus__open_hours">Opening Hours</h4>
                    <p className="findus__open_time">Mon - Fri: 10:00 am - 02:00 am</p>
                    <p className="findus__open_time">Sat - Sun: 10:00 am - 03:00 am</p>
                </div>

                <a href="#" className="btn btn--golden">View Us</a>
            </div>

            <div className="findus__right">
                <img src={images.findus} alt="" />
            </div>

        </div>

    )
}

export default Findus