import React, { useState, useMemo } from 'react'
import {
  useNumberInput,
  HStack,
  Button,
  Input,
  Box,
  Text,
  useTheme,
  ButtonProps,
  Flex,
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { useFormContext, useController } from 'react-hook-form'

const SizeButton = ({ children, disabled, ...rest }: ButtonProps) => {
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

const FilterSize = () => {
  const { control } = useFormContext()
  const { field } = useController({
    name: 'size',
    control,
  })

  const { t } = useTranslation()
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    min: 0,
    value: field.value,
    max: 7,
    inputMode: 'numeric',
    pattern: '[0-9]*',
    onChange: (value) => {
      field.onChange(Number(value).toFixed(0))
    },
  })

  const isDisabled = useMemo(() => Number(field.value) === 0, [field.value])
  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <HStack
      maxW="320px"
      layerStyle="filter"
      cursor="auto"
      px="10px"
      backgroundColor="white"
    >
      <SizeButton {...dec} disabled={Number(field.value) === 0}>
        -
      </SizeButton>
      <Flex direction="column" alignItems="flex-start" h="100%">
        <Text color="gray.300" fontSize="xs" whiteSpace="nowrap">
          {t('filters.size.nbRoom')}
        </Text>
        <Box pos="relative" w="fit-content" m="0 auto">
          <Input
            {...input}
            value={isDisabled ? '' : field.value}
            name="size"
            border="none"
            px={0}
            h="20px"
            w="25px"
          />
          {!isDisabled && (
            <Text
              pos="absolute"
              right="0"
              top="50%"
              transform="translateY(-50%)"
            >
              ½
            </Text>
          )}
        </Box>
      </Flex>
      <SizeButton {...inc}>+</SizeButton>
    </HStack>
  )
}

export default FilterSize
