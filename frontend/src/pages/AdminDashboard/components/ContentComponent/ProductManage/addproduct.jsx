import React from 'react'
import { Input,Button, Modal, Form ,message, Upload ,Progress ,InputNumber ,Select  } from 'antd'
import { InboxOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import Title from 'antd/lib/typography/Title';
import axios from 'axios';
import ReactQuill, { Quill } from "react-quill"
import 'react-quill/dist/quill.snow.css'
export default function AddProduct(props) {
    const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        }
      };
        const { Option } = Select;
        const [categoriesProduct, setcategoriesProduct] = useState([]);
          // GET CATEGORY
        useEffect( () => {
            axios
              .get("/api/admin/product-category/")
              .then((res) => {
                const categoriesProduct = res.data;
                setcategoriesProduct(categoriesProduct.data);
              })
              .catch((error) => console.log(error));
          }, []);

          const [progress, setProgress] = useState(0);
          const uploadImage = async (options) => {
              const { onSuccess, onError, file, onProgress } = options;
              const fmData = new FormData();
              const config = {
                  headers: { "content-type": "multipart/form-data" },
                  onUploadProgress: (event) => {
                      const percent = Math.floor((event.loaded / event.total) * 100);
                      setProgress(percent);
                      if (percent === 100) {
                          setTimeout(() => setProgress(0), 1000);
                      }
                      onProgress({ percent: (event.loaded / event.total) * 100 });
                  },
              };
              fmData.append("file", file);
              try {
                  const res = await axios.post("/api/admin/upload", fmData, config);
                  return onSuccess(res.data.file);
              } catch (err) {
                  console.log("Eroor: ", err);
                  const error = new Error("Some error");
                  onError({ err });
              }
          };
  return (
    <Modal  width={1000} visible={props.visible} footer={null} onCancel={props.onCancel}>
        <Title level={3}>Add Product</Title>
        <Form
            name="edit"
            layout = "vertical"
            type = "danger"
            onFinish={props.addProductHandle}
            validateMessages={validateMessages}
        >
            <Form.Item
                label="Tên sản phẩm"
                name="name"
                rules={[{ required: true }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                rules={[
                    {
                        required: true,
                        message: "Vui lòng tải ảnh đại diện cho bài viết",
                    },
                ]}
                name="thumbnail"
                valuePropName="file"
                getValueFromEvent={(e) => e && e.file.response}
            >
                <Upload.Dragger
                    name="file"
                    accept="image/*"
                    multiple={false}
                    customRequest={uploadImage}
                    listType="picture-card"
                    className="image-upload-grid"
                    showUploadList={true}
                >
                <div>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                        Kéo ảnh vào để tải ảnh lên
                    </p>
                </div>
                {progress > 0 ? <Progress percent={progress} /> : null}
            </Upload.Dragger>
                </Form.Item>
            <Form.Item
                label="Số lượng sản phẩm"
                name="quantity"
                rules={[{ required: true }]}
            >
                <InputNumber style={{ width: '100%' }} min={1} max={100} defaultValue={1}/>
            </Form.Item>
            <Form.Item
                label="Price"
                name="price"
                rules={[{ 
                    required: true, 
                    message: "A value must be entered",
                    pattern: new RegExp(/^[0-9]+$/)
                }]}
            >
                <InputNumber style={{ width: '100%' }}  defaultValue={10000}  />
            </Form.Item>
                <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true }]}
            >
                <ReactQuill/>
            </Form.Item>
            <Form.Item name="categories" label="Danh mục" rules={[{ required: true }]}>
                <Select
                    name={'categories'}
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    
                >
                    {categoriesProduct.map((item) => (
                        <Option key={item.id} value={item.id}>
                            {item.name}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item>
                <Button className='edit-product' type="danger"  htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
    </Modal>
  )
}
