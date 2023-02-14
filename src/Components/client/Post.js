import React from 'react';
import MainLayout from '../Layout/mainLayout';
import { Row, Col, Card, CardImg, CardBody } from "reactstrap";
import { Divider, Typography } from "antd";
import axios from 'axios';
import clientConfig from '../../clientConfig';
import { useState } from 'react';
import renderHTML from 'react-render-html';
import "bootstrap"
import { Link } from 'react-router-dom';
const { Paragraph } = Typography;


const Post = () => {

  const [data, setData] = useState([])

  axios.get(`${clientConfig.siteUrl}/wp-json/wp/v2/posts`).then((res) => {
    setData(res.data)
    console.log(res.data, "is responce")
  }).catch(err => console.catch(err, "is not responce"))



  return (

    <MainLayout activePage="main">


      <Row>
        {
          data.map((post) => {
            return (

              <Col className='mb-3' xs={12} sm={12} md={6} lg={4} xl={3}>

                <Card >
                  <Link to={`/${post.id}`}>
                    <CardImg alt={post.title.rendered} className='posts-img' src={post.uagb_featured_image_src.medium[0]
                      ? post.uagb_featured_image_src.medium[0]
                      : "assets/Newfolder/img_not_found.png"} /> </Link>
                  <CardBody className='card-h'>
                    {post.title.rendered}
                    <Divider />
                    <Paragraph ellipsis={{ rows: 2, expandable: false }}><div>{renderHTML(post.content.rendered)}</div></Paragraph>
                    <Link to={`/${post.id}`}> <span> ادامه مطلب</span></Link>
                    <Divider />
                  </CardBody>
                </Card>

              </Col>

            )
          })
        }
      </Row>

    </MainLayout>
  );
};



export default Post;