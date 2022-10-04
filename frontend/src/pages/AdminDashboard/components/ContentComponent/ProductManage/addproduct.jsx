import React from 'react'
import { Input,Button, Modal, Form  ,InputNumber ,Select  } from 'antd'
import Title from 'antd/lib/typography/Title';
import ReactQuill, { Quill } from "react-quill"
import { useQuery ,useMutation } from '@apollo/client'
import { getCategories } from '../../../../../graphql/querydata'
import 'react-quill/dist/quill.snow.css'
export default function AddProduct(props) {
    const { loading: loadingcate, error: errorcate, data: datacate } = useQuery(getCategories)
    const categoriesProduct = datacate?.categories
    if(loadingcate){
        return 'hahh'
    }
    const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        }
      };
        const { Option } = Select;
          // GET CATEGORY
  return (
    <Modal  width={1000} visible={props.visible} footer={null} onCancel={props.onCancel}>
        <Title level={3}>Add Product</Title>
        <Form
            name="add"
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
                label="Số lượng sản phẩm"
                name="quantity"
                rules={[{ required: true }]}
            >
                <InputNumber style={{ width: '100%' }} min={1} max={100} defaultValue={1}/>
            </Form.Item>
            <Form.Item
                label="Hình ảnh"
                name="image"
                rules={[{ required: true }]}
            >
                <Input/>
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
                <ReactQuill
                />
            </Form.Item>
            <Form.Item name="catId" label="Danh mục" rules={[{ required: true, message: 'Danh mục yêu cầu' }]}>
                    <Select defaultValue="lucy">
                        <Option value="lucy" disabled>Chọn thể loại</Option>
                        {categoriesProduct?.map((item) => (<Option key={item.id} value={item.id}>{item.name}</Option>))}
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
