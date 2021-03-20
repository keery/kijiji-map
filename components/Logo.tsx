import React from 'react'
import { Flex, Text, useTheme } from '@chakra-ui/react'
import HomeIcon from 'public/assets/img/home.svg'

const Logo = () => {
  const theme = useTheme()
  return (
    <Flex
      alignItems="center"
      fontSize="xl"
      borderRadius="xl"
      backgroundColor="white"
      p="10px 20px"
    >
      <HomeIcon fontSize="30px" fill={theme.colors.purple['300']} />
      <Text
        pl={3}
        fontWeight="bold"
        letterSpacing="0.8"
        background="linear-gradient(to right, #8CA6DB, #B993D6)"
        bgClip="text"
      >
        sweet home
      </Text>
    </Flex>
  )
}

export default Logo
