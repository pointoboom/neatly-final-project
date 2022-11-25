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

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

function EditProfilePage() {
  const [userdata, setUserdata] = useState(null);

  const [imageUrl, setImageUrl] = useState();
  const [loading, setLoading] = useState(false);

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [idnumber, setIdnumber] = useState("");
  const [country, setCountry] = useState("");
  const [dob, setDob] = useState("");
  // const [dob, setDob] = usePersistedState("dob", null);

  const [avatars, setAvatars] = useState({});
  const { editUser, register } = useAuth();

  const getData = async () => {
    const token = localStorage.getItem("token");
    const userdata = jwtDecode(token);
    const res = await axios.get(`http://localhost:4000/auth/${userdata.id}`);
    // console.log(res.data.data);
    setUserdata(res.data.data[0]);

    setFullName(res.data.data[0].fullname);
    setEmail(res.data.data[0].email);
    setIdnumber(res.data.data[0].id_number);
    setCountry(res.data.data[0].country);
    setImageUrl(res.data.data[0].profile_picture);

    
    setDob(res.data.data[0].date_of_birth);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(userdata)
  console.log(dob)

  const handleChange = (info) => {
    getBase64(info.file.originFileObj, (url) => {
      setLoading(false);
      setImageUrl(url);
    });
    setAvatars({});
    const uniqueId = Date.now();
    setAvatars({
      [uniqueId]: info.file.originFileObj,
    });
  };
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("email", email);
    formData.append("idnumber", idnumber);
    formData.append("dob", dob);
    formData.append("country", country);


    for (let avatarKey in avatars) {
      formData.append("avatar", avatars[avatarKey]);
    }

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    console.log(formData);
    editUser(formData ,userdata.user_id);
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
                Profile
              </Text>
              <Button
                background="orange.600"
                color="white"
                px="40px"
                fontFamily={"Inter"}
                _hover={{ background: "#E76B39" }}
                // onClick={() => {
                //   console.log("Update Profile");
                // }}
                type="submit"
              >
                Update Profile
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
                  Basic Information
                </Text>
              </Flex>
              <Flex
                direction="column"
                fontFamily={"Inter"}
                fontSize="16px"
                mb="40px"
              >
                <FormControl>
                  <FormLabel mb="15px">Fullname</FormLabel>
                  <Input
                    placeholder="Enter your username"
                    width="full"
                    fontFamily={"Inter"}
                    fontSize="16px"
                    // id="fullname"
                    name="fullname"
                    type="text"
                    value={fullname}
                    onChange={(event) => {
                      setFullName(event.target.value);
                    }}
                    focusBorderColor="orange.500"
                  ></Input>
                </FormControl>
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
                      <FormLabel mb="15px">Email</FormLabel>
                      <Input
                        placeholder="Enter your email"
                        width="550px"
                        fontFamily={"Inter"}
                        fontSize="16px"
                        // id="email"
                        name="email"
                        type="text"
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                        focusBorderColor="orange.500"
                      ></Input>
                    </FormControl>
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
                      placeholder="Enter your username"
                      onChange={onChangeDate}
                      defaultValue={moment("We,02 Nov 2022", dateFormat)}
                      // defaultValue={dob ? moment("dob", dateFormat) : null}
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
                    <FormControl>
                      <FormLabel mb="15px">Id Number</FormLabel>
                      <Input
                        placeholder="Enter your ID Number"
                        width="550px"
                        fontFamily={"Inter"}
                        fontSize="16px"
                        // id="idnumber"
                        name="idnumber"
                        type="number"
                        value={idnumber}
                        onChange={(event) => {
                          setIdnumber(event.target.value);
                          console.log(event.target.value);
                        }}
                        focusBorderColor="orange.500"
                      ></Input>
                    </FormControl>
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
                      onChange={(event) => {
                        setCountry(event);
                      }}
                      value={country}
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
              <ImgCrop rotate>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  maxCount="1"
                  showUploadList={false}
                  onChange={handleChange}
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
              </ImgCrop>
            </Flex>
            <Divider mb="2.5rem" />
          </Flex>
        </Flex>
      </form>
    </>
  );
}

export default EditProfilePage;
