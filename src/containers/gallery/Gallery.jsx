import React from 'react'
import './gallery.css'
import { images } from '../../constants'
import { BsFillArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

import Subheading from '../../components/subheading/Subheading'

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {

    const scrollRef = React.useRef(null);

    function scroll(direction) {
        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 300
        }
        else {
            current.scrollLeft += 300
        }

    }
    return (
        <div className="gallery section__padding section__margin">
            <div className="gallery__left">
                <Subheading label={"Instagram"} title={"Photo Gallery"} />
                <p className="gallery__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
                </p>
                <a href="#" className="btn btn--golden">View More</a>
            </div>
            <div className="gallery__right_container" >
                <div className="gallery__right" ref={scrollRef}>
                    {
                        galleryImages.map((item, index) => <img key={index} src={item} alt="" />)
                    }


                </div>
                <BsFillArrowLeftCircleFill className='arrow__swipe arrow__swipe--left' onClick={() => scroll('left')} />
                <BsArrowRightCircleFill className='arrow__swipe arrow__swipe--right' onClick={() => scroll('right')} />

            </div>


        </div>


    )
}

export default Gallery