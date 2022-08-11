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
        {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={props.items} /> */}
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <PieChartOutlined />
            <span>Product Manage</span>
            <Link to="/admin-product" />
          </Menu.Item>
          <Menu.Item key="2">
            <PieChartOutlined />
            <span>Category Manage</span>
            <Link to="/admin-category" />
          </Menu.Item>
        </Menu>
    </Sider>
  )
}
