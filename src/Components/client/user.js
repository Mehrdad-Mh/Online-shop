import { Avatar, Divider } from 'antd';
import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import MainLayout from '../Layout/mainLayout';

const Users = ({getuser}) => {
    console.log(getuser)
    return ( 
       <MainLayout>
            <Row>
                  <Col>
                  <h4>{getuser.name}</h4>
                  <Card>
                        <CardBody >
                             <Row>
                              <Col xs={3} sm={3} md={2} lg={1} xl={1}>
                              <Avatar src="http://1.gravatar.com/avatar/a34f6615def1bee08cee1d770213ecf6?s=96&d=mm&r=g" size={64} className="ml-3"  />
                             
                              </Col>

                              <Col xs={9} sm={9} md={10} lg={11} xl={11}>
                            <h5> پروفایل {getuser.name}<br/></h5> 
                           <p className="mt-5">   توضیحات کاربر : {getuser.description}</p>
                              </Col>
                             </Row>
                        </CardBody>
                  </Card>
                  </Col>
            </Row>
       </MainLayout>
           
       
     );
}
 
export default Users;