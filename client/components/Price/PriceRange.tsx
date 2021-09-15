import React from 'react'
import {
  Box,
  Text,
  Flex,
  Stat,
  StatNumber,
  StatLabel,
  Circle,
  Input,
} from '@chakra-ui/react'
import PriceSlider from '~components/Slider/PriceSlider'
import { useTranslation } from 'next-i18next'
import { useFormContext } from 'react-hook-form'

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

const PriceRange = () => {
  const { t } = useTranslation()
  return (
    <Box px={{ base: 2, sm: 8 }} py={8}>
      <Text fontSize="lg" mb={5} display={{ base: 'none', lg: 'block' }}>
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
        <Circle size="10px" mx={{ base: 0.5, sm: 2.5 }} mt={5} />
        <Stat>
          <StatLabel>{t('filters.price.maxFull')}</StatLabel>
          <StatNumber>
            <InputPrice name="max" />
          </StatNumber>
        </Stat>
      </Flex>
    </Box>
  )
}

export default PriceRange
