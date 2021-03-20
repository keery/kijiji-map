import React, { useState } from 'react'
import {
  useNumberInput,
  HStack,
  Button,
  Input,
  Box,
  Text,
  useTheme,
  ButtonProps,
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

const SizeButton = ({ children, ...rest }: ButtonProps) => {
  const theme = useTheme()
  return (
    <Button
      {...rest}
      h="20px"
      w="20px"
      minW="0"
      fontSize="xl"
      variant="unstyled"
      lineHeight={1}
      background={theme.gradient.blueViolet}
      bgClip="text"
    >
      {children}
    </Button>
  )
}

const FilterSize = ({ control }) => {
  const { t } = useTranslation()
  const [size, setSize] = useState<number>(1)
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1,
    max: 9,
    inputMode: 'numeric',
    pattern: '[0-9]*',
    onChange: (value) => {
      // @ts-ignore
      setSize(Number(value).toFixed(0) as number)
    },
  })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <HStack maxW="320px" layerStyle="filter" px="10px">
      <SizeButton {...dec}>-</SizeButton>
      <Box>
        <Text color="gray.300" fontSize="xs" whiteSpace="nowrap">
          {t('filters.size.nbRoom')}
        </Text>
        <Box pos="relative" w="fit-content" m="0 auto">
          <Input
            {...input}
            border="none"
            px={0}
            value={size}
            h="20px"
            w="25px"
          />
          <Text pos="absolute" right="0" top="50%" transform="translateY(-50%)">
            ½
          </Text>
        </Box>
      </Box>
      <SizeButton {...inc}>+</SizeButton>
    </HStack>
  )
}

export default FilterSize
