import {
  Flex,
  Text,
  Button,
  Input,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { countryList } from "../data/country";
import { DatePicker, Select, Upload } from "antd";
import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import ImgCrop from "antd-img-crop";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

import usePersistedState from "use-persisted-state-hook";
import axios from "axios";
import moment from "moment";
import { useAuth } from "../contexts/authentication";
const dateFormat = "dd,DD MMM YYYY";

function EditPaymentPage() {
  const [userdata, setUserdata] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [cardOwner, setCardOwner] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  // const [dob, setDob] = usePersistedState("dob", null);
  const { editPayment, register } = useAuth();

  const getData = async () => {
    const token = localStorage.getItem("token");
    const userdata = jwtDecode(token);
    const res = await axios.get(`http://localhost:4000/auth/${userdata.id}`);
    console.log(res.data.data);
    setUserdata(res.data.data[0]);
    setCardNumber(res.data.data[0].card_number);
    setCardOwner(res.data.data[0].card_owner);
    setCardExpiry(res.data.data[0].expiry_date);
    setCardCVV(res.data.data[0].cvc_cvv);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(userdata);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("cardNumber", cardNumber);
    formData.append("cardOwner", cardOwner);
    formData.append("cardExpiry", cardExpiry);
    formData.append("cardCVV", cardCVV);

    console.log(formData);
    editPayment(formData, userdata.user_id);
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <Flex
          className="register"
          direction="row"
          justify="center"
          align="center"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          bgSize="cover"
          pt="60px"
          pb="100px"
        >
          <Flex
            className="register-container"
            bg="white"
            p="80px"
            direction="column"
            borderRadius="5px"
          >
            <Flex
              className="register-title"
              justifyContent="space-between"
              alignItems="center"
              mb="80px"
            >
              <Text
                fontFamily={"Noto Serif"}
                fontSize="70px"
                color="grey.800"
                fontStyle="500"
              >
                Payment Method
              </Text>
              <Button
                background="orange.600"
                color="white"
                px="40px"
                fontFamily={"Inter"}
                _hover={{ background: "#E76B39" }}
                type="submit"
              >
                Update Payment Method
              </Button>
            </Flex>

            <Flex className="info-form" direction="column" mb="40px">
              <Flex mb="40px">
                <Text
                  fontFamily={"Inter"}
                  fontSize="20px"
                  color="gray.600"
                  fontStyle="600"
                >
                  Credit card
                </Text>
              </Flex>

              <Flex>
                <Flex direction="column" mr="50px">
                  <Flex
                    direction="column"
                    fontFamily={"Inter"}
                    fontSize="16px"
                    mb="40px"
                  >
                    <FormControl>
                      <FormLabel mb="15px">Card Number</FormLabel>
                      <Input
                        placeholder="Enter your card number"
                        width="550px"
                        fontFamily={"Inter"}
                        fontSize="16px"
                        // id="email"
                        name="email"
                        type="text"
                        value={cardNumber}
                        onChange={(event) => {
                          setCardNumber(event.target.value);
                        }}
                        focusBorderColor="orange.500"
                      ></Input>
                    </FormControl>
                  </Flex>

                  <Flex direction="column" fontFamily={"Inter"} fontSize="16px">
                    <Text mb="15px">Expiry Date</Text>
                    <Input
                      placeholder="MM/YY"
                      width="550px"
                      fontFamily={"Inter"}
                      fontSize="16px"
                      // id="email"
                      name="email"
                      type="text"
                      value={cardExpiry}
                      onChange={(event) => {
                        setCardExpiry(event.target.value);
                      }}
                      focusBorderColor="orange.500"
                    ></Input>
                  </Flex>
                </Flex>
                <Flex direction="column">
                  <Flex
                    direction="column"
                    fontFamily={"Inter"}
                    fontSize="16px"
                    mb="40px"
                  >
                    <FormControl>
                      <FormLabel mb="15px">Card Owner</FormLabel>
                      <Input
                        placeholder="Enter your card name"
                        width="550px"
                        fontFamily={"Inter"}
                        fontSize="16px"
                        // id="idnumber"
                        name="idnumber"
                        type="text"
                        value={cardOwner}
                        onChange={(event) => {
                          setCardOwner(event.target.value);
                          console.log(event.target.value);
                        }}
                        focusBorderColor="orange.500"
                      ></Input>
                    </FormControl>
                  </Flex>
                  <Flex direction="column" fontFamily={"Inter"} fontSize="16px">
                    <Text mb="15px">CVC/CVV</Text>
                    <Input
                      placeholder="CVC/CVV"
                      width="550px"
                      fontFamily={"Inter"}
                      fontSize="16px"
                      // id="email"
                      name="email"
                      type="text"
                      value={cardCVV}
                      onChange={(event) => {
                        setCardCVV(event.target.value);
                      }}
                      focusBorderColor="orange.500"
                    ></Input>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </form>
    </>
  );
}

export default EditPaymentPage;
