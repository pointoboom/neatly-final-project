import {
  Flex,
  Text,
  Button,
  Input,
  Divider,
  FormControl,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { countryList } from "../data/country";
import { DatePicker, Select, Upload } from "antd";
import React, { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { useAuth } from "../contexts/authentication";

function RegisterPage() {
  const [imageUrl, setImageUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [idnumber, setIdnumber] = useState("");
  const [cardnum, setCardnum] = useState("");
  const [cardowner, setCardowner] = useState("");
  const [expdate, setExpdate] = useState("");
  const [cvc, setCvc] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const { register } = useAuth();
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
  const onChangeDate = (value) => {
    setDob(value._d);
  };
  const handleCountry = (value) => {
    setCountry(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username,
      password,
      fullname,
      email,
      idnumber,
      cardnum,
      cardowner,
      expdate,
      cvc,
      dob,
      country,
    };
    register(data);
  };

  return (
    <>
      <Navbar />
      <FormControl>
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
                  id="fullname"
                  name="fullname"
                  type="text"
                  value={fullname}
                  onChange={(event) => {
                    setFullName(event.target.value);
                  }}
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
                      id="username"
                      name="username"
                      type="text"
                      value={username}
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}
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
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    ></Input>
                  </Flex>
                  <Flex direction="column" fontFamily={"Inter"} fontSize="16px">
                    <Text mb="15px">Date of Birth</Text>
                    <DatePicker
                      format="dd,DD MMM YYYY"
                      style={{
                        width: "550px",
                        fontFamily: "Inter",
                        fontSize: "30px",
                        paddingLeft: "15px",
                      }}
                      onChange={onChangeDate}
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
                      id="email"
                      name="email"
                      type="text"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
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
                      id="idnumber"
                      name="idnumber"
                      type="number"
                      value={idnumber}
                      onChange={(event) => {
                        setIdnumber(event.target.value);
                      }}
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
                      onChange={handleCountry}
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
            <Divider mb="2.5rem" />
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
                    id="cardnumber"
                    name="cardnumber"
                    type="number"
                    value={cardnum}
                    onChange={(event) => {
                      setCardnum(event.target.value);
                    }}
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
                    id="cardowner"
                    name="cardowner"
                    type="text"
                    value={cardowner}
                    onChange={(event) => {
                      setCardowner(event.target.value);
                    }}
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
                    id="expiredate"
                    name="expiredate"
                    type="text"
                    value={expdate}
                    onChange={(event) => {
                      setExpdate(event.target.value);
                    }}
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
                    id="cvc"
                    name="cvc"
                    type="text"
                    value={cvc}
                    onChange={(event) => {
                      setCvc(event.target.value);
                    }}
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
      </FormControl>
    </>
  );
}
export default RegisterPage;