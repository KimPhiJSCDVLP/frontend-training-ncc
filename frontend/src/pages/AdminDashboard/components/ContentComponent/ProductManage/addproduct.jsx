import React from 'react'
import { Input,Button, Modal, Form  } from 'antd'
import Title from 'antd/lib/typography/Title';
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
                label="Title"
                name="title"
                rules={[{ required: true }]}
            >
             <Input/>
            </Form.Item>
            <Form.Item
                label="Image"
                name="image"
                rules={[{ required: true }]}
            >
                <Input />
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
                <Input 
                    placeholder="x"
                    maxLength={6}
                    minLength = {5}
                />
            </Form.Item>
                <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true }]}
            >
                <ReactQuill/>
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
