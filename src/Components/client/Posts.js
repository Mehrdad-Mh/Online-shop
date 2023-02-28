
import React from "react";
import MainLayout from "../Layout/mainLayout";
import { Row, Col, Card, CardBody, CardHeader, CardImg } from "reactstrap";
import { Divider, Typography } from "antd";
import renderHTML from "react-render-html";
import PostComment from "./comment";


const { Paragraph } = Typography
const Posts = ({ post }) => {

    // console.log(post)
    return (


        <MainLayout>
            <Row>
                <Col>
                    <Card>
                        <CardHeader className="text-center">
                            {post.title.rendered}
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs={12} sm={12} md={5} lg={5} xl={4}>
                                    <CardImg
                                        alt={post.title.rendered}
                                        className=""
                                        src={
                                            post.uagb_featured_image_src.medium[0]
                                                ? post.uagb_featured_image_src.medium[0]
                                                : "assets/img_not_found.png"
                                        }
                                        width="100%"
                                        height="200px"
                                    />
                                </Col>

                                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                                    <Divider type="vertical" style={{ height: "100%" }} />
                                </Col>
                                <Col xs={11} sm={11} md={6} lg={6} xl={7}>
                                    <Paragraph ellipsis={{ row: 5, expandable: true, symbol: "مشاهده کل مطلب" }}>{renderHTML(post.content.rendered)}</Paragraph>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                    <Card>
                        
                        <Divider/>
                        <CardBody>
<PostComment postId ={post.id}/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </MainLayout>
    );
};

export default Posts;