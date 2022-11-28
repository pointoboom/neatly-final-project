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
import { Upload, Form } from "antd";
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
  const navigate = useNavigate();
  const params = useParams();

  const getData = async () => {
    const res = await axios.get(`http://localhost:4000/rooms/${params.id}`);

    setRoomDetail(res.data.data);
    setImageUrl(res.data.data[0].main_images);
    res.data.data[0].gallery_images.map((item, index) => {
      const temp = { uid: index, url: item };
      const tempGal = [...fileList, temp];
      setFileList(tempGal);
    });
    setNewRoom(res.data.data[0]);
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
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  const handleUpdate = (event) => {
    console.log(newRoom);
    // const token = localStorage.getItem("token");
    // const userdata = jwtDecode(token);
    // event.preventDefault();
    // const formData = new FormData();
    // const amenityArray = [];
    // formData.append("room_type", newRoom.room_type);
    // formData.append("user_id", userdata.id);
    // formData.append("room_size", newRoom.room_size);
    // formData.append("bed_type", newRoom.bed_type);
    // formData.append("guest", newRoom.guest);
    // formData.append("price", newRoom.price);
    // formData.append("description", newRoom.description);
    // //*Fix */
    // for (let i in newRoom.amenity) {
    //   amenityArray.push(newRoom.amenity[i]);
    // }
    // formData.append("amenity", amenityArray);
    // for (let mainImgKey in mainImg) {
    //   formData.append("main_img", mainImg[mainImgKey]);
    // }
    // for (let i of fileList) {
    //   formData.append("gallery_img", i.originFileObj);
    // }
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
            <Flex>
              <Text fontSize="20px" ml="60px" fontWeight="semibold">
                Create New Room
              </Text>
            </Flex>
            <Flex my="20px">
              <Button
                mr="20px"
                background="white"
                borderColor="#C14817"
                border="1px"
                color="#C14817"
                px="50px"
                onClick={() => {
                  navigate("/roomproperty");
                }}
              >
                Cancel
              </Button>
              <Button
                mr="20px"
                background="#C14817"
                color="white"
                px="50px"
                onClick={(e) => {
                  handleUpdate();
                }}
              >
                Create
              </Button>
            </Flex>
          </Flex>
          {roomDetail.map((room, index) => {
            return (
              <Flex align="center" justify="center" display="flex" key={index}>
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
                    <FormLabel
                      fontFamily={"Inter"}
                      fontSize="16px"
                      fontStyle="400"
                    >
                      Room Type *
                    </FormLabel>
                    <Input
                      value={room.type_name}
                      onChange={(event) => {
                        setNewRoom({
                          ...newRoom,
                          ["room_type"]: event.target.value,
                        });
                      }}
                    ></Input>
                  </Flex>
                  <Flex
                    className="room-size-bed-type"
                    direction="row"
                    mb="40px"
                  >
                    <Flex className="room-size" direction="column" mr="10vw">
                      <FormLabel
                        fontFamily={"Inter"}
                        fontSize="16px"
                        fontStyle="400"
                      >
                        Room size(sqm)*
                      </FormLabel>
                      <Input
                        value={room.room_size}
                        width="20vw"
                        onChange={(event) => {
                          setNewRoom({
                            ...newRoom,
                            ["room_size"]: event.target.value,
                          });
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
                        value={room.bed_type}
                        width="20vw"
                        onChange={(event) => {
                          setNewRoom({
                            ...newRoom,
                            ["bed_type"]: event.target.value,
                          });
                        }}
                      ></Input>
                    </Flex>
                  </Flex>
                  <Flex className="guest-room" direction="column" mb="40px">
                    <FormLabel
                      fontFamily={"Inter"}
                      fontSize="16px"
                      fontStyle="400"
                    >
                      Guest(s)*
                    </FormLabel>
                    <Input
                      value={room.guest}
                      onChange={(event) => {
                        setNewRoom({
                          ...newRoom,
                          ["guest"]: event.target.value,
                        });
                      }}
                    ></Input>
                  </Flex>
                  <Flex className="price-night" direction="column" mb="40px">
                    <FormLabel
                      fontFamily={"Inter"}
                      fontSize="16px"
                      fontStyle="400"
                    >
                      Price per Night(THB)*
                    </FormLabel>
                    <Input
                      value={room.price}
                      onChange={(event) => {
                        setNewRoom({
                          ...newRoom,
                          ["price"]: event.target.value,
                        });
                      }}
                    ></Input>
                  </Flex>
                  <Flex
                    className="room-description"
                    direction="column"
                    mb="40px"
                  >
                    <FormLabel
                      fontFamily={"Inter"}
                      fontSize="16px"
                      fontStyle="400"
                    >
                      Room Description*
                    </FormLabel>
                    <Textarea
                      value={room.description}
                      onChange={(event) => {
                        setNewRoom({
                          ...newRoom,
                          ["description"]: event.target.value,
                        });
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
                    <FormLabel
                      fontFamily={"Inter"}
                      fontSize="16px"
                      fontStyle="400"
                    >
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
                    <FormLabel
                      fontFamily={"Inter"}
                      fontSize="16px"
                      fontStyle="400"
                    >
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
                  <Flex className="amenity" direction="column" mb="40px">
                    <Form name="dynamic_form_item" onFinish={onFinish}>
                      <Form
                        validateTrigger={["onChange", "onBlur"]}
                        noStyle
                        name="input"
                      >
                        <FormLabel
                          fontFamily={"Inter"}
                          fontSize="16px"
                          fontStyle="400"
                        >
                          Amenity*
                        </FormLabel>
                        {room.amenity ? (
                          room.amenity.split(",").map((item, index) => {
                            return (
                              <Input
                                value={item}
                                width="80%"
                                mr="40px"
                                onChange={(event, key = { index }) => {
                                  setNewRoom({
                                    ...newRoom,
                                    ["amenity"]: { key: event.target.value },
                                  });
                                }}
                                mb="40px"
                              ></Input>
                            );
                          })
                        ) : (
                          <Input
                            width="80%"
                            mr="40px"
                            onChange={(event) => {
                              setNewRoom({
                                ...newRoom,
                                ["amenity"]: { 1: event.target.value },
                              });
                            }}
                            mb="40px"
                          ></Input>
                        )}
                      </Form>
                      <Form.List name="names">
                        {(fields, { add, remove }, { errors }) => (
                          <>
                            {fields.map((field, index) => (
                              <Form.Item
                                required={false}
                                key={field.key}
                                name="input"
                              >
                                <Form.Item
                                  {...field}
                                  validateTrigger={["onChange", "onBlur"]}
                                  noStyle
                                  name="input"
                                >
                                  <FormLabel
                                    fontFamily={"Inter"}
                                    fontSize="16px"
                                    fontStyle="400"
                                  >
                                    Amenity*
                                  </FormLabel>

                                  <Input
                                    width="80%"
                                    mr="40px"
                                    onChange={(event) => {
                                      const i =
                                        room.amenity.split(",").length + 1;
                                      setNewRoom({
                                        ...newRoom,
                                        ["amenity"]: {
                                          ...newRoom.amenity,
                                          [i]: event.target.value,
                                        },
                                      });
                                    }}
                                  ></Input>
                                </Form.Item>
                                {fields.length >= 1 ? (
                                  <Button
                                    className="dynamic-delete-button"
                                    onClick={() => remove(field.name)}
                                  >
                                    delete
                                  </Button>
                                ) : null}
                              </Form.Item>
                            ))}
                            <Form.Item>
                              <Button
                                onClick={() => {
                                  add();
                                }}
                                color="#C14817"
                                border="1px"
                                borderColor="#C14817"
                              >
                                + Add Amenity
                              </Button>

                              <Form.ErrorList errors={errors} />
                            </Form.Item>
                          </>
                        )}
                      </Form.List>
                    </Form>
                  </Flex>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default RoomPropertyEdit;
