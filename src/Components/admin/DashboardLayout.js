import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  DashboardOutlined,
  FormOutlined,
  CopyOutlined,
  UserAddOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const D_Layout = () => {
  return (
    <Layout className="layout">
      <Header className="header">
        <div className="logo" />
        <Menu className="text-right" theme="dark" mode="horizontal" >
          <Menu.Item key="1"><Link to="/">صفحه اصلی</Link></Menu.Item>
          
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" , marginTop:"20px" }}>
        <Layout
          className="site-layout-background2"
          style={{ padding: "24px 0" }}
        >
          <Sider className="site-layout-background2" width={200} style={{borderLeft:"solid 1px black" , paddingLeft:"1px"}}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["7"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
              
            >
            <Menu.Item className="text-right" key="7" icon={<DashboardOutlined />}>
              {""}  اطلاعات کلی
            </Menu.Item>
              <SubMenu className="text-right" key="sub1" icon={<CopyOutlined />} title="تنظیمات پست ها">
                <Menu.Item className="text-right" key="1" icon={<FormOutlined />}>ساخت پست</Menu.Item>
                
                
              </SubMenu>
              <SubMenu className="text-right" key="sub2" icon={<UserOutlined />} title="تنظیمات کاربر ها">
                <Menu.Item className="text-right" key="5" icon={<UserAddOutlined />}>ساخت کاربر</Menu.Item>
                
                
              </SubMenu>
              
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default D_Layout;
