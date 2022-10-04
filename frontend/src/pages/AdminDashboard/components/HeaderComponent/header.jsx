import React from 'react'
import Title from 'antd/lib/typography/Title';
import {UserOutlined} from '@ant-design/icons';
import {Layout,Avatar ,Popconfirm } from 'antd';
import AuthService from '../../../../services/auth.services';
import { useNavigate } from 'react-router';
const { Header } = Layout;
export default function HeaderComponent() {
  const navigate = useNavigate();
  const logoutAdmin = async () =>{
    try{
      await AuthService.logout();
      // redirect
      console.log('log');
      navigate("/admin/login");
     }
     catch(e){
       console.log(e,'e');
     }
  } 
  return (
    <Header
        className="site-layout-background"
        style={{
        padding: 0,
        }}
    >
        <Title 
            className='brand'
            level={3}>ECONOMY
            <Popconfirm placement="bottom" title={'Xác Nhận Đăng Xuất'} onConfirm={logoutAdmin} okText="Yes" cancelText="No">
            <Avatar   className='avatar' icon={<UserOutlined />} />
            </Popconfirm>
        </Title>
        
    </Header>
  )
}
