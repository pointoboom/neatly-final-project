import React from "react";
import {
  Flex,
  Text,
  Button,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import "antd/dist/antd.min.css";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

function RoomPropertyEdit() {
  const [roomDetail, setRoomDetail] = useState([]);
  const [imageUrl, setImageUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [mainImg, setMainImg] = useState({});
  const [newRoom, setNewRoom] = useState({});
  const [roomType, setRoomType] = useState("");
  const [roomSize, setRoomSize] = useState("");
  const [bedType, setBedType] = useState("");
  const [guest, setGuest] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [amenity, setAmenity] = useState([]);

  const navigate = useNavigate();
  const params = useParams();

  const getData = async () => {
    const res = await axios.get(`http://localhost:4000/rooms/${params.id}`);

    setRoomDetail(res.data.data);
    setImageUrl(res.data.data[0].main_images);
    setNewRoom({
      ...res.data.data[0],
      ["newAmenity"]: res.data.data[0].amenity.split(","),
    });
    res.data.data.map((item) => {
      setRoomType(item.type_name);
      setRoomSize(item.room_size);
      setBedType(item.bed_type);
      setGuest(item.guest);
      setPrice(item.price);
      setDescription(item.description);
      setAmenity(item.amenity.split(","));
    });

    const data = res.data.data[0].gallery_images.map((item) => {
      const temp = {
        uid: res.data.data[0].gallery_images.indexOf(item),
        url: item,
      };
      return temp;
    });
    setFileList(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const mainImgChange = (info) => {
    getBase64(info.file.originFileObj, (url) => {
      setLoading(false);
      setImageUrl(url);
    });
    setMainImg({});
    const uniqueId = Date.now();
    setMainImg({
      [uniqueId]: info.file.originFileObj,
    });
  };
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const handleUpdate = async (event) => {
    const token = localStorage.getItem("token");
    const userdata = jwtDecode(token);
    event.preventDefault();
    const formData = new FormData();
    formData.append("room_type", roomType);
    formData.append("user_id", userdata.id);
    formData.append("room_size", roomSize);
    formData.append("bed_type", bedType);
    formData.append("guest", guest);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("amenity", amenity);
    for (let mainImgKey in mainImg) {
      formData.append("main_img", mainImg[mainImgKey]);
    }
    for (let i of fileList) {
      formData.append("gallery_img", i.originFileObj);
    }
    await axios.put(`http://localhost:4000/rooms/${params.id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };
  const handeleDelete = async (event) => {
    event.preventDefault();
    const res = await axios.delete(`http://localhost:4000/rooms/${params.id}`);
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

  return (
    <Flex direction="row" bg="#F6F7FC">
      <Sidebar />
      <Flex w="100%" justifyContent="center">
        <Flex direction="column" bg="#F6F7FC" w="full">
          <Flex
            h="80px"
            bg="white"
            mb="5px"
            display="flex"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {roomDetail.map((item) => {
              return (
                <Flex>
                  <Text fontSize="20px" ml="60px" fontWeight="semibold">
                    {item.type_name}
                  </Text>
                </Flex>
              );
            })}

            <Flex my="20px">
              <Button
                mr="20px"
                background="#C14817"
                color="white"
                px="50px"
                onClick={(e) => {
                  handleUpdate(e);
                  navigate("/");
                }}
              >
                Update
              </Button>
            </Flex>
          </Flex>

          <Flex align="center" justify="center" display="flex" k mb="20px">
            <Flex
              bg="white"
              py="40px"
              mt="20px"
              direction="column"
              className="room-detail"
              width="60vw"
              px="80px"
            >
              <Text
                mb="40px"
                fontFamily={"Inter"}
                fontSize="20px"
                color="gray.600"
                fontStyle="600"
              >
                Basic Information
              </Text>
              <Flex direction="column" className="room-type" mb="40px">
                <FormLabel fontFamily={"Inter"} fontSize="16px" fontStyle="400">
                  Room Type *
                </FormLabel>
                <Input
                  value={roomType}
                  onChange={(event) => {
                    setRoomType(event.target.value);
                  }}
                ></Input>
              </Flex>
              <Flex className="room-size-bed-type" direction="row" mb="40px">
                <Flex className="room-size" direction="column" mr="10vw">
                  <FormLabel
                    fontFamily={"Inter"}
                    fontSize="16px"
                    fontStyle="400"
                  >
                    Room size(sqm)*
                  </FormLabel>
                  <Input
                    value={roomSize}
                    width="20vw"
                    onChange={(event) => {
                      setRoomSize(event.target.value);
                    }}
                  ></Input>
                </Flex>
                <Flex className="bed-type" direction="column">
                  <FormLabel
                    fontFamily={"Inter"}
                    fontSize="16px"
                    fontStyle="400"
                  >
                    Bed Type *
                  </FormLabel>
                  <Input
                    value={bedType}
                    width="20vw"
                    onChange={(event) => {
                      setBedType(event.target.value);
                    }}
                  ></Input>
                </Flex>
              </Flex>
              <Flex className="guest-room" direction="column" mb="40px">
                <FormLabel fontFamily={"Inter"} fontSize="16px" fontStyle="400">
                  Guest(s)*
                </FormLabel>
                <Input
                  value={guest}
                  onChange={(event) => {
                    setGuest(event.target.value);
                  }}
                ></Input>
              </Flex>
              <Flex className="price-night" direction="column" mb="40px">
                <FormLabel fontFamily={"Inter"} fontSize="16px" fontStyle="400">
                  Price per Night(THB)*
                </FormLabel>
                <Input
                  value={price}
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                ></Input>
              </Flex>
              <Flex className="room-description" direction="column" mb="40px">
                <FormLabel fontFamily={"Inter"} fontSize="16px" fontStyle="400">
                  Room Description*
                </FormLabel>
                <Textarea
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                ></Textarea>
              </Flex>
              <Text
                mb="40px"
                fontFamily={"Inter"}
                fontSize="20px"
                color="gray.600"
                fontStyle="600"
              >
                Room Image
              </Text>
              <Flex className="main-image" direction="column" mb="40px">
                <FormLabel fontFamily={"Inter"} fontSize="16px" fontStyle="400">
                  Main Image*
                </FormLabel>

                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  maxCount="1"
                  showUploadList={false}
                  onChange={mainImgChange}
                  style={{ width: "500px" }}
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
              <Flex className="gallerry-image" direction="column" mb="40px">
                <FormLabel fontFamily={"Inter"} fontSize="16px" fontStyle="400">
                  Image Gallery(At least 4 pictures)*
                </FormLabel>

                <Upload
                  customRequest={dummyRequest}
                  fileList={fileList}
                  name="avatar"
                  listType="picture-card"
                  onChange={handleChange}
                >
                  {fileList.length >= 10 ? null : uploadButton}
                </Upload>
              </Flex>
              <Text
                fontFamily={"Inter"}
                fontSize="20px"
                color="gray.600"
                fontStyle="600"
                mb="40px"
              >
                Room Amenities
              </Text>

              <Flex flexDirection="column">
                {amenity.map((item, index) => {
                  return (
                    <Flex alignItems="center">
                      <Flex flexDirection="column" w="100%" mt="36px">
                        <Text fontSize="18px" fontFamily={"Inter"}>
                          Amenitiy{" "}
                        </Text>
                        <Input
                          fontFamily={"Inter"}
                          value={item}
                          onChange={(event) => {
                            const temp = amenity.map((item, i) => {
                              if (i === index) {
                                return (item = event.target.value);
                              } else {
                                return item;
                              }
                            });
                            setAmenity(temp);
                          }}
                        />
                      </Flex>
                      <Button
                        onClick={(e) => {
                          const result = amenity.filter(
                            (item, i) => i !== index
                          );
                          setAmenity(result);
                        }}
                        bg="#FFFFF"
                        color="#E76B39"
                        fontFamily={"Open Sans"}
                      >
                        Delete
                      </Button>
                    </Flex>
                  );
                })}

                <Button
                  onClick={(e) => {
                    setAmenity([...amenity, ""]);
                  }}
                  fontFamily={"Open Sans"}
                  bg="#FFFFF"
                  w="200px"
                  border="1px"
                  borderColor="#E76B39"
                  color="#E76B39"
                  mt="36px"
                >
                  + Add Amenity
                </Button>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            mb="50px"
            pr="250px"
          >
            <Button
              bg="none"
              w="100px"
              onClick={(e) => {
                handeleDelete(e);
                navigate("/");
              }}
            >
              Delete Room
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default RoomPropertyEdit;
