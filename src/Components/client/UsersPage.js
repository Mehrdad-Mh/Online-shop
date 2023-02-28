import React, { useEffect, useState } from "react";
import MainLayout from "../Layout/mainLayout";
import axios from "axios";
import clientConfig from "../../clientConfig";
import { Row, Col } from "reactstrap";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const UsersPage = () => {
  const [getUsers, setGetUsers] = useState([]);

  useEffect(() => {
    if (getUsers.length === 0) {
      axios
        .get(`${clientConfig.siteUrl}/wp-json/wp/v2/users`)
        .then((users) => {
          console.log(users);
          setGetUsers(users.data);
        })
        .catch((err) => console.log(err));
    }
  });

  console.log(getUsers);

  return (
    <MainLayout>
      <Row>
        {getUsers.length > 0
          ? getUsers.map((user) => {
              return (
                <Col className="mt-3" xs={12} sm={12} md={6} lg={4} xl={3}>
                  <Link to={`/user/${user.id}`}>
                 
                  <Card
                    hoverable
                    style={{ width: "100%" }}
                    cover={
                      <img
                      
                        alt="example"
                        src="https://github.com/nkoepke/profile-image/blob/main/images/title_image_pi.png?raw=true"
                      />
                    }
                  >
                    <Meta
                      title={user.name}
                      
                    />
                  </Card>
                  </Link>
                </Col>
              );
            })
          : ""}
      </Row>
    </MainLayout>
  );
};

export default UsersPage;
