import React from 'react'
import './menuitem.css'

const Menuitem = ({ title, price, tags }) => {
    return (
        <div className="menu__item">
            <div className="menu__item_row">
                <h5 className="menu__item__name">{title}</h5>
                <div className="menu__item__line"></div>
                <p className="menu__item__price">{price}</p>
            </div>

            <div className="menu__item__type">{tags}</div>
        </div>
    )
}

export default Menuitem