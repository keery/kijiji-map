import { Box } from '@chakra-ui/react'

export const Track = ({ source, target, getTrackProps }) => {
  return (
    <Box
      position="absolute"
      transform="translate(0%, -50%)"
      height="5px"
      zIndex="1"
      backgroundColor="gray.400"
      borderRadius="5px"
      cursor="pointer"
      left={`${source.percent}%`}
      width={`${target.percent - source.percent}%`}
      {...getTrackProps()}
    />
  )
}
