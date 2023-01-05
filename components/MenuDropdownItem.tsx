import {
  Box,
  Flex,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react'
import { AiOutlineCaretDown } from 'react-icons/ai'

type MenuDropdownItemProps = {
  title: string
  subItems: {
    name: string
  }[]
}

const MenuDropdownItem: React.FC<MenuDropdownItemProps> = ({
  title,
  subItems,
}) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Flex flexDirection="row" alignItems="center">
          <Link>{title}</Link>
          <AiOutlineCaretDown />
        </Flex>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          {subItems.map((item, idx) => (
            <DropdownSubItem key={idx} name={item.name} />
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

type DropdownSubItemProps = {
  name: string
}
const DropdownSubItem: React.FC<DropdownSubItemProps> = ({ name }) => {
  return (
    <Box color="black">
      <Link href="#">{name}</Link>
    </Box>
  )
}

export default MenuDropdownItem
