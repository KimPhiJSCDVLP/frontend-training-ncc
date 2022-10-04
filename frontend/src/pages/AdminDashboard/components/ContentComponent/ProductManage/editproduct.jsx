
import { Input,Button, Modal, Form,Image ,message, Upload ,Progress ,InputNumber ,Select  } from 'antd'
import ReactQuill, { Quill } from "react-quill"
import { InboxOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import {useState, useEffect} from 'react'
import axios from 'axios';
import { useQuery ,useMutation } from '@apollo/client'
import { getCategories } from '../../../../../graphql/querydata'


export default function EditProduct({curentDataEdit,visible,editProductHandle,onCancel}) {

    const [form] = Form.useForm()
    const { loading: loadingcate, error: errorcate, data: datacate } = useQuery(getCategories)
    const categoriesProduct = datacate?.categories
    if(loadingcate){
        return 'hahh'
    }
    form.setFieldsValue(curentDataEdit)
    const { Option } = Select;

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
                label="ID"
                name="id"
                rules={[{ required: true }]}
                >   
                <Input disabled/>
            </Form.Item>
            <Form.Item
                label="Tên sản phẩm"
                name="name"
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
                name="des"
                rules={[{ required: true }]}
            >
                <ReactQuill/>
            </Form.Item>
            <Form.Item name="catId" label="Danh mục" rules={[{ required: true, message: 'Danh mục yêu cầu' }]}>
                <Select defaultValue=''>
                    <Option value="catId" disabled>Chọn thể loại</Option>
                    {categoriesProduct?.map((item) => (<Option key={item.id} value={item.id}>{item.name}</Option>))}
                </Select>
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
