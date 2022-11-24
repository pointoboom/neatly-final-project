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
import { DatePicker, Select, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import "antd/dist/antd.min.css";
import axios from "axios";
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
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [roomProp, setRoomProp] = usePersistedState("roomstatus", null);

  const navigate = useNavigate();
  const getData = async () => {
    const res = await axios.get(`http://localhost:4000/rooms`);

    setRoomProp(res.data.data);
  };
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
  //   useEffect(() => {
  //     getData();
  //   }, []);

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
                <Input></Input>
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
                  <Input width="20vw"></Input>
                </Flex>
                <Flex className="bed-type" direction="column">
                  <FormLabel
                    fontFamily={"Inter"}
                    fontSize="16px"
                    fontStyle="400"
                  >
                    Bed Type *
                  </FormLabel>
                  <Input width="20vw"></Input>
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
                  // action="null"
                  customRequest={dummyRequest}
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  // fileList={fileList}
                  // showUploadList={false}
                  onChange={handleChange}
                  // onPreview={handlePreview}
                >
                  {fileList.length >= 10 ? null : uploadButton}
                </Upload>
              </Flex>
              <Text
                fontFamily={"Inter"}
                fontSize="20px"
                color="gray.600"
                fontStyle="600"
              >
                Room Amenities
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CreateRoom;
