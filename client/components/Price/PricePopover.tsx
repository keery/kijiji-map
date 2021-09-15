import React from 'react'
import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Text,
  Flex,
  Button,
  Input,
  useDisclosure,
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import PriceRange from '~components/Price/PriceRange'

interface Props {
  children: React.ReactNode
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
          <PriceRange />
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
