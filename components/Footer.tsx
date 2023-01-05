import {
  Box,
  Heading,
  HStack,
  VStack,
  Center,
  Spacer,
  Flex,
  Divider,
  Link,
} from '@chakra-ui/react'
import { FOOTER } from '../constants'
import { FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <Box padding="3em 0" backgroundColor="#f3f3f3" marginTop="auto">
      <Center>
        <HStack spacing={16} alignItems="flex-start">
          {FOOTER.map((section, index) => (
            <VStack key={index} alignItems="flex-start">
              <Heading size="xs">{section.title}</Heading>
              {section.Links.map((link, index) => (
                <Link href="#" color="#2a6eb2" key={index}>
                  {link}
                </Link>
              ))}
            </VStack>
          ))}
          <Spacer />
          <VStack alignItems="flex-start">
            <Box color="#2a6eb2">
              <Link href="#">English (EN-GB) £GBP</Link>
            </Box>
            <Divider />
            <Flex flexDirection="row" color="#2a6eb2">
              <Link href="#" marginRight="30px">
                Site Map
              </Link>
              <Link href="#" marginRight="30px">
                Privacy & Teams
              </Link>
            </Flex>
            <Divider />
            <Flex flexDirection="row">
              <Link href="#" marginRight="30px">
                <FaInstagram />
              </Link>
              <Link href="#" marginRight="30px">
                <FaYoutube />
              </Link>
            </Flex>
          </VStack>
        </HStack>
      </Center>
    </Box>
  )
}

export default Footer
