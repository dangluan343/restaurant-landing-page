import React from 'react'
import './menu.css'
import { Menuitem } from '../../components';

import { images, data } from '../../constants'
function MenuList(props) {
    const { list, title } = props;
    console.log(list, title);
    return (
        <div className="menu__list menu__list--wine">
            <h4 className="menu__table__header">{title}</h4>
            {
                list.map((item, index) =>
                    <Menuitem key={index} title={item.title} price={item.price} tags={item.tags} />
                )
            }


        </div>
    );
}
const Menu = () => {
    return (
        <div className="menu section__padding">
            <div className="menu__header">
                <h4 className="menu__special">Menu that fits you palatte</h4>
                <div className="menu__special-icon">
                    <img src={images.spoon} alt="" />
                </div>

                <h1 className="menu__today">Today’s Special</h1>
            </div>

            <div className="menu__table">
                <MenuList list={data.wines} title={'Wine & Beer'} />

                <div className="menu__cub__image">
                    <img src={images.menu} alt="" />
                </div>

                <MenuList list={data.cocktails} title={'Cocktails'} />
            </div>

            <a href="#" className="btn btn--golden">View More</a>
        </div>

    )
}

export default Menu