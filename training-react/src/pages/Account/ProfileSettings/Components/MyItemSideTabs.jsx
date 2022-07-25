import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ProfileSettings from './ProfileSettings';

function SideTabs() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3} className="pdleft">
          <div className="wrapper">
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first" href="#">
                  <div className="temp3">
                    <div className="temp2"><i class="fa-solid fa-gear"></i></div>  <div className="temp">Profile Settings</div>
                  </div>

                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" href="#">
                  <div className="temp3">
                    <div className="temp2"><i class="fa-solid fa-file-image"></i></div>  <div className="temp">My Items</div>
                  </div>

                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" href="#">
                  <div className="temp3">
                    <div className="temp2"><i class="fa-solid fa-list-ul"></i></div> <div className="temp">My Collections</div>
                  </div>

                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth" href="#">
                  <div className="temp3">
                    <div className="temp2"><i class="fa-solid fa-heart"></i></div> <div className="temp">Favorites</div>
                  </div>

                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth" href="#">
                  <div className="temp3">
                    <div className="temp2"><i class="fa-solid fa-bell"></i></div> <div className="temp">Notifications</div>
                  </div>

                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sixth" href="#">
                  <div className="temp3">
                    <div className="temp2"><i class="fa-solid fa-arrow-left"></i></div> <div className="temp">Sign Out</div>
                  </div>

                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>


        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <ProfileSettings />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              2
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="third">
              3
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              4
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="fifth">
              5
            </Tab.Pane>
            <Tab.Pane eventKey="sixth">
              6
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default SideTabs;