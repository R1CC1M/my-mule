import { Box, Center, Heading, Text } from "@chakra-ui/react";

const Hero: React.FC = () => {
  return (
    <Center
      backgroundImage="url(https://assets.stickermule.com/image/upload/c_lfill,fl_lossy,f_auto,q_auto:best,w_auto/re-store-shared/about-hero-2020-06@2x.jpg)"
      height="430px"
      backgroundPosition='bottom center'
      backgroundRepeat='no-repeat'
      backgroundSize='auto 100%'
      position="relative"
    >
      <Heading color="white" size="3xl">
        Hello we're Sticker Mule.
      </Heading>
    </Center>
  );
};

export default Hero;
