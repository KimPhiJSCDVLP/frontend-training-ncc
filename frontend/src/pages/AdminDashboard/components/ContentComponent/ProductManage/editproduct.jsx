import React, { useEffect } from 'react'
import { Input,Button, Modal, Form } from 'antd'
import ReactQuill, { Quill } from "react-quill"
import Title from 'antd/lib/typography/Title';
export default function EditProduct({curentDataEdit,visible,editProductHandle,onCancel}) {
    const [form] = Form.useForm()
    useEffect(() => {
        form.setFieldsValue(curentDataEdit)
       }, [form, curentDataEdit])
       console.log(curentDataEdit);
    return (
        < Modal width={1000} visible={visible} footer = {null} onCancel={onCancel}>
        <Title level={3}>Edit Product</Title>
        <Form
            name="edit"
            layout = "vertical"
            form={form}
            initialValues={curentDataEdit}
            onFinish={ (e) => editProductHandle(e)}
            >
            <Form.Item
                label="Title"
                name="title"
            >
             <Input/>
            </Form.Item>
            <Form.Item
                label="Image"
                name="image"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Price"
                name="price"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Quantity"
                name="quantity"
            >
                <Input />
            </Form.Item>
                <Form.Item
                label="Description"
                name="description"
            >
            <ReactQuill/>
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
