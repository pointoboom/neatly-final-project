import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import {
  Flex,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import { useAuth } from "../../contexts/authentication";
import axios from "axios";
import { useParams } from "react-router-dom";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

function HotelInformationPage() {
  const [hotelName, setHotelName] = useState("");
  const [hotelTelNum, setHotelTelNum] = useState("");
  const [hotelEmail, setHotelEmail] = useState("");
  const [hotelLocation, setHotelLocation] = useState("");
  const [hotelDesc, setHotelDesc] = useState("");
  const [imageUrl, setImageUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [avatars, setAvatars] = useState({});

  const { editHotelinfo } = useAuth();
  const params = useParams();

  const getHotelInfo = async () => {
    const res = await axios.get(
      `http://localhost:4000/auth/hotelinfo/${params.id}`
    );
    setHotelName(res.data.data[0].hotel_name);
    setHotelDesc(res.data.data[0].hotel_desc);
    setHotelTelNum(res.data.data[0].hotel_num);
    setHotelLocation(res.data.data[0].hotel_location);
    setHotelEmail(res.data.data[0].hotel_email);
    setImageUrl(res.data.data[0].hotel_logo);
  };

  useEffect(() => {
    getHotelInfo();
  }, []);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("hotelName", hotelName);
    formData.append("hotelDesc", hotelDesc);
    formData.append("hotelTelNum", hotelTelNum);
    formData.append("hotelEmail", hotelEmail);
    formData.append("hotelLocation", hotelLocation);

    for (let avatarKey in avatars) {
      formData.append("avatar", avatars[avatarKey]);
    }

    editHotelinfo(formData, 1);
  };

  return (
    <Flex direction="row" bg="#F6F7FC">
      <Sidebar />
      <Flex w="100%" direction="column">
        <form onSubmit={handleSubmit}>
          <Flex direction="column" w="full">
            <Flex
              h="80px"
              bg="white"
              mb="5px"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex>
                <Text fontSize="20px" ml="60px" fontWeight="semibold">
                  Hotel Information
                </Text>
              </Flex>
              <Flex mr="60px">
                <Button
                  bg="#C14817"
                  color="white"
                  mr="20px"
                  borderColor="#C14817"
                  border="1px"
                  px="50px"
                  type="submit"
                >
                  Update
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            justify="center"
            display="flex"
            bg="white"
            direction="column"
            m="10"
            p="10"
          >
            <FormControl>
              <FormLabel mb="15px">Hotel Name *</FormLabel>
              <Input
                placeholder="Enter hotel name"
                fontFamily={"Inter"}
                fontSize="16px"
                name="hotelname"
                type="text"
                value={hotelName}
                onChange={(event) => {
                  setHotelName(event.target.value);
                }}
                focusBorderColor="orange.500"
              ></Input>
            </FormControl>
            <FormControl mt="45px">
              <FormLabel mb="15px">Hotel Description *</FormLabel>
              <Textarea
                height="300px"
                fontFamily={"Inter"}
                fontSize="16px"
                name="hoteldesc"
                type="text"
                value={hotelDesc}
                onChange={(event) => {
                  setHotelDesc(event.target.value);
                }}
                focusBorderColor="orange.500"
                placeholder="Enter hotel description"
              ></Textarea>
            </FormControl>

            <FormControl>
              <FormLabel mt="45px">Telephone number *</FormLabel>
              <Input
                placeholder="Enter telephone number"
                fontFamily={"Inter"}
                fontSize="16px"
                name="telnumber"
                type="text"
                value={hotelTelNum}
                onChange={(event) => {
                  setHotelTelNum(event.target.value);
                }}
                focusBorderColor="orange.500"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel mt="45px">Email *</FormLabel>
              <Input
                placeholder="Enter email"
                fontFamily={"Inter"}
                fontSize="16px"
                name="email"
                type="text"
                value={hotelEmail}
                onChange={(event) => {
                  setHotelEmail(event.target.value);
                }}
                focusBorderColor="orange.500"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel mt="45px">Hotel location *</FormLabel>
              <Input
                placeholder="Enter hotel location"
                fontFamily={"Inter"}
                fontSize="16px"
                name="location"
                type="text"
                value={hotelLocation}
                onChange={(event) => {
                  setHotelLocation(event.target.value);
                }}
                focusBorderColor="orange.500"
              ></Input>
            </FormControl>
            <Flex direction="column">
              <FormLabel mb="15px" mt="45px" ml="5px">
                Hotel Logo *
              </FormLabel>
              <Flex mt="10px" ml="10px">
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
              </Flex>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
}

export default HotelInformationPage;
