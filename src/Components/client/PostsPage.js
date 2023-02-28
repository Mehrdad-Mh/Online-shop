import React from 'react';
import MainLayout from './../Layout/mainLayout';
import { Space, Table, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import clientConfig from './../../clientConfig';
import Moment from 'react-moment';
import 'moment/locale/fa';
import { useDispatch, useSelector } from 'react-redux';
import { get_tags } from '../../redux/actions';





// const data = [
//     {
//       key: '1',
//       name: 'John Brown',
//       age: 32,
//       address: 'New York No. 1 Lake Park',
//       tags: ['nice', 'developer'],
//     },
//     {
//       key: '2',
//       name: 'Jim Green',
//       age: 42,
//       address: 'London No. 1 Lake Park',
//       tags: ['loser'],
//     },
//     {
//       key: '3',
//       name: 'Joe Black',
//       age: 32,
//       address: 'Sydney No. 1 Lake Park',
//       tags: ['cool', 'teacher'],
//     },
//   ];
 
const PostsPage = () => {

    const [getdata, setGetdata] = useState([])
    const dispatch = useDispatch();
   const alltags = useSelector ( state => state.tags )

    useEffect(() => {
        if(getdata.length > 0 )  {

        } else{
            axios.get(`${clientConfig.siteUrl}/wp-json/wp/v2/posts?per_page=50`).then((posts) => {
                console.log(posts.data);
                setGetdata(posts.data)
            }).catch((err) => {
                console.log(err)
            });
            axios
            .get(`${clientConfig.siteUrl}/wp-json/wp/v2/tags`)
            .then((tags_list) => dispatch(get_tags(tags_list.data)));
        }
       
    })

    const columns = [
        {
            title: 'عنوان پست',
            dataIndex: 'title',
            key: 'title',
            render: (text) => (text.rendered),
        },
        {
            title: 'تاریخ انتشار',
            dataIndex: 'date',
            key: 'date',
            render : (date) => <Moment fromNow locale='fa'>{date}</Moment>
        },
        {
            title: 'نام نویسنده',
            dataIndex: '',
            key: '',
            render : (author) => <Link to={`/user/${author.author}`} >{author.uagb_author_info.display_name}</Link>
        },

        
        {
            title: 'تگ ها',
            key: 'tags',
            dataIndex: 'tags',
            render: ( tags ) => {

                if(tags.length > 0) {

                 return tags.map(tag =>{
                        let tagID = (tag);
                        let foundTag = alltags.find(tag => tag.id === tagID)
                        return foundTag ? <Tag color ={`#${Math.floor(Math.random() * 1000000)}`}>{foundTag.name},</Tag> : " ";
                    })
                   

                }else{
                    return " بدون تگ"
                }

            }
            
        },
        {
            title: ' ',
            key: 'action',
            render: (_, record,index) => (
                <Space size="middle">
                    <Link to = {`/posts/${getdata[index].id}`}>مشاهده پست </Link>

                </Space>
            ),
        },
    ];



    return (
        <MainLayout>
            <Table pagination={{pageSize : 5}} columns={columns} dataSource={getdata} />;
        </MainLayout>
    );
};

export default PostsPage;