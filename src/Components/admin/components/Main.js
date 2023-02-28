import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import{Divider} from "antd";

class Main_Dashboard extends Component {
    state = {  } 
    render() { 
        return (
            <Row >
                <Col className='dashboard-card text-right ' xs={12} sm={12} md={6} lg={4} xl={3}>
                    <div className="danger-card bg-danger">

                    <h4>تعداد پست ها</h4>
                    <Divider/>
                    <p>this is text</p>
                    </div>
                </Col>
                <Col className='dashboard-card text-right' xs={12} sm={12} md={6} lg={4} xl={3}>
                   <div className="success-card bg-success">

                    <h4>تعداد کاربران</h4>
                    <Divider/>
                    <p>this is text</p>
                   </div>
                </Col>
                <Col className='dashboard-card text-right' xs={12} sm={12} md={6} lg={4} xl={3}>
                    <div className="warning-card bg-warning">

                    <h4>به زودی ...</h4>
                    <Divider/>
                    <p>this is text</p>
                    </div>
                </Col>
                <Col className='dashboard-card text-right' xs={12} sm={12} md={6} lg={4} xl={3}>
                   <div className="primary-card bg-primary">
                    <h4>به زودی...</h4>
                    <Divider/>
                    <p>this is text</p>
                   </div>
                </Col>
            </Row>
        );
    }
}
 
export default Main_Dashboard;