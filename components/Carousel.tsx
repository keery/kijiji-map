import React from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Image } from '@chakra-ui/react'
import FallbackImage from '~components/FallbackImage'

interface ICarousel {
  slides: string[]
}
SwiperCore.use([Navigation])

const Carousel = ({ slides = [] }: ICarousel) => {
  if (slides.length === 0) return <FallbackImage />
  return (
    <Swiper slidesPerView="auto" navigation observer parallax>
      {slides.map((slide) => (
        <SwiperSlide key={slide}>
          <Image
            src={slide}
            w="100%"
            h="100%"
            objectFit="cover"
            fallback={<FallbackImage />}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
