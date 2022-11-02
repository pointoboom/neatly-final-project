import { Button, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
// import { Image } from "@chakra-ui/react";
import { VStack, StackDivider } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

function RoomsSearch() {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
      alignItems="center"
      margin="2rem"
    >
      <Flex>
        <img
          class="mr-12 my-6"
          src="./images/rooms_details/superior_garden_view.svg"
          width="400px"
          height="250px"
        />
        <Flex direction="column" justify="center" ml="1rem" mb="2rem">
          <Heading fontSize="2xl" fontFamily={"Inter"}>
            Superior Garden View
          </Heading>
          <Text
            fontSize="s"
            color="gray.700"
            fontWeight="thin"
            my="1rem"
            fontFamily={"Inter"}
          >
            2 Guests&ensp;|&ensp;1 Double bed&ensp;|&ensp;32 sqm
          </Text>
          <Text fontSize="s" fontFamily={"inter"}>
            Rooms (36sqm) with full garden views, 1<br /> single bed, bathroom
            with bathtub & <br />
            shower.
          </Text>
        </Flex>
        <Flex direction="column" justify="center" mt="3rem">
          <Text fontSize="s" as="s" textAlign="end" fontFamily={"Inter"}>
            THB 3,100.00
          </Text>
          <Heading fontSize="sm" textAlign="end" fontFamily={"Inter"}>
            THB 2,500.00
          </Heading>
          <Text
            fontSize="s"
            mt="1rem"
            mb="3rem"
            textAlign="end"
            fontFamily={"Inter"}
          >
            Per Night <br /> (Including Taxes & Fees)
          </Text>
          <Flex align="center" mb="1rem" pt="1rem">
            <Text
              color="orange.500"
              mr="2rem"
              fontWeight="semibold"
              fontFamily={"Open Sans"}
              fontSize="lg"
            >
              Room Detail
            </Text>
            <Button
              bg="#C14817"
              color="white"
              size="lg"
              fontFamily={"Open Sans"}
              fontSize="lg"
            >
              Book Now
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex>
        <img
          class="mr-12 my-6"
          src="./images/rooms_details/deluxe.svg"
          width="400px"
          height="250px"
        />
        <Flex direction="column" justify="center" ml="1rem" mb="2rem">
          <Heading fontSize="2xl" fontFamily={"Inter"}>
            Deluxe
          </Heading>
          <Text
            fontSize="s"
            color="gray.700"
            fontWeight="thin"
            my="1rem"
            fontFamily={"Inter"}
          >
            2 Guests&ensp;|&ensp;1 Double bed&ensp;|&ensp;32 sqm
          </Text>
          <Text fontSize="s" fontFamily={"Inter"}>
            Rooms (36sqm) with full garden views, 1<br /> single bed, bathroom
            with bathtub & <br />
            shower.
          </Text>
        </Flex>
        <Flex direction="column" justify="center" mt="3rem">
          <Text fontSize="s" as="s" textAlign="end" fontFamily={"Inter"}>
            THB 3,100.00
          </Text>
          <Heading fontSize="sm" textAlign="end" fontFamily={"Inter"}>
            THB 2,500.00
          </Heading>
          <Text
            fontSize="s"
            mt="1rem"
            mb="3rem"
            textAlign="end"
            fontFamily={"Inter"}
          >
            Per Night <br /> (Including Taxes & Fees)
          </Text>
          <Flex align="center" mb="1rem" pt="1rem">
            <Text
              color="orange.500"
              mr="2rem"
              fontWeight="semibold"
              fontFamily={"Open Sans"}
              fontSize="lg"
            >
              Room Detail
            </Text>
            <Button
              bg="#C14817"
              color="white"
              size="lg"
              fontFamily={"Open Sans"}
              fontSize="lg"
            >
              Book Now
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex>
        <img
          class="mr-12 my-6"
          src="./images/rooms_details/superior.svg"
          width="400px"
          height="150px"
        />
        <Flex direction="column" justify="center" ml="1rem" mb="2rem">
          <Heading fontSize="2xl" fontFamily={"Inter"}>
            Superior
          </Heading>
          <Text
            fontSize="s"
            color="gray.700"
            fontWeight="thin"
            my="1rem"
            fontFamily={"Inter"}
          >
            2 Guests&ensp;|&ensp;1 Double bed&ensp;|&ensp;32 sqm
          </Text>
          <Text fontSize="s" fontFamily={"Inter"}>
            Rooms (36sqm) with full garden views, 1<br /> single bed, bathroom
            with bathtub & <br />
            shower.
          </Text>
        </Flex>
        <Flex direction="column" justify="center" mt="3rem">
          <Text fontSize="s" as="s" textAlign="end" fontFamily={"Inter"}>
            THB 3,100.00
          </Text>
          <Heading fontSize="sm" textAlign="end" fontFamily={"Inter"}>
            THB 2,500.00
          </Heading>
          <Text
            fontSize="s"
            mt="1rem"
            mb="3rem"
            textAlign="end"
            fontFamily={"Inter"}
          >
            Per Night <br /> (Including Taxes & Fees)
          </Text>
          <Flex align="center" mb="1rem" pt="1rem">
            <Text
              color="orange.500"
              mr="2rem"
              fontWeight="semibold"
              fontFamily={"Open Sans"}
              fontSize="lg"
            >
              Room Detail
            </Text>
            <Button
              bg="#C14817"
              color="white"
              size="lg"
              fontFamily={"Open Sans"}
              fontSize="lg"
            >
              Book Now
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex>
        <img
          class="mr-12 my-6"
          src="./images/rooms_details/supreme.svg"
          width="400px"
          height="150px"
        />
        <Flex direction="column" justify="center" ml="1rem" mb="2rem">
          <Heading fontSize="2xl" fontFamily={"Inter"}>
            Supreme
          </Heading>
          <Text
            fontSize="s"
            color="gray.700"
            fontWeight="thin"
            my="1rem"
            fontFamily={"Inter"}
          >
            2 Guests&ensp;|&ensp;1 Double bed&ensp;|&ensp;32 sqm
          </Text>
          <Text fontSize="s" fontFamily={"Inter"}>
            Rooms (36sqm) with full garden views, 1<br /> single bed, bathroom
            with bathtub & <br />
            shower.
          </Text>
        </Flex>
        <Flex direction="column" justify="center" mt="3rem">
          <Text fontSize="s" as="s" textAlign="end" fontFamily={"Inter"}>
            THB 3,100.00
          </Text>
          <Heading fontSize="sm" textAlign="end" fontFamily={"Inter"}>
            THB 2,500.00
          </Heading>
          <Text
            fontSize="s"
            mt="1rem"
            mb="3rem"
            textAlign="end"
            fontFamily={"Inter"}
          >
            Per Night <br /> (Including Taxes & Fees)
          </Text>
          <Flex align="center" mb="1rem" pt="1rem">
            <Text
              color="orange.500"
              mr="2rem"
              fontWeight="semibold"
              fontFamily={"Open Sans"}
              fontSize="lg"
            >
              Room Detail
            </Text>
            <Button
              bg="#C14817"
              color="white"
              size="lg"
              fontFamily={"Open Sans"}
              fontSize="lg"
            >
              Book Now
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </VStack>
  );
}

export default RoomsSearch;