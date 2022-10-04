import React from 'react'
import { Input,Button, Modal, Form  } from 'antd'
import { useState, useEffect } from 'react';
import Title from 'antd/lib/typography/Title';

export default function EditCategory(props) {
    const [form] = Form.useForm()
    useEffect(() => {
        form.setFieldsValue(props.curentDataEdit)
        }, [form, props.curentDataEdit])
    const validateMessages = {
        required: '${label} is required!',
        types: {
          number: '${label} is not a valid number!',
        }
      };
  return (
    <>
    <Modal  width={1000} visible={props.visible} footer={null} onCancel={props.onCancel}>
        <Title level={3}>Update Category</Title>
        <Form
            name="edit"
            layout = "vertical"
            type = "danger"
            form={form}
            initialValues={props.curentDataEdit}
            onFinish={props.handleEditCategory}
            validateMessages={validateMessages}
            
        >
            <Form.Item
                label="Tên Danh Mục"
                name="id"
                rules={[{ required: true }]}
            >
                <Input disabled/>
            </Form.Item>
            <Form.Item
                label="Tên Danh Mục"
                name="name"
                rules={[{ required: true }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Mô tả"
                name="des"
                rules={[{ required: true }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Hình ảnh"
                name="image"
                rules={[{ required: true }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item>
                <Button className='update-product' type="danger"  htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
    </Modal>
    </>
  )
}
