import { Flex, Box, Text, Button, Input } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { countryList } from "../data/country";
import { DatePicker, Select, Upload } from "antd";
import React, { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
function RegisterPage() {
  const [imageUrl, setImageUrl] = useState();
  const [loading, setLoading] = useState(false);
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
      <Navbar />
      <Flex
        className="register"
        direction="row"
        justify="center"
        align="center"
        bgImage="url('/images/hero_section.svg')"
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
          <Flex className="register-title">
            <Text
              fontFamily={"Noto Serif"}
              fontSize="70px"
              color="grey.800"
              fontStyle="500"
              mb="80px"
            >
              Register
            </Text>
          </Flex>
          <Flex className="info-form" direction="column" mb="40px">
            <Flex mb="40px">
              <Text
                fontFamily={"Inter"}
                fontSize="20px"
                color="gray.600"
                fontStyle="600"
              >
                Basic Information
              </Text>
            </Flex>
            <Flex
              direction="column"
              fontFamily={"Inter"}
              fontSize="16px"
              mb="40px"
            >
              <Text mb="15px">Fullname</Text>
              <Input
                placeholder="Enter your username"
                width="full"
                fontFamily={"Inter"}
                fontSize="16px"
              ></Input>
            </Flex>
            <Flex>
              <Flex direction="column" mr="50px">
                <Flex
                  direction="column"
                  fontFamily={"Inter"}
                  fontSize="16px"
                  mb="40px"
                >
                  <Text mb="15px">Username</Text>
                  <Input
                    placeholder="Enter your username"
                    width="550px"
                    fontFamily={"Inter"}
                    fontSize="16px"
                  ></Input>
                </Flex>
                <Flex
                  direction="column"
                  fontFamily={"Inter"}
                  fontSize="16px"
                  mb="40px"
                >
                  <Text mb="15px">Password</Text>
                  <Input
                    placeholder="Enter your password"
                    width="550px"
                    fontFamily={"Inter"}
                    fontSize="16px"
                  ></Input>
                </Flex>
                <Flex direction="column" fontFamily={"Inter"} fontSize="16px">
                  <Text mb="15px">Date od Birth</Text>
                  <DatePicker
                    format="dd,DD MMM YYYY"
                    style={{
                      width: "550px",
                      fontFamily: "Inter",
                      fontSize: "30px",
                      paddingLeft: "15px",
                    }}
                    placeholder="Enter your username"
                  />
                </Flex>
              </Flex>
              <Flex direction="column">
                <Flex
                  direction="column"
                  fontFamily={"Inter"}
                  fontSize="16px"
                  mb="40px"
                >
                  <Text mb="15px">Email</Text>
                  <Input
                    placeholder="Enter your email"
                    width="550px"
                    fontFamily={"Inter"}
                    fontSize="16px"
                  ></Input>
                </Flex>
                <Flex
                  direction="column"
                  fontFamily={"Inter"}
                  fontSize="16px"
                  mb="40px"
                >
                  <Text mb="15px">Id Number</Text>
                  <Input
                    placeholder="Enter your ID Number"
                    width="550px"
                    fontFamily={"Inter"}
                    fontSize="16px"
                  ></Input>
                </Flex>
                <Flex direction="column" fontFamily={"Inter"} fontSize="16px">
                  <Text mb="15px">Country</Text>
                  <Select
                    placeholder="Select your country"
                    options={countryList.map((item) => ({
                      label: item.name,
                      value: item.name,
                    }))}
                    style={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                    }}
                  ></Select>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex className="picture-upload" direction="column" mb="40px">
            <Flex mb="40px">
              <Text
                fontFamily={"Inter"}
                fontSize="20px"
                color="gray.600"
                fontStyle="600"
              >
                Profile Picture
              </Text>
            </Flex>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              // beforeUpload={beforeUpload}
              // onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </Flex>
          <Flex className="card-form" direction="column" mb="60px">
            <Flex mb="40px">
              <Text
                fontFamily={"Inter"}
                fontSize="20px"
                color="gray.600"
                fontStyle="600"
              >
                Credit Card
              </Text>
            </Flex>
            <Flex mb="40px">
              <Flex direction="column" mr="50px">
                <Text
                  mb="15px"
                  fontFamily={"Inter"}
                  fontSize="16px"
                  color="gray.900"
                  fontStyle="400"
                >
                  Card Number
                </Text>
                <Input
                  placeholder="Enter your card number"
                  width="550px"
                  fontFamily={"Inter"}
                  fontSize="16px"
                ></Input>
              </Flex>
              <Flex direction="column">
                <Text
                  mb="15px"
                  fontFamily={"Inter"}
                  fontSize="16px"
                  color="gray.900"
                  fontStyle="400"
                >
                  Card Owner
                </Text>
                <Input
                  placeholder="Enter your card name"
                  width="550px"
                  fontFamily={"Inter"}
                  fontSize="16px"
                ></Input>
              </Flex>
            </Flex>
            <Flex>
              <Flex direction="column" mr="50px">
                <Text
                  mb="15px"
                  fontFamily={"Inter"}
                  fontSize="16px"
                  color="gray.900"
                  fontStyle="400"
                >
                  Expire Date
                </Text>
                <Input
                  placeholder="MM/YY"
                  width="550px"
                  fontFamily={"Inter"}
                  fontSize="16px"
                ></Input>
              </Flex>
              <Flex direction="column">
                <Text
                  mb="15px"
                  fontFamily={"Inter"}
                  fontSize="16px"
                  color="gray.900"
                  fontStyle="400"
                >
                  CVC/CVV
                </Text>
                <Input
                  placeholder="CVC/CVV"
                  width="550px"
                  fontFamily={"Inter"}
                  fontSize="16px"
                ></Input>
              </Flex>
            </Flex>
          </Flex>
          <Flex className="register-btn" direction="column">
            <Flex>
              <Button
                bg="orange.600"
                color="white"
                width="550px"
                mb="10px"
                _hover={{ background: "#E76B39" }}
              >
                Register
              </Button>
            </Flex>
            <Flex>
              <Text mr="10px">Already have an account?</Text>
              <Text color="orange.500">Login</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
export default RegisterPage;
