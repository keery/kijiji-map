import React from 'react'
import { Skeleton, VStack, Divider, Flex, HStack } from '@chakra-ui/react'

const AdCardSkeleton = () => (
  <Flex
    p={2.5}
    borderRadius="30px"
    w="100%"
    minH="220px"
    boxShadow="0px 0px 7px #ccc"
  >
    <Flex>
      <Skeleton w="250px" h="200px" borderRadius="20px" />
    </Flex>
    <Flex
      pl={5}
      py={1}
      w="1px"
      flex={1}
      direction="column"
      justifyContent="space-between"
    >
      <Flex h="100%" direction="column" justifyContent="space-between">
        <Flex direction="column">
          <Skeleton w="80%" h="25px" mb={2} />
          <HStack justifyContent="flex-start">
            <Skeleton w="30%" h="29px" />
            <Skeleton w="30%" h="29px" />
          </HStack>
        </Flex>
        <Flex justifyContent="space-between" alignItems="flex-end" pb={2}>
          <Skeleton w="20%" h="14px" />
          <Skeleton w="25%" h="30px" />
        </Flex>
      </Flex>
      <HStack
        justifyContent="space-between"
        borderTop="1px solid"
        borderColor="gray.100"
        py={2}
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
        <Divider orientation="vertical" h="85%" />
        <Skeleton w="10%" h="20px" pb={1} />
      </HStack>
    </Flex>
  </Flex>
)

const ListAdsSkeleton = () => {
  return (
    <VStack spacing={6} py={6} w="100%" bg="white">
      <AdCardSkeleton />
      <AdCardSkeleton />
      <AdCardSkeleton />
      <AdCardSkeleton />
      <AdCardSkeleton />
      <AdCardSkeleton />
    </VStack>
  )
}

export default ListAdsSkeleton
