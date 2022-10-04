import React from 'react'
import { Breadcrumb, Layout} from 'antd';
const { Content} = Layout;
export default function ContentComponent(props) {
  return (
    <Content
        style={{
            margin: '0 16px',
        }}
        >
        <Breadcrumb
            style={{
            margin: '16px 0',
            }}
        >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Product</Breadcrumb.Item>
        </Breadcrumb>
        <div
            className="site-layout-background"
            style={{    
            padding: 24,
            minHeight: 360,
            }}
        >
            {props.render}
        </div>
    </Content>
  )
}
