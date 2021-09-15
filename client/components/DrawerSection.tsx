import { Box, Text } from '@chakra-ui/react'

interface Props {
  title: string
  children: React.ReactNode
}

const DrawerSection = ({ title, children }: Props) => (
  <Box w="100%">
    <Text fontSize="lg" mb={5} mt={4} fontWeight="bold">
      {title}
    </Text>
    {children}
  </Box>
)

export default DrawerSection
