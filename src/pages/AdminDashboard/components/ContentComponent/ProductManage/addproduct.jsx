import React from 'react'
import { Input,Button, Modal, Form } from 'antd'
import Title from 'antd/lib/typography/Title';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
export default function AddProduct(props) {
  return (
    <Modal  width={1000} visible={props.visible} footer={null} onCancel={props.onCancel}>
        <Title level={3}>Add Product</Title>
        <Form
            name="edit"
            layout = "vertical"
            type = "danger"
            onFinish={props.addProductHandle}
            >
            <Form.Item
                label="Username"
                name="username"
            >
             <ReactQuill/>
            
            </Form.Item>
            <Form.Item
                label="Mathcore"
                name="mathcore"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Englishcore"
                name="englishcore"
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button className='edit-product' type="danger" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
    </Modal>
  )
}
