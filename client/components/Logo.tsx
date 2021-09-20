import React from 'react'
import { Flex, Image, Link } from '@chakra-ui/react'

const Logo = () => {
  return (
    <Flex transform="translateY(2px)" minW="80px">
      <Link href="/">
        <Image src="/assets/img/jikiki-logo.png" />
      </Link>
    </Flex>
  )
}

export default Logo
