import React, { useMemo } from 'react'
import {
  useNumberInput,
  HStack,
  Button,
  Input,
  Box,
  Text,
  ButtonProps,
  Flex,
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { useFormContext, useController } from 'react-hook-form'

const SizeButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button
      {...rest}
      cursor="pointer!important"
      disabled={false}
      h={{ base: '32px', lg: '20px' }}
      w={{ base: '32px', lg: '20px' }}
      minW="0"
      fontSize="xl"
      variant="unstyled"
      lineHeight={1}
      color="kijiji.main"
      border={{ base: '1px solid', lg: 'none' }}
      borderColor="gray.100"
    >
      {children}
    </Button>
  )
}

interface Props {
  name: string
}

const FilterSize = ({ name }: Props) => {
  const { control } = useFormContext()
  const { field } = useController({
    name,
    control,
    defaultValue: 0,
  })

  const { t } = useTranslation()
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      name,
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
      <SizeButton {...dec}>-</SizeButton>
      <Flex
        direction="column"
        alignItems="flex-start"
        h={{ base: 'auto', lg: '100%' }}
      >
        <Text
          color="gray.400"
          fontSize="xs"
          whiteSpace="nowrap"
          display={{ base: 'none', lg: 'block' }}
        >
          {t('filters.size.nbRoom')}
        </Text>
        <Box pos="relative" w="fit-content" m="0 auto">
          <Input
            {...input}
            value={field.value}
            border="none"
            px={0}
            h="20px"
            w="25px"
            readOnly
            textAlign={{ base: 'center', lg: 'left' }}
          />
          {!isDisabled && (
            <Text
              display={{ base: 'none', lg: 'block' }}
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
