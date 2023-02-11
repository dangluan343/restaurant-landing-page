import React from 'react'
import './laurels.css'
import { images } from '../../constants'

const Laurels = () => {
    return (
        <div className="laurels section__padding">
            {/* <div className="laurels__logo">
                <img src={images.logo} alt="" />
            </div> */}
            <div className="laurels__table">
                <div className="laurels__header">
                    <h5 className="laurels__awards">Awards & recognition</h5>
                    <img src={images.spoon} alt="" className='spoon' />
                    <div className="laurels__title">Our Laurels</div>
                </div>

                <div className="laurels__list">
                    <div className="laurels__item">
                        <img src={images.award01} alt="" />
                        <div className="laurels__content">
                            <h4 className="laurels__award_name">Bib Gourmond</h4>
                            <p className="laurels__award__description">Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>

                    </div>
                    <div className="laurels__item">
                        <img src={images.award01} alt="" />
                        <div className="laurels__content">
                            <h4 className="laurels__award_name">Bib Gourmond</h4>
                            <p className="laurels__award__description">Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>

                    </div>
                    <div className="laurels__item">
                        <img src={images.award01} alt="" />
                        <div className="laurels__content">
                            <h4 className="laurels__award_name">Bib Gourmond</h4>
                            <p className="laurels__award__description">Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>

                    </div>
                    <div className="laurels__item">
                        <img src={images.award01} alt="" />
                        <div className="laurels__content">
                            <h4 className="laurels__award_name">Bib Gourmond</h4>
                            <p className="laurels__award__description">Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>

                    </div>

                </div>

            </div>

            <div className="laurels__image">
                <img src={images.laurels} alt="" />
            </div>

        </div>


    )
}

export default Laurels