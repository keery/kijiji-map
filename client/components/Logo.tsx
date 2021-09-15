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
      backgroundColor="rgb(177 137 210 / 8%)"
      p="10px 20px"
      border="1px solid"
      borderColor="gray.100"
    >
      <HomeIcon fontSize="30px" fill={theme.colors.purple['300']} />
      <Text
        pl={3}
        fontWeight="bold"
        letterSpacing="0.8"
        background={theme.gradient.blueViolet}
        bgClip="text"
      >
        Jikiki
      </Text>
    </Flex>
  )
}

export default Logo
