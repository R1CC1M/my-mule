import { Flex, Heading, Box, Text, Image } from '@chakra-ui/react'
import { CUSTOMERS } from '../constants'

const CustomersSection: React.FC = () => {
  return (
    <Flex flexDirection="row-reverse" justifyContent="center" padding="60px 0">
      <Box
        position="relative"
        textAlign="left"
        right="30px"
        marginLeft="-700px"
        zIndex="1"
        minWidth="400px"
        maxWidth="450px"
      >
        <Heading size="lg" margin="0.2rem 0 0.5em">
          {CUSTOMERS.HEADING}
        </Heading>
        <Text>{CUSTOMERS.DESCRIPTION}</Text>
      </Box>
      <Image src={CUSTOMERS.IMAGESRC} alt="image" marginLeft="-260px" />
    </Flex>
  )
}

export default CustomersSection
