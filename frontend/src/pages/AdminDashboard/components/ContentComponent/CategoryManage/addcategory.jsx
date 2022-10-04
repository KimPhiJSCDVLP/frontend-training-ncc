import React from 'react'
import { Input,Button, Modal, Form  } from 'antd'
import { useState, useEffect } from 'react';
import Title from 'antd/lib/typography/Title';
export default function AddCategory(props) {
    const validateMessages = {
        required: '${label} is required!',
        types: {
          number: '${label} is not a valid number!',
        }
      };
  return (
    <>
    <Modal  width={1000} visible={props.visible} footer={null} onCancel={props.onCancel}>
        <Title level={3}>Add Category</Title>
        <Form
            name="edit"
            layout = "vertical"
            type = "danger"
            onFinish={props.handleAddCategory}
            validateMessages={validateMessages}
        >
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
                <Button className='add-product' type="danger"  htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
    </Modal>
    </>
  )
}
