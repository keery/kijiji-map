import React, { useState } from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Image, Text } from '@chakra-ui/react'
import FallbackImage from '~components/FallbackImage'

interface ICarousel {
  slides: string[]
}
SwiperCore.use([Navigation])

const Carousel = ({ slides = [] }: ICarousel) => {
  const [currentSlide, setCurrentSlide] = useState(1)
  if (slides.length === 0) return <FallbackImage />
  return (
    <Swiper
      slidesPerView="auto"
      navigation
      observer
      parallax
      onSlideChangeTransitionEnd={({ activeIndex }) =>
        setCurrentSlide(activeIndex + 1)
      }
    >
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
      <Text
        opacity={0}
        _groupHover={{
          opacity: 1,
        }}
        pos="absolute"
        right={4}
        bottom={4}
        color="white"
        zIndex={6}
        fontWeight="500"
        textShadow="0px 1px 4px #000"
      >{`${currentSlide}/${slides.length}`}</Text>
    </Swiper>
  )
}

export default Carousel
