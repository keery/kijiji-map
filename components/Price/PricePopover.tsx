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
  useTheme,
} from '@chakra-ui/react'
import PriceSlider from '~components/Slider/PriceSlider'
import { useTranslation } from 'next-i18next'
import { useFormContext } from 'react-hook-form'

interface IPricePopover {
  children: React.ReactNode
}

const PricePopover = ({ children }: IPricePopover) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const { register } = useFormContext()

  return (
    <Popover>
      <PopoverTrigger>
        <Box>{children}</Box>
      </PopoverTrigger>
      <PopoverContent
        borderRadius="xl"
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
                  <Flex
                    alignItems="center"
                    border="1px solid"
                    borderColor="gray.300"
                    borderRadius="lg"
                    py={2}
                    px={2}
                  >
                    <Text>$</Text>
                    <Input
                      type="number"
                      fontSize="2xl"
                      fontWeight="600"
                      name="min"
                      ref={register}
                      variant="unstyled"
                    />
                  </Flex>
                </StatNumber>
              </Stat>
              <Circle size="10px" mx={2.5} mt={5} />
              <Stat>
                <StatLabel>{t('filters.price.maxFull')}</StatLabel>
                <StatNumber>
                  <Flex
                    alignItems="center"
                    border="1px solid"
                    borderColor="gray.300"
                    borderRadius="lg"
                    py={2}
                    px={2.5}
                  >
                    <Text>$</Text>
                    <Input
                      type="number"
                      fontSize="2xl"
                      fontWeight="600"
                      name="max"
                      ref={register}
                      variant="unstyled"
                    />
                  </Flex>
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
            <Button>{t('filters.submit')}</Button>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default PricePopover
