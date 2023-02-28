import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  DashboardOutlined,
  FormOutlined,
  CopyOutlined,
  UserAddOutlined
} from "@ant-design/icons";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import AvatarDropdown from './../Layout/dropdown';
import Main_Dashboard from "./components/Main";
import CreatePost from "./components/CreatePost";
import CreateUser from "./components/CreateUser";
import UserLists from "./components/userLists";
import { ToastContainer } from "react-toastify";
import PostList from "./components/PostList";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const D_Layout = () => {

  const login = useSelector((state) => state.login)
  const [key, setKey] = useState("main");

  const checkmenu = () => {
    switch (key) {

      case "main":
        return <Main_Dashboard />;

      case "createPost":
        return <CreatePost />;

        case "postsLists" :
          return <PostList/>;

      case "createUser":
        return <CreateUser />;
        
        case "userLists" :
          return <UserLists/>;
          
      default:
        return <p></p>;


    }
  };




  if (login === true) {
    return (
      <Layout className="layout">
        <ToastContainer rtl={true} />
        <Header className="header">
          <AvatarDropdown />
          <div className="logo" />
          <Menu className="text-right" theme="dark" mode="horizontal" >
            <Menu.Item key="1"><Link to="/">صفحه اصلی</Link></Menu.Item>

          </Menu>
        </Header>
        <Content style={{ padding: "0 50px", marginTop: "20px" }}>
          <Layout
            className="site-layout-background2"
            style={{ padding: "24px 0" }}
          >
            <Sider className="site-layout-background2" width={200} style={{ borderLeft: "solid 1px black", paddingLeft: "1px" }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={[key]}
                // defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}

              >
                <Menu.Item className="text-right" key="main" icon={<DashboardOutlined />} onClick={() => setKey("main")} >
                  {""}  اطلاعات کلی
                </Menu.Item>
                <SubMenu className="text-right" key="sub1" icon={<CopyOutlined />} title="تنظیمات پست ها">
                  <Menu.Item className="text-right" key="createPost" icon={<FormOutlined />} onClick={() => setKey("createPost")} >ساخت پست</Menu.Item>
                  <Menu.Item className="text-right" key="postsLists" icon={<FormOutlined />} onClick={() => setKey("postsLists")} >لیست پست ها</Menu.Item>

                </SubMenu>
                <SubMenu className="text-right" key="sub2" icon={<UserOutlined />} title="تنظیمات کاربر ها">
                  <Menu.Item className="text-right" key="createUser" icon={<UserAddOutlined />}
                    onClick={() => setKey("createUser")} >ساخت کاربر</Menu.Item>

                  <Menu.Item className="text-right" key="userLists" icon={<UserAddOutlined />}
                    onClick={() => setKey("userLists")} > لیست کاربران </Menu.Item>



                </SubMenu>

              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              {checkmenu()}
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  } else {
    return <Redirect to="/404" />
  };

};

export default D_Layout;
