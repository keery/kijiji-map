import { Fragment } from 'react'
import { Box } from '@chakra-ui/react'

export const SliderRail = ({ getRailProps }) => {
  return (
    <Fragment>
      <Box
        pos="absolute"
        w="100%"
        transform="translate(0%, -50%)"
        pointerEvents="none"
        borderRadius="2px"
        h="5px"
        backgroundColor="gray.100"
        {...getRailProps()}
      />
    </Fragment>
  )
}
