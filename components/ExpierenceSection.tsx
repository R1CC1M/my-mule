import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { EXPERIENCE } from '../constants'

const ExperienceSection: React.FC = () => {
  return (
    <Flex flexDirection="row-reverse" justifyContent="center" padding="60px 0">
      <Box
        position="relative"
        textAlign="left"
        right="30px"
        marginLeft="-300px"
        zIndex="1"
        minWidth="400px"
        maxWidth="450px"
      >
        <Heading size="lg" margin="0.2rem 0 0.5em">
          {EXPERIENCE.HEADING}
        </Heading>
        <Text>{EXPERIENCE.DESCRIPTION}</Text>
      </Box>
      <Image src={EXPERIENCE.IMAGESRC} alt="image" />
    </Flex>
  )
}

export default ExperienceSection
