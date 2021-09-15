import React from 'react'
import { Flex, Box, Text, Divider } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { useWatch, useFormContext } from 'react-hook-form'

const PriceButton = () => {
  const { t } = useTranslation()
  const { control } = useFormContext()
  const { min, max } = useWatch({
    control,
    name: ['min', 'max'],
  })

  return (
    <Flex alignItems="center">
      <Flex layerStyle="filter" backgroundColor="white">
        <Box>
          <Text color="gray.200" fontSize="xs" whiteSpace="nowrap">
            {t('filters.price.min')}
          </Text>
          <Flex alignItems="center" fontSize="sm" w="60px">
            <Box>$</Box>
            <Text pl={1.5} isTruncated>
              {min}
            </Text>
          </Flex>
        </Box>
        <Flex alignItems="center">
          <Divider orientation="vertical" h="85%" mx={4} />
        </Flex>
        <Box>
          <Text color="gray.200" fontSize="xs" whiteSpace="nowrap">
            {t('filters.price.max')}
          </Text>
          <Flex alignItems="center" fontSize="sm" w="60px">
            <Box>$</Box>
            <Text pl={1.5} isTruncated>
              {max}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}

export default PriceButton
