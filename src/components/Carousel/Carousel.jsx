import React, { useEffect } from 'react'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import {Navigation} from 'swiper/modules'
// eslint-disable-next-line import/no-unresolved
import {Swiper,useSwiper,SwiperSlide} from 'swiper/react'
import styles from './Carousel.module.css'
import CarouselLeft from './CarouselLeft/CarouselLeft.jsx'
import CarouselRight from './CarouselRight/CarouselRight.jsx'

const Controls = ({data}) => {
    let swiper = useSwiper();
    console.log(swiper)
    useEffect(() => {
        // swiper.slideTo(0)
    },[data])

    return <></>
}

const Carousel = ({data,renderCardComponent}) => {
  return (
    <div className={styles.wrapper}>
        <Swiper initialSlide = {0} modules={{Navigation}} slidesPerView={'auto'} spaceBetween={40} allowTouchMove>
            <Controls data={data} />
            <CarouselLeft />
            <CarouselRight />
            {data.map(item => (
                <SwiperSlide>{renderCardComponent(item)}</SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Carousel