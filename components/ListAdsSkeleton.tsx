import React from 'react'
import { Skeleton, VStack } from '@chakra-ui/react'

const ListAdsSkeleton = () => {
  return (
    <VStack spacing={6} py={6} w="45vw" maxW="750px" bg="white" px={6}>
      <Skeleton borderRadius="30px" w="100%" minH="220px" />
      <Skeleton borderRadius="30px" w="100%" minH="220px" />
      <Skeleton borderRadius="30px" w="100%" minH="220px" />
      <Skeleton borderRadius="30px" w="100%" minH="220px" />
      <Skeleton borderRadius="30px" w="100%" minH="220px" />
      <Skeleton borderRadius="30px" w="100%" minH="220px" />
    </VStack>
  )
}

export default ListAdsSkeleton
