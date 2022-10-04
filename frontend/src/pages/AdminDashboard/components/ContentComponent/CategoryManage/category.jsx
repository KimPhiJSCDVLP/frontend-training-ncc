import React from 'react'
import { Table , Space, Popconfirm,Button, message ,Spin } from 'antd'
import Title from 'antd/lib/typography/Title';
import { EditOutlined, DeleteOutlined} from '@ant-design/icons';
import { useState ,useEffect } from 'react';
import { useQuery ,useMutation } from '@apollo/client'
import { getCategories} from '../../../../../graphql/querydata'
import { DELETE_CATE, ADD_CATE ,UPDATE_CATE} from '../../../../../graphql/mutation';
import AddCategory from './addcategory';
import EditCategory from './editcategory';
export default function CategoryManage() {
  const API = '/api/admin/product-category/'
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [curentDataEdit, setCurentDataEdit] = useState();
  const [isModalAddVisible, setIsModalAddVisible] = useState(false);
  const [deleteCat, { data, loading1, error }] = useMutation(DELETE_CATE);
  const [addCate, { datacat, loadingcat, errorcat }] = useMutation(ADD_CATE);
  const [updateCate, { dataupdate, loadingupdate, errorupdate }] = useMutation(UPDATE_CATE);
  const [loading, setLoading] = useState(false);
  const { loading: loadingcate, error: errorcate, data: datacate } = useQuery(getCategories)
  const columns = [
    {
      title: 'STT',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Tên Danh Mục',
      dataIndex: 'name',
    },
    {
      title: 'image',
      dataIndex: 'image',
      render: (text, record) => {
        return (
          <img src={record.image} width = {50} height = {50}/>
          )
      }
    },
    {
      title: 'Mô Tả',
      dataIndex: 'des',
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
  // GET ALL CATEGORY
  const categories =  datacate?.categories
  // EDIT CATEGORY
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showModal = (id) => {
    setIsModalVisible(true);
    setCurentDataEdit(categories.find(item => item.id === id))
  };
  const handleEditCategory = async (e) => {
    updateCate(
        {
            variables: e,
            refetchQueries: [{ query: getCategories }]
        },
    )
  }
  // DELETE CATEGORY
  const handleDelete =  async (id) => {
    deleteCat({
          variables: {id},
          refetchQueries: [{ query: getCategories }]
      },)
  }
  // ADD CATEGORY
  const showModalAdd = () => {
    setIsModalAddVisible(true);
  };
  const handleCancelAdd = () => {
      setIsModalAddVisible(false);

  };
  const handleAddCategory = async (e) => {
    addCate(
        {
            variables: e,
            refetchQueries: [{query: getCategories}]
        },
    )
    }
  return (
    <>
    <Title className='product-manage' level={3}>Categories Manage
    <Button  type="primary" className='add-product' danger onClick={showModalAdd}>
        Add
    </Button>
    </Title>
    {loading ? (
        <div className="spinLoading">
            <Spin />
          </div>
        ) : (
          <Table columns={columns} dataSource={categories}   />
        )
    }
    <AddCategory visible ={isModalAddVisible} onCancel={handleCancelAdd} handleAddCategory = {handleAddCategory} />
    <EditCategory curentDataEdit = {curentDataEdit} visible = {isModalVisible} handleEditCategory = {handleEditCategory} onCancel = {handleCancel} />
    </>
  )
}
