import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { change_loader } from "../../redux/actions";


const { Header, Content, Footer } = Layout;

const MainLayout = (props) => {


  
  const dispatch = useDispatch()


  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          className="text-right"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[props.activePage]}
        >
          <Menu.Item key="main" onClick={() => {dispatch(change_loader(false))}}>
            <Link to="/">صفحه اصلی</Link>
          </Menu.Item>
          <Menu.Item key="postsList">
            <Link to="">لیست پست ها</Link>
          </Menu.Item>
          <Link to="/login">
            <Button className="login-btn" color="primary" type="submit">
              صفحه ورود
            </Button>
          </Link>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb className="text-right" style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content text-right">{props.children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>ساخته دسته خودم</Footer>
    </Layout>
  );
};

export default MainLayout;
