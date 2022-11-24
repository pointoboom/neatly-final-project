import React from "react";
import {
  Flex,
  Text,
  Button,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Upload, Form } from "antd";
import "antd/dist/antd.min.css";
import usePersistedState from "use-persisted-state-hook";
import { useNavigate } from "react-router-dom";
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
function CreateRoom() {
  const [imageUrl, setImageUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [newRoom, setNewRoom] = useState({});
  const [roomType, setRoomtype] = useState("");
  const [roomSize, setRoomSize] = useState("");
  const [bedType, setBedType] = useState("");

  const navigate = useNavigate();

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const mainImgChange = (info) => {
    getBase64(info.file.originFileObj, (url) => {
      setLoading(false);
      setImageUrl(url);
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
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 4,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 20,
      },
    },
  };
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 20,
      },
    },
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
                onClick={() => {
                  navigate("/roomproperty/createroom");
                }}
              >
                Create
              </Button>
            </Flex>
          </Flex>

          <Flex align="center" justify="center" display="flex">
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
                  onChange={(event) => {
                    setNewRoom({
                      ...newRoom,
                      ["room_type"]: event.target.value,
                    });
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
                <Input></Input>
              </Flex>
              <Flex className="price-night" direction="column" mb="40px">
                <FormLabel fontFamily={"Inter"} fontSize="16px" fontStyle="400">
                  Price per Night(THB)*
                </FormLabel>
                <Input></Input>
              </Flex>
              <Flex className="room-description" direction="column" mb="40px">
                <FormLabel fontFamily={"Inter"} fontSize="16px" fontStyle="400">
                  Room Description*
                </FormLabel>
                <Textarea></Textarea>
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
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
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
                  <Form.List name="names">
                    {(fields, { add, remove }, { errors }) => (
                      <>
                        {fields.map((field, index) => (
                          <Form.Item required={false} key={field.key}>
                            <Form.Item
                              {...field}
                              validateTrigger={["onChange", "onBlur"]}
                              noStyle
                            >
                              <FormLabel
                                fontFamily={"Inter"}
                                fontSize="16px"
                                fontStyle="400"
                              >
                                Amenity*
                              </FormLabel>
                              <Input width="80%" mr="40px"></Input>
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
                          >
                            Add
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
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CreateRoom;
