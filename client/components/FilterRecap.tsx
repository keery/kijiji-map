import React from 'react'
import { Text, Divider, Circle, Box, Flex } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import FilterIcon from 'public/assets/img/filter.svg'
import { DEFAULT_MAX_PRICE, DEFAULT_MIN_PRICE } from '~constants'

const FilterRecap = () => {
  const { watch } = useFormContext()
  const { max, min, location, bedrooms, bathrooms } = watch([
    'max',
    'min',
    'location',
    'bedrooms',
    'bathrooms',
  ])

  return (
    <Flex
      pl={2}
      alignItems="center"
      justifyContent="flex-end"
      cursor="pointer"
      fontSize="sm"
      color="gray.700"
      _hover={{
        color: 'gray.900',
      }}
    >
      <Text isTruncated>
        {!!location && `${location.label}`}
        <Box
          display="inline-block"
          fontSize="6px"
          mx={1}
          transform="translateY(-2px)"
        >
          {` ● `}
        </Box>
        {`${min}$ - ${max}$`}
      </Text>
      <Divider orientation="vertical" h="20px" mx={3} />
      <Box pos="relative">
        <FilterIcon />
        {(+max !== DEFAULT_MAX_PRICE ||
          +min !== DEFAULT_MIN_PRICE ||
          +bedrooms !== 0 ||
          +bathrooms !== 0) && (
          <Circle
            size="6px"
            bgColor="kijiji.red"
            pos="absolute"
            top="-4px"
            right="-4px"
          />
        )}
      </Box>
    </Flex>
  )
}

export default FilterRecap
