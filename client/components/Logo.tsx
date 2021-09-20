import React from 'react'
import { Flex, Link } from '@chakra-ui/react'
import Couch from 'public/assets/img/jikiki-logo.svg'

const Logo = () => {
  return (
    <Flex transform="translateY(2px)" minW="80px">
      <Link href="/">
        <Couch width="100px" />
      </Link>
    </Flex>
  )
}

export default Logo
