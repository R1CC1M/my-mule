import { Center, VStack, Text, Button, Heading } from "@chakra-ui/react"

const OpeningsSection: React.FC = () => {
    return (
        <Center>
            <VStack spacing={8} padding='60px 0'>
                <Heading>Work with us</Heading>
                <Text>We’re united by a desire to do great work while maintaining a stress-free work environment that’s designed to attract like-minded people who share our culture.</Text>
                <Button size='lg' backgroundColor='#5ba4e6' color='white'>See our current openings</Button>
            </VStack>
        </Center>
    )
}

export default OpeningsSection;