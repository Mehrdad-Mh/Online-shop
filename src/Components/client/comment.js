import { Avatar, Button, Card, Divider, Form, Input, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CardBody, Col, Row } from 'reactstrap';
import clientConfig from './../../clientConfig';


import HTMLReactParser from 'html-react-parser';
import { toast } from 'react-toastify';

 const { Paragraph } = Typography;



const token = window.localStorage.getItem("token")

const success_comment = () => toast.success("کامنت شما با موفقیت ثبت شد")
const faild_comment = () => toast.error("کامنت شما با مشکل روبرو شد")

const PostComment = ({ postId }) => {
   
    const [comment, setComment] = useState([]);

    const [fetch , setFetch] = useState(true)

useEffect(() => {
    if (fetch === true) {

        axios.get(`${clientConfig.siteUrl}/wp-json/wp/v2/comments`).then(comments => {
            // console.log(comments.data)
            const filterComments = comments.data.filter( comment => comment.post === postId )
            setComment(filterComments)
            setFetch(false)
        }).catch((err) => console.log(err))
    } else{

    }

    
   
    //  console.log(comment)
})
    


    const onFinish = (value) => {
        form.resetFields();
        value = {
            ...value,
             post: postId,
             author : 1
        };
        console.log(value)

        axios
            .post(`${clientConfig.siteUrl}/wp-json/wp/v2/comments`, value, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }).then((res) => {
                success_comment()
                 setFetch(true)
                console.log(res)
            }).catch((err) => {
                console.log(err)
                faild_comment()

            })

    }

    const onFinishFailed = (err) => {
        console.log(err)
    }

    const [form] = Form.useForm();

    return (

        
       
        <Row className='grrid'>

<Divider  >ثبت نظر</Divider>
            <Col >
                <Form
                    labelCol={{
                        span: 2,
                    }}
                    wrapperCol={{
                        span: 7,
                    }}

                    form={form}

                    name="نوشتن نظرات"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item label="نام شما : " name="author_name" >
                        <Input />
                    </Form.Item>

                    

                    <Form.Item label="ایمیل شما : " name="author_email">
                        <Input />
                    </Form.Item>
                    <Form.Item label="نظر شما : " name="content">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            htmlType="submit" type="submit" color="warning"
                        >ثبت نظر</Button>
                    </Form.Item>
                </Form>
            </Col>
             
            <Divider>ثبت نظرات شما عزیزان</Divider>
            <Col>
          { comment.length  > 0 ?
          comment.map(value => {
            return(
                <Card>
                <CardBody style={{textAlign : "right"}}>
                <Avatar size={64} className='ant-av' style={{backgroundColor : `#${Math.floor(Math.random() * 1000000 )}`}}  >  {value.author_name}  </Avatar>
    

                      
                        <span className='sp'>   گفته :   </span>  
                    <Paragraph className='mt-3  mr' 
                        ellipses = {{rows : 2 , expandable : true , symbol : " ادامه نظر ..."}} 
                       > {HTMLReactParser(value.content.rendered)}
                    </Paragraph>
                </CardBody>
              </Card>
            )
          }) :<h5 style={{textAlign: "center"}}>  نظری وجود ندارد</h5>

          
            
          };
          </Col>
            
          
        </Row>
    );
}

export default PostComment;