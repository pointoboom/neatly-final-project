import { Button, Text } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Stack, HStack, VStack, StackDivider } from "@chakra-ui/react";
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
          src="./images/rooms_details/superior_garden_view.svg"
          margin="2rem"
          width="400px"
          height="250px"
        />
        <Flex direction="column" justify="center" ml="1rem" mb="2rem">
          <Heading fontSize="xl">Superior Garden View</Heading>
          <Text fontSize="xs" color="gray.700" fontWeight="thin" my="1rem">
            2 Guests&ensp;|&ensp;1 Double bed&ensp;|&ensp;32 sqm
          </Text>
          <Text fontSize="xs" fontFamily="inter">
            Rooms (36sqm) with full garden views, 1<br /> single bed, bathroom
            with bathtub & <br />
            shower.
          </Text>
        </Flex>
        <Flex direction="column" justify="center">
          <Text fontSize="xs" as="s" textAlign="end">
            THB 3,100.00
          </Text>
          <Heading fontSize="sm" textAlign="end">
            THB 2,500.00
          </Heading>
          <Text fontSize="xs" mt="1rem" mb="3rem" textAlign="end">
            Per Night <br /> (Including Taxes & Fees)
          </Text>
          <Flex align="center" mb="2.25rem">
            <Text color="orange.500" mr="2rem" fontWeight="semibold">
              Room Detail
            </Text>
            <Button bg="#C14817" color="white" size="lg">
              Book Now
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex>
        <img
          src="./images/rooms_details/deluxe.svg"
          margin="2rem"
          width="400px"
          height="250px"
        />
        <Flex direction="column" justify="center" ml="1rem" mb="2rem">
          <Heading fontSize="xl">Superior Garden View</Heading>
          <Text fontSize="xs" color="gray.700" fontWeight="thin" my="1rem">
            2 Guests&ensp;|&ensp;1 Double bed&ensp;|&ensp;32 sqm
          </Text>
          <Text fontSize="xs">
            Rooms (36sqm) with full garden views, 1<br /> single bed, bathroom
            with bathtub & <br />
            shower.
          </Text>
        </Flex>
        <Flex direction="column" justify="center">
          <Text fontSize="xs" as="s" textAlign="end">
            THB 3,100.00
          </Text>
          <Heading fontSize="sm" textAlign="end">
            THB 2,500.00
          </Heading>
          <Text fontSize="xs" mt="1rem" mb="3rem" textAlign="end">
            Per Night <br /> (Including Taxes & Fees)
          </Text>
          <Flex align="center" mb="2.25rem">
            <Text color="orange.500" mr="2rem" fontWeight="semibold">
              Room Detail
            </Text>
            <Button bg="#C14817" color="white" size="lg">
              Book Now
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex>
        <img
          src="./images/rooms_details/superior.svg"
          margin="2rem"
          width="400px"
          height="150px"
        />
        <Flex direction="column" justify="center" ml="1rem" mb="2rem">
          <Heading fontSize="xl">Superior Garden View</Heading>
          <Text fontSize="xs" color="gray.700" fontWeight="thin" my="1rem">
            2 Guests&ensp;|&ensp;1 Double bed&ensp;|&ensp;32 sqm
          </Text>
          <Text fontSize="xs">
            Rooms (36sqm) with full garden views, 1<br /> single bed, bathroom
            with bathtub & <br />
            shower.
          </Text>
        </Flex>
        <Flex direction="column" justify="center">
          <Text fontSize="xs" as="s" textAlign="end">
            THB 3,100.00
          </Text>
          <Heading fontSize="sm" textAlign="end">
            THB 2,500.00
          </Heading>
          <Text fontSize="xs" mt="1rem" mb="3rem" textAlign="end">
            Per Night <br /> (Including Taxes & Fees)
          </Text>
          <Flex align="center" mb="2.25rem">
            <Text color="orange.500" mr="2rem" fontWeight="semibold">
              Room Detail
            </Text>
            <Button bg="#C14817" color="white" size="lg">
              Book Now
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex>
        <img
          src="./images/rooms_details/supreme.svg"
          margin="2rem"
          width="400px"
          height="150px"
        />
        <Flex direction="column" justify="center" ml="1rem" mb="2rem">
          <Heading fontSize="xl">Superior Garden View</Heading>
          <Text fontSize="xs" color="gray.700" fontWeight="thin" my="1rem">
            2 Guests&ensp;|&ensp;1 Double bed&ensp;|&ensp;32 sqm
          </Text>
          <Text fontSize="xs">
            Rooms (36sqm) with full garden views, 1<br /> single bed, bathroom
            with bathtub & <br />
            shower.
          </Text>
        </Flex>
        <Flex direction="column" justify="center">
          <Text fontSize="xs" as="s" textAlign="end">
            THB 3,100.00
          </Text>
          <Heading fontSize="sm" textAlign="end">
            THB 2,500.00
          </Heading>
          <Text fontSize="xs" mt="1rem" mb="3rem" textAlign="end">
            Per Night <br /> (Including Taxes & Fees)
          </Text>
          <Flex align="center" mb="2.25rem">
            <Text color="orange.500" mr="2rem" fontWeight="semibold">
              Room Detail
            </Text>
            <Button bg="#C14817" color="white" size="lg">
              Book Now
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </VStack>
  );
}

export default RoomsSearch;
