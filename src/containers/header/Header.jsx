import React from 'react'
import './header.css'
import { images } from '../../constants'

const Header = () => {
    return (
        <div className="header section__padding">
            <div className="header__content">
                <div className="subheading">
                    <h4 className="subheading__title">Chase the new Flavour</h4>
                    <div className="subheading__icon"><img src={images.spoon} alt="" /></div>
                </div>

                <h1 className="header__title">The key to Fine dining</h1>
                <p className="header__description">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                <div className="header__button">
                    <a href="#" className="btn btn--golden">Explore More</a>
                </div>
            </div>

            <div className="header__image">
                <img src={images.welcome} />
            </div>

        </div>

    )
}

export default Header