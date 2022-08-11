import React from 'react'
import { Table , Space, Popconfirm,Button, message ,Spin } from 'antd'
import Title from 'antd/lib/typography/Title';
import { EditOutlined, DeleteOutlined} from '@ant-design/icons';
import { useState ,useEffect } from 'react';
import EditProduct from './editproduct';
import AddProduct from './addproduct';
import axios from 'axios';
export default function ProductManage() {
    const API = '/api/admin/product'
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [curentDataEdit, setCurentDataEdit] = useState(null);
    const [isModalAddVisible, setIsModalAddVisible] = useState(false);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
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
            <img src={'http://localhost:8000' + record.thumbnail} width = {50} height = {50}/>
            )
        }
      },
      {
        title: 'Tên sản Phẩm',
        dataIndex: 'name',
      },
      {
        title: 'Mô tả',
        dataIndex: 'description',
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
                 {record.price.toLocaleString()}
              </span>
          );
      },
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
    //GET ALL PRODUCT
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        axios
        .get(API)
        .then((res) => {
          const products = res.data;
          setProducts(products.data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
      },2000) 
    }, []);
    // Delete sản phẩm 
    const handleDelete =  async (id) => {
      try {
        await axios.delete(API + "/" + id);
        const newProduct = products.filter((item) => item.id !== id);
        setProducts(newProduct)
        message.success("Xóa sản phẩm thành công")
      }catch ({response}) {
        console.log(response);
      }
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
        if(e && e.categories && e.categories.length){
          e.categories = e.categories.map(item => ({category_id: item}))
        }
        try {
            await axios.put("/api/admin/product/" + curentDataEdit.id, e);
            message.success("Sữa sản phẩm thành công");
            let recordPrev = [...products].filter(item => item.id !== curentDataEdit.id)
            setProducts([
              e,
              ...recordPrev
            ])
        } catch ({ response }) {
            const { data } = response;
            console.log(e);
            message.error(data.message);
        }
        
    };  
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
      if(e && e.categories && e.categories.length){
        e.categories = e.categories.map(item => ({category_id: item}))
        }
        try {
            await axios.post("/api/admin/product", e);
            message.success("Thêm sản phẩm thành công");
            setProducts(prev => {
                      return [...prev, e]
                    })
        } catch ({ response }) {
            const { data } = response;
            message.error(data.message);
        }
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
