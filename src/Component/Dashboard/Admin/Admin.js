import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Row, Tab } from "react-bootstrap";
import imgOne from "../../../img/apartment1.png";
import "./Admin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faUserPlus,
  faShoppingBag,
  faHouseUser,
} from "@fortawesome/free-solid-svg-icons";
import AddService from "../AddService/AddService";

const Admin = () => {
  return (
    <>
      <div className="Admin">
        <div className="container">
          <Tab.Container id="list-group-tabs-example">
            <Row>
              <Col sm={3}>
                <ListGroup variant="flush">
                  <ListGroup.Item className="link" action href="#li" disabled>
                    <div>
                      <img className="imgOne" src={imgOne} alt="" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="link1" action href="#link1">
                    <span>
                      <FontAwesomeIcon
                        className="faShoppingBag"
                        icon={faShoppingBag}
                      />
                      Ordel List
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="link2" action href="#link2">
                    <span>
                      <FontAwesomeIcon
                        className="faShoppingBag"
                        icon={faPlus}
                      />
                      Add Service
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="link3" action href="#link3">
                    <span>
                      <FontAwesomeIcon
                        className="faShoppingBag"
                        icon={faUserPlus}
                      />
                      Make Admin
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="link4" action href="#link4">
                    <span>
                      <FontAwesomeIcon
                        className="faShoppingBag"
                        icon={faHouseUser}
                      />
                      Manage Services
                    </span>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <h1>work</h1>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    <AddService></AddService>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link3">work</Tab.Pane>
                  <Tab.Pane eventKey="#link4">work</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};

export default Admin;
