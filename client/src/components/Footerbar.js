import { Image, Stack, Text, Flex, Grid, GridItem } from "@chakra-ui/react";

function Footerbar() {
  return (
    <Flex
      display="flex"
      direction="column"
      justify="center"
      width="100%"
      align="center"
      backgroundColor="rgba(47, 62, 53, 1)"
      height="480px"
      fontFamily={"Inter"}
    >
      <Flex
        width="full"
        height="315px"
        justifyContent="space-between"
        px="200px"
      >
        <Flex
          className="neatly-logo"
          width="500px"
          height="150px"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Stack direction="column" align="center" width="150px">
            <Image
              width="180"
              height="50"
              src="/images/footerbar/logo.svg"
              alt="Neatly Hotel logo"
            />
          </Stack>
          <Text
            fontSize="20px"
            align="center"
            textColor="white"
            paddingTop="30px"
            fontWeight="600"
          >
            Neatly Hotel
          </Text>
          <Text
            fontSize="16px"
            align="center"
            textColor="white"
            paddingTop="8px"
          >
            The best hotel for rising your experience
          </Text>
        </Flex>
        <Flex
          className="neatly-contact"
          width="379px"
          height="315px"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Text
            fontSize="16px"
            align="center"
            textColor="white"
            paddingTop="10px"
            paddingBottom="20px"
            fontWeight="600"
          >
            CONTACT
          </Text>

          <Flex
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            fontFamily={"IBM Plex Sans Thai"}
          >
            <Flex direction="row" justifyContent="center" alignItems="center">
              <Image
                boxSize="20px"
                src="/images/footerbar/tel.svg"
                alt="phone number"
              />
              <Text fontSize="16px" textColor="white" padding="10px">
                +66 99 999 9999
              </Text>
            </Flex>

            <Flex direction="row" justifyContent="center" alignItems="center">
              <Image
                boxSize="20px"
                src="/images/footerbar/email.svg"
                alt="email"
              />
              <Text fontSize="16px" textColor="white" padding="12px">
                contact@neatlyhotel.com
              </Text>
            </Flex>

            <Flex
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Image
                boxSize="20px"
                src="/images/footerbar/location.svg"
                alt="location"
                marginTop="12px"
              />
              <Text fontSize="16px" textColor="white" padding="12px">
                188 Phaya Thai Rd, Thung Phaya Thai, Ratchathewi, Bangkok 10400
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        width="1500px"
        height="1px"
        backgroundColor="rgba(70, 92, 80, 1)"
      ></Flex>

      <Flex
        width="full"
        height="100px"
        justifyContent="space-between"
        alignItems="flex-end"
        px="200px"
      >
        <Flex width="170px" height="100px">
          <Stack
            className="neatly-socialmedia"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="150px"
          >
            <Image
              boxSize="24px"
              src="/images/footerbar/facebook.svg"
              alt="facebook link"
            />
            <Image
              boxSize="24px"
              src="/images/footerbar/instagram.svg"
              alt="instagram link"
            />
            <Image
              boxSize="24px"
              src="/images/footerbar/tweet.svg"
              alt="tweet link"
            />
          </Stack>
        </Flex>
        <Flex
          className="neatly-copyright"
          width="500px"
          height="100px"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Text
            fontSize="14px"
            textColor="rgba(213, 223, 218, 1)"
            padding="12px"
          >
            Copyright ©2022 Neatly Hotel
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footerbar;
