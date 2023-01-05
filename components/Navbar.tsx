import { ReactElement } from "react";
import { Box, Button, ButtonGroup, Flex, Heading, Icon, Link, Popover, PopoverContent, PopoverTrigger, Spacer, Stack, useColorModeValue, Text, HStack } from "@chakra-ui/react";
import Logo from './Logo';
import MenuItem from "./MenuItem";
import MenuDropdownItem from "./MenuDropdownItem";
import { IoCartSharp } from 'react-icons/io5'


const Navbar: React.FC = () => {
    return (
        <Flex height='50px' width='100%' alignItems='center' position='static' top='0' padding='15px 25px' backgroundColor='#4E2817' color='white'>
            <Box marginRight='20px'>
                <Logo />
            </Box>
            <HStack flexGrow='1' spacing='24px'>
                <MenuDropdownItem title='Products' subItems={PRODUCT_ITEMS} />
                <MenuDropdownItem title="Tools" subItems={TOOLS_ITEMS} />
                <MenuItem>Samples</MenuItem>
                <MenuItem>Deals</MenuItem>
                <Spacer />
                <Link><IoCartSharp /></Link>
                <Link>Login in</Link>
                <Link>Sign up</Link>
            </HStack>
        </Flex>
    )
}

type Item = {
    name: string
}

const PRODUCT_ITEMS: Item[] = [
    { name: 'Stickers' },
    { name: 'Labels' },
    { name: 'Magnets' },
    { name: 'Badges' },
    { name: 'Packaging' },
    { name: 'T-Shirts' },
    { name: 'More' },
]

const TOOLS_ITEMS: Item[] = [
    { name: 'Studio' },
    { name: 'Trace' },
    { name: 'Upscale'},
    { name: 'Redraw' },
    { name: 'Print' },
    { name: 'Ship' },
]

export default Navbar;