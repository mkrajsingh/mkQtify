import React from 'react'
import { useState,useEffect } from 'react'
// eslint-disable-next-line import/no-unresolved
import { useSwiper } from 'swiper/react'
import {ReactComponent as RightArrow} from '../../../assets/rightArrow.svg'
import styles from './CarouselRight.module.css'

const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd,setIsEnd] = useState(swiper.isEnd)

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsEnd(swiper.isEnd)
        })
    })
  return (
    <div className={styles.rightNavigation}>
        {!isEnd && <RightArrow onClick={() => swiper.slideNext()}/>}
    </div>
  )
}

export default CarouselRightNavigation