import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  useDisclosure,
  Button,
  Text,
  Flex,
  CloseButton,
  VStack,
  StackDivider,
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import PriceRange from '~components/Price/PriceRange'
import FilterLocation from '~components/FilterLocation'
import FilterSize from '~components/FilterSize'
import DrawerSection from '~components/DrawerSection'
import Search from 'public/assets/img/search.svg'

interface Props {
  isLoading: boolean
  onSubmit: () => void
}

const FiltersDrawer = ({ isLoading, onSubmit }: Props) => {
  const { t } = useTranslation()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} size="full">
        <form onSubmit={onSubmit}>
          <DrawerContent zIndex="99999">
            <DrawerHeader
              borderBottomWidth="1px"
              borderColor="gray.100"
              display="flex"
              justifyContent="space-between"
            >
              <div />
              <Text>{t('filters.title')}</Text>
              <CloseButton onClick={onClose} />
            </DrawerHeader>
            <DrawerBody px={{ base: 3, sm: 6 }}>
              <VStack
                alignItems="flex-start"
                divider={<StackDivider bgColor="gray.100" opacity="0.4" />}
              >
                <DrawerSection title={t('filters.address')}>
                  <Flex pb={4}>
                    <FilterLocation />
                  </Flex>
                </DrawerSection>
                <DrawerSection title={t('filters.price.title')}>
                  <PriceRange />
                </DrawerSection>
                <DrawerSection title={t('filters.nbRoom')}>
                  <Flex justifyContent="space-between" alignItems="center">
                    <Text>{t('filters.bedroom')}</Text>
                    <FilterSize name="bedrooms" />
                  </Flex>
                  <Flex justifyContent="space-between" alignItems="center">
                    <Text>{t('filters.bathroom')}</Text>
                    <FilterSize name="bathrooms" />
                  </Flex>
                </DrawerSection>
              </VStack>
            </DrawerBody>
            <DrawerFooter borderTopWidth="1px" borderColor="gray.100" py={3}>
              <Button
                w="100%"
                leftIcon={<Search fontSize="20px" />}
                fontSize="sm"
                type="submit"
                onClick={onClose}
                loadingText={t('filters.searching')}
                isLoading={isLoading}
              >
                {t('filters.submit')}
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </form>
      </Drawer>
    </>
  )
}

export default FiltersDrawer
