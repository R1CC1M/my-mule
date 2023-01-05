import { Center, HStack, Link, Text } from "@chakra-ui/react"

const Subnav: React.FC = () => {
    return (
        <Center height='81px' padding='0 30px' backgroundColor='#f3f3f3'>
            <HStack spacing='15px'>
                <Link><Text as='b'>About</Text></Link>
                <Link>Careers</Link>
                <Link>Press</Link>
            </HStack>
        </Center>
    )
}

export default Subnav