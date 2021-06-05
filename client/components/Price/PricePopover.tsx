import React from 'react'
import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Text,
  Stat,
  StatNumber,
  StatLabel,
  Flex,
  Button,
  Input,
  Circle,
  useDisclosure,
} from '@chakra-ui/react'
import PriceSlider from '~components/Slider/PriceSlider'
import { useTranslation } from 'next-i18next'
import { useFormContext } from 'react-hook-form'

interface Props {
  children: React.ReactNode
}

const InputPrice = ({ name }) => {
  const { register } = useFormContext()

  return (
    <Flex layerStyle="priceInput">
      <Text>$</Text>
      <Input
        type="number"
        fontSize="2xl"
        fontWeight="600"
        name={name}
        ref={register}
        variant="unstyled"
      />
    </Flex>
  )
}

const PricePopover = ({ children }: Props) => {
  const { t } = useTranslation()
  const { onOpen, onClose, isOpen } = useDisclosure()

  return (
    <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      <PopoverTrigger>
        <Box>{children}</Box>
      </PopoverTrigger>
      <PopoverContent
        borderRadius="xl"
        zIndex={999}
        w="400px"
        _focus={{
          boxShadow: 'none',
          outline: 'none',
        }}
      >
        <PopoverBody p={0}>
          <Box px={8} py={8}>
            <Text fontSize="lg" mb={5}>
              {t('filters.price.title')}
            </Text>
            <PriceSlider />
            <Flex justifyContent="space-between" mt={12} alignItems="center">
              <Stat>
                <StatLabel>{t('filters.price.minFull')}</StatLabel>
                <StatNumber>
                  <InputPrice name="min" />
                </StatNumber>
              </Stat>
              <Circle size="10px" mx={2.5} mt={5} />
              <Stat>
                <StatLabel>{t('filters.price.maxFull')}</StatLabel>
                <StatNumber>
                  <InputPrice name="max" />
                </StatNumber>
              </Stat>
            </Flex>
          </Box>
          <Flex
            justifyContent="flex-end"
            py={4}
            px={8}
            borderTop="1px solid"
            borderColor="gray.200"
          >
            <Button type="submit" onClick={onClose}>
              {t('filters.submit')}
            </Button>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default PricePopover
