import NextLink from 'next/link';
import { Link } from "@chakra-ui/react"
import { ReactNode } from 'react';

type Props = {
    children: ReactNode,
};

const MenuItem: React.FC<Props> = ({ children }) => {
    return (
        <Link as={NextLink} href='#'>{children}</Link>
    )
}

export default MenuItem;