import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const Content: React.FC<Props> = ({ children }) => {
    return (
        <Box width='100%' margin='0 auto' padding='0 20px'>
            {children}
        </Box>
    )
}

export default Content