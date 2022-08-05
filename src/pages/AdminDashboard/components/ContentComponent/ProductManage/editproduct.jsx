import React, { useEffect } from 'react'
import { Input,Button, Modal, Form } from 'antd'

import Title from 'antd/lib/typography/Title';
export default function EditProduct({curentDataEdit,visible,editProductHandle,onCancel}) {
    const [form] = Form.useForm()
    useEffect(() => {
        form.setFieldsValue(curentDataEdit)
       }, [form, curentDataEdit])
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
                label="Username"
                name="username"
            >
                <Input/>
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
