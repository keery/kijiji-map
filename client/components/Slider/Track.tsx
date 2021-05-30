import { Box, useTheme } from '@chakra-ui/react'

export const Track = ({ source, target, getTrackProps }) => {
  const theme = useTheme()
  return (
    <Box
      position="absolute"
      transform="translate(0%, -50%)"
      height="5px"
      zIndex="1"
      background={theme.gradient.blueViolet}
      borderRadius="5px"
      cursor="pointer"
      left={`${source.percent}%`}
      width={`${target.percent - source.percent}%`}
      {...getTrackProps()}
    />
  )
}
