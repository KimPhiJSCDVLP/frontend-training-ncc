import React from 'react'
import { Table , Space, Popconfirm,Button, message ,Spin } from 'antd'
import Title from 'antd/lib/typography/Title';
import { EditOutlined, DeleteOutlined} from '@ant-design/icons';
import { useState ,useEffect } from 'react';
import axios from 'axios';
import AddCategory from './addcategory';
import EditCategory from './editcategory';
export default function CategoryManage() {
  const API = '/api/admin/product-category/'
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [curentDataEdit, setCurentDataEdit] = useState();
  const [isModalAddVisible, setIsModalAddVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
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
      title: 'Đường Dẫn',
      dataIndex: 'slug',
    },
    {
      title: 'Mô Tả',
      dataIndex: 'description',
    },
    {
      title: "Ngày tạo",
        render: (text, record, index) => {
            return (
                <span>
                    {/* {moment(record.created_at).format(
                        "DD/MM/YYYY, hh:mm"
                    )} */}
                    {record.created_at}
                </span>
            );
                  }
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
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
      .get(API)
      .then((res) => {
        const categories = res.data;
        setCategories(categories.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
    },2000) 
  }, []);
  // EDIT CATEGORY
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showModal = (id) => {
    setIsModalVisible(true);
    setCurentDataEdit(categories.find(item => item.id === id))
  };
  const handleEditCategory = async (e) => {
    try {
      await axios.put(API + curentDataEdit.id, e);
      message.success("Sữa danh mục thành công");
      let recordPrev = [...categories].filter(item => item.id !== curentDataEdit.id)
      setCategories([
        e,
        ...recordPrev
      ])
      
    } catch ({ response }) {
        const { data } = response;
        message.error(data.message);
    }
  }
  // DELETE CATEGORY
  const handleDelete =  async (id) => {
    try {
      await axios.delete(API  + id);
      const newProduct = categories.filter((item) => item.id !== id);
      setCategories(newProduct)
      message.success("Xóa sản phẩm thành công")
    }catch ({response}) {
      console.log(response);
    }
  }
  // ADD CATEGORY
  const showModalAdd = () => {
    setIsModalAddVisible(true);
  };
  const handleCancelAdd = () => {
      setIsModalAddVisible(false);

  };
  const handleAddCategory = async (e) => {
    try {
      await axios.post("/api/admin/product-category", e);
      message.success("Thêm tin tức thành công");
      window.location.reload()
      // setCategories(prev => {
      //   return [...prev, e]
      // })  
      } catch ({ response }) {
          const { data } = response;
          message.error(data.message);
      }
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
