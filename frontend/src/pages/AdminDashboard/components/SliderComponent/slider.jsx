import React from 'react'
import {Link} from 'react-router-dom'
import {Layout ,Menu , Icon} from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
const {Sider } = Layout;
export default function SliderComponent(props) {

  
  return (
    <Sider collapsible collapsed={props.collapsed} onCollapse={(value) => props.setCollapsed(value)}>
        <div className="logo"/>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" onClick={props.handleClick}>
            <PieChartOutlined />
            <span>Product Manage</span>
          </Menu.Item>
          <Menu.Item key="2" onClick={props.handleClick}>
            <FileOutlined />
            <span>Category Manage</span>
          </Menu.Item>
          <Menu.Item key="3" onClick={props.handleClick}>
            <UserOutlined />
            <span>Users Manage</span>
          </Menu.Item>
          <Menu.Item key="4" onClick={props.handleClick}>
            <UserOutlined />
            <span>Home</span>
          </Menu.Item>
        </Menu>
    </Sider>
  )
}
