import React from 'react'
import { Flex, useTheme } from '@chakra-ui/react'
import HomeIcon from 'public/assets/img/home.svg'

const FallbackImage = () => {
  const theme = useTheme()
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="100%"
      background={theme.gradient.blueViolet}
    >
      <HomeIcon fontSize="64px" color="white" />
    </Flex>
  )
}

export default FallbackImage
