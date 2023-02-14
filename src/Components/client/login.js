import React from 'react';
import MainLayout from '../Layout/mainLayout';
import { Input } from 'antd';
import { Button, Col, Row } from 'reactstrap';


const Login = () => {
    return ( 
        <MainLayout>

<Row  className="text-center" style={{marginTop:"85px"}}>
    
<Col xs={12} sm={12} md={12} lg={12} xl={12}> <Input className="login-input" placeholder = "نام کاربری"/></Col>
<Col xs={12} sm={12} md={12} lg={12} xl={12}>  <Input.Password className="login-input" placeholder="رمز عبور"/></Col>
<Col><Button color="primary" style={{width:"100px"}}>ورود</Button></Col>
        </Row>
        </MainLayout>
     );
}
 
export default Login;