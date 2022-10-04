import React from 'react'
import { Table , Space, Popconfirm,Button, message ,Spin } from 'antd'
import Title from 'antd/lib/typography/Title';
import { EditOutlined, DeleteOutlined} from '@ant-design/icons';
import { useState ,useEffect } from 'react';
import EditProduct from './editproduct';
import AddProduct from './addproduct';
import { useQuery ,useMutation } from '@apollo/client'
import { getAllProducts} from '../../../../../graphql/querydata'
import {ADD_PRODUCT , DELETE_PRODUCT ,UPDATE_PRODUCT} from '../../../../../graphql/mutation'

export default function ProductManage() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [curentDataEdit, setCurentDataEdit] = useState(null);
    const [isModalAddVisible, setIsModalAddVisible] = useState(false);
    const { loading: loadingcate, error: errorcate, data: datacate } = useQuery(getAllProducts)
    const [loading, setLoading] = useState(false);
    const [addProduct, Mutation] = useMutation(ADD_PRODUCT);
    const [deleteProduct, MutationDel] = useMutation(DELETE_PRODUCT);
    const [updateProduct, MutationEdit] = useMutation(UPDATE_PRODUCT);

    //GET ALL PRODUCT
    const products =  datacate?.products
    //Column in table
    const columns = [
      {
        title: 'STT',
        render: (text, record, index) => index + 1,
      },
      {
        title: 'Image',
        dataIndex: 'image',
        render: (text, record) => {
          return (
            <img src={record.image} width = {50} height = {50}/>
            )
        }
      },
      {
        title: 'Tên sản Phẩm',
        dataIndex: 'name',
      },
      {
        title: 'Mô tả',
        dataIndex: 'des',
        render : (text,record) => {
          return (
            <span>
              <div dangerouslySetInnerHTML={{ __html:record.des }} />
            </span>
          )
        }
      },
      {
        title: 'Số lượng',
        dataIndex: 'quantity',
      },
      {
        title: 'Gia SP',
        dataIndex: 'price',
        render: (text, record) => {
          return (
              <span>
                 {record.price}
              </span>
          );
      },
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <a><EditOutlined onClick={() => {showModal(record.id)}} /></a>
            <Popconfirm title={`"Sure to delete product" ${record.id}`} onConfirm={() => {handleDelete(record.id)}}>
                <a><DeleteOutlined  style={{color: 'red' }} /></a>
            </Popconfirm>
          </Space>
        ),
      },
    ];
    // Delete sản phẩm 
    const handleDelete =  async (id) => {
      deleteProduct(
        {
            variables: {id},
            refetchQueries: [{query: getAllProducts}]
        } 
      ) 
    }
    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };

    //Modal edit
    const showModal = (id) => {
      const currentRow = products.find(item => item.id === id);
      setIsModalVisible(true);
      setCurentDataEdit(currentRow)
      console.log(currentRow);
    };
    const editProductHandle = async (e) => {
      updateProduct(
        {
            variables: e,
            refetchQueries: [{query: getAllProducts}]
        } 
      ) 
    }
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    //Modal add product
    const showModalAdd = () => {
        setIsModalAddVisible(true);
    };
    const handleCancelAdd = () => {
        setIsModalAddVisible(false);
   
    };
    const addProductHandle = async (e) => {
      addProduct(
        {
            variables: e,
            refetchQueries: [{query: getAllProducts}]
        },
    )

        };
    return(
        <>
        <Title className='product-manage' level={3}>Product Manage
        <Button  type="primary" className='add-product' danger onClick={showModalAdd}>
            Add
        </Button>
        </Title>
        {loading ? (
            <div className="spinLoading">
               <Spin />
             </div>
            ) : (
              <Table columns={columns} dataSource={products} onChange ={onChange}  />
            )
        }
        
        {/* Modal edit */}
        < EditProduct  curentDataEdit = {curentDataEdit}  visible={isModalVisible}  editProductHandle = {editProductHandle} onCancel={handleCancel} />
        <AddProduct visible ={isModalAddVisible} addProductHandle= {addProductHandle}   onCancel={handleCancelAdd} /> 
        </>
    )
    };
