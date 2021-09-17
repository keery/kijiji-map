import React from 'react'
import { Box } from '@chakra-ui/react'

interface Props {
  isFocus: boolean
  price: string | number
}

const MapMarker = ({ isFocus, price }: Props) => {
  return (
    <Box
      borderRadius="20px"
      bgColor={isFocus ? '#373373' : '#f1454f'}
      border="2px solid"
      borderColor={isFocus ? '#373373' : '#f38086'}
      whiteSpace="nowrap"
      color="white"
      textAlign="center"
      w="fit-content"
      px={10}
      py={2}
      fontSize="14px"
      fontWeight="bold"
      transform="translateX(-50%) translateY(-50%)"
      _hover={{
        borderColor: '#373373',
        bgColor: '#373373',
      }}
    >
      {`$ ${price}`}
    </Box>
  )
}

export default MapMarker
