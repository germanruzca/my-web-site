import { Box, Image } from "./elements";
import { useMediaQuery} from "@chakra-ui/react";

export const CustomImage = (props) => {
    const [isSmallerThan450] = useMediaQuery('(max-width: 450px)')

    return (
        <Box boxShadow="md" borderWidth="10px" p="6" rounded="md" bg="white" display={"flex"} justifyContent={'center'}>
            <Image {...props} width={isSmallerThan450 ? '100%' : '60%'} title={props.alt} textAlign={'center'}/>
        </Box>
    );
};
