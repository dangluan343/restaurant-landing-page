import React from 'react'
import './subheading.css'
import { images } from '../../constants'

const Subheading = ({ label, title }) => {
    return (
        <div className="subheading">
            <h5>{label}</h5>
            <img src={images.spoon} alt="" />
            <h4>{title}</h4>
        </div>
    )
}

export default Subheading