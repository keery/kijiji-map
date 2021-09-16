import React from 'react'
import {
  Skeleton,
  VStack,
  Divider,
  Flex,
  HStack,
  AspectRatio,
} from '@chakra-ui/react'
import HomeIcon from 'public/assets/img/home.svg'

const AdCardSkeleton = () => (
  <Flex
    borderRadius="30px"
    p={2.5}
    w="100%"
    pr={{ base: 2.5, sm: 4 }}
    boxShadow="0px 0px 7px #ccc"
  >
    <Flex
      w="100%"
      className="adCard"
      role="group"
      direction={{ base: 'column', sm: 'row' }}
    >
      <AspectRatio
        borderRadius="20px"
        overflow="hidden"
        w={{ base: '100%', sm: '200px', md: '180px', lg: '250px' }}
      >
        <Skeleton />
      </AspectRatio>

      <Flex
        py={1}
        pr={{ base: 2, sm: 0 }}
        pl={{ base: 2, sm: 3 }}
        pt={{ base: 3, sm: 0 }}
        w={{ base: '100%', sm: '1px' }}
        flex={1}
        direction="column"
        justifyContent="space-between"
      >
        <Flex h="100%" direction="column" justifyContent="space-between">
          <Flex direction="column">
            {/* TITLE */}
            <Skeleton w="80%" h="25px" mb={2} />
            {/* TAGS */}
            <HStack justifyContent="flex-start">
              <Skeleton w="30%" h="29px" />
              <Skeleton w="30%" h="29px" />
            </HStack>
          </Flex>
          {/* DATE + PRICE */}
          <Flex
            justifyContent="space-between"
            alignItems="flex-end"
            pb={3}
            pt={{ base: 2, sm: 6, lg: 0 }}
          >
            <Skeleton w="20%" h="14px" />
            <Skeleton w="25%" h="30px" />
          </Flex>
        </Flex>
        <HStack
          justifyContent="space-evenly"
          borderTop="1px solid"
          borderColor="gray.100"
          pt={2}
          pb={{ base: 0, sm: 2 }}
          px={1}
          alignItems="center"
          spacing={3}
        >
          <Skeleton w="10%" h="20px" pb={1} />
          <Divider orientation="vertical" h="85%" />
          <Skeleton w="10%" h="20px" pb={1} />
          <Divider orientation="vertical" h="85%" />
          <Skeleton w="10%" h="20px" pb={1} />
          <Divider orientation="vertical" h="85%" />
          <Skeleton w="10%" h="20px" pb={1} />
          <Divider
            orientation="vertical"
            h="85%"
            display={{ base: 'none', lg: 'block' }}
          />
          <Skeleton
            w="10%"
            h="20px"
            pb={1}
            display={{ base: 'none', lg: 'block' }}
          />
        </HStack>
      </Flex>
    </Flex>
  </Flex>
)

const ListAdsSkeleton = () => {
  return (
    <>
      <Flex alignItems="center" pt={5}>
        <HomeIcon width="28px" height="28px" fill="#f1454f" />
        <Skeleton ml={3} h="20px" w="50%" />
      </Flex>
      <VStack spacing={{ base: 3, md: 6 }} pt={3} pb={6} w="100%" bg="white">
        <AdCardSkeleton />
        <AdCardSkeleton />
        <AdCardSkeleton />
        <AdCardSkeleton />
        <AdCardSkeleton />
        <AdCardSkeleton />
      </VStack>
    </>
  )
}

export default ListAdsSkeleton
