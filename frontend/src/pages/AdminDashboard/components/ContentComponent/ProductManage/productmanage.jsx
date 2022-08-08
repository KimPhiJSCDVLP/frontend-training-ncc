import React from 'react'
import { Table , Space, Popconfirm,Button, Input } from 'antd'
import Title from 'antd/lib/typography/Title';
import { EditOutlined, DeleteOutlined} from '@ant-design/icons';
import { useState ,useEffect, useRef } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import EditProduct from './editproduct';
import AddProduct from './addproduct';
import axios from 'axios';
export default function ProductManage() {

      //search
      const [searchText, setSearchText] = useState('');
      const [searchedColumn, setSearchedColumn] = useState('');
      const searchInput = useRef(null);

      const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
      };
    
      const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
      };
      const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div
            style={{
              padding: 8,
            }}
          >
            <Input
              ref={searchInput}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{
                marginBottom: 8,
                display: 'block',
              }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{
                  width: 90,
                }}
              >
                Search
              </Button>
              <Button
                onClick={() => clearFilters && handleReset(clearFilters)}
                size="small"
                style={{
                  width: 90,
                }}
              >
                Reset
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  confirm({
                    closeDropdown: false,
                  });
                  setSearchText(selectedKeys[0]);
                  setSearchedColumn(dataIndex);
                }}
              >
                Filter
              </Button>
            </Space>
          </div>
        ),
        filterIcon: (filtered) => (
          <SearchOutlined
            style={{
              color: filtered ? '#1890ff' : undefined,
            }}
          />
        ),
        onFilter: (value, record) =>
          record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => searchInput.current?.select(), 100);
          }
        },
        render: (text) =>
          searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{
                backgroundColor: '#ffc069',
                padding: 0,
              }}
              searchWords={[searchText]}
              autoEscape
              textToHighlight={text ? text.toString() : ''}
            />
          ) : (
            text
          ),
      });
      //Column in table
      const columns = [
        {
          title: 'Title',
          dataIndex: 'title',
          sorter: (a, b) => a.title.length - b.title.length,
          key : 'title',
          width: '30%',
          ...getColumnSearchProps('title'),
        },
        {
          title: 'Image',
          dataIndex: 'image',
          render: (text, record) => {
            return (
              <img src={record.image} width = {200} height = {100}/>
              )
          }
        },
        {
          title: 'Price',
          dataIndex: 'price',
          sorter: (a, b) => a.price - b.price,
        },
        {
          title: 'quantity',
          dataIndex: 'quantity',
          sorter: (a, b) => a.quantity - b.quantity,
        },
        {
          title: 'Description',
          dataIndex: 'description',
          sorter: (a, b) => a.description.length - b.description.length,
        },
        {
          title: 'category',
          dataIndex: 'category',
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
    //call API
    const [products, setProducts] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:5000/api/v1/products/all`)
        .then((res) => {
          const products = res.data;
          setProducts(products);
        })
        .catch((error) => console.log(error));
    }, []);

    const handleDelete = (id) => {
        axios
        .delete(`http://localhost:5000/api/v1/products/${id}`)
        .then((res) => {
          const newData = products.filter((item) => item.id !== id);
          setProducts(newData);
          console.log(res);
        })
        .catch((error) => console.log(error));
    }

    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };

    //Modal edit
    const [isModalVisible, setIsModalVisible] = useState(false);
     
    const [curentDataEdit, setCurentDataEdit] = useState(null);

    const showModal = (id) => {
      const currentRow = products.find(item => item.id === id);
      console.log(currentRow);
      setIsModalVisible(true);
      setCurentDataEdit({
        id: currentRow.id,
        title:currentRow.title,
        image: currentRow.image,
        description : currentRow.description ,
        price : currentRow.price ,
        quantity : currentRow.quantity ,
        cat_id : currentRow.cat_id
      })
    };
    const editProductHandle = (e) => {
       let newEntry = {
          id : `${curentDataEdit.id}`,
          title:e.title,
          image: e.image,
          description : e.description ,
          price : e.price,
          quantity : e.quantity,
          cat_id : "2"
        }
        axios
          .put(`http://localhost:5000/api/v1/products/update/${curentDataEdit.id}`, newEntry)
          .then((res) => {
            console.log(res);
            let recordPrev = [...products].filter(item => item.id !== curentDataEdit.id)
            setProducts([
              newEntry,
              ...recordPrev
            ])
          })
          .catch((error) => console.log(error));
        
    };  

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    //endModal
    //Modal add product
    const [isModalAddVisible, setIsModalAddVisible] = useState(false);

    const showModalAdd = () => {
        setIsModalAddVisible(true);
    };
    const handleCancelAdd = () => {
        setIsModalAddVisible(false);
    };
    const addProductHandle = (e) => {
       const newProduct = {
        id: " ",
        title:e.title,
        image: e.image,
        description : e.description ,
        price : e.price ,
        quantity : "3" ,
        cat_id : "1"
      };
      console.log(newProduct);
        axios
          .post(`http://localhost:5000/api/v1/products/add`, newProduct)
          .then((res) => {
            console.log(res);
            setProducts(prev => {
              return [...prev, newProduct]
            })
          })
          .catch((error) => console.log(error));
    };
    return(
        <>
        <Title className='product-manage' level={3}>Product Manage
        <Button  type="primary" className='add-product' danger onClick={showModalAdd}>
            Add
        </Button>
        </Title>
        
        <Table columns={columns} dataSource={products} onChange ={onChange}  />
        {/* Modal edit */}
        < EditProduct  curentDataEdit = {curentDataEdit}  visible={isModalVisible}  editProductHandle = {editProductHandle} onCancel={handleCancel} />
        <AddProduct visible ={isModalAddVisible} addProductHandle= {addProductHandle}   onCancel={handleCancelAdd} /> 
        </>
    )
    };
