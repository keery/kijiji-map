import React from 'react'
import { Flex, Image } from '@chakra-ui/react'

const Logo = () => {
  return (
    <Flex transform="translateY(2px)" minW="80px">
      <Image src="/assets/img/jikiki-logo.png" />
    </Flex>
  )
}

export default Logo
