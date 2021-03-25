import React from 'react'
import { Flex, useTheme } from '@chakra-ui/react'
import Loader from '~components/Loader'

const MapPlaceholder = () => {
  const theme = useTheme()
  return (
    <Flex
      h="100%"
      w="100%"
      alignItems="center"
      justifyContent="center"
      background={theme.gradient.blueViolet}
    >
      <Loader />
    </Flex>
  )
}

export default MapPlaceholder
