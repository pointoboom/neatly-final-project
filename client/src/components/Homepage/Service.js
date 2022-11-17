import { Image, Stack, Text, Flex } from "@chakra-ui/react";

function Service() {
  return (
    <Flex
      id="service"
      display="flex"
      direction="column"
      justify="center"
      width="100%"
      align="center"
      backgroundColor="rgba(70, 92, 80, 1)"
      h="480px"
    >
      <Text
        fontSize="68px"
        align="center"
        textColor="white"
        fontFamily={"Noto Serif Display"}
        paddingBottom="60px"
      >
        Service & Facilities
      </Text>
      <Flex
        display="flex"
        alignItems="center"
        direction="row"
        justifyContent="space-evenly"
        fontFamily={"Inter"}
      >
        <Stack direction="column" align="center" w="150px">
          <Image boxSize="40px" src="./images/service/spa.svg" alt="Spa" />
          <Text fontSize="16px" align="center" textColor="white">
            Spa
          </Text>
        </Stack>

        <Stack direction="column" align="center" w="150px">
          <Image boxSize="40px" src="./images/service/sauna.svg" alt="Sauna" />
          <Text fontSize="16px" align="center" textColor="white">
            Sauna
          </Text>
        </Stack>

        <Stack direction="column" align="center" w="150px">
          <Image
            boxSize="40px"
            src="./images/service/fitness.svg"
            alt="Fitness"
          />
          <Text fontSize="16px" align="center" textColor="white">
            Fitness
          </Text>
        </Stack>

        <Stack direction="column" align="center" w="150px">
          <Image
            boxSize="40px"
            src="./images/service/lounge.svg"
            alt="Arrival Lounge"
          />
          <Text fontSize="16px" align="center" textColor="white">
            Arrival Lounge
          </Text>
        </Stack>

        <Stack direction="column" align="center" w="150px">
          <Image
            boxSize="40px"
            src="./images/service/wifi.svg"
            alt="Free Wifi"
          />
          <Text fontSize="16px" align="center" textColor="white">
            Free Wifi
          </Text>
        </Stack>

        <Stack direction="column" align="center" w="150px">
          <Image
            boxSize="40px"
            src="./images/service/parking.svg"
            alt="Parking"
          />
          <Text fontSize="16px" align="center" textColor="white">
            Parking
          </Text>
        </Stack>

        <Stack direction="column" align="center" w="150px">
          <Image
            boxSize="40px"
            src="./images/service/operation.svg"
            alt="24 hours operation"
          />
          <Text fontSize="16px" align="center" textColor="white">
            24 hours operation
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default Service;
