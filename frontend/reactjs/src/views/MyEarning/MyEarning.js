import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Row, Col, InputGroup, InputGroupAddon, InputGroupText, Input, Form, Label, Table, Badge} from 'reactstrap';
import { Line} from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

//style
import './style.css';

//Variables
const line = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
};

class MyEarning extends Component {
  render() {
    return (
      <div className="animated fadeIn mt-5">
          <Row className = "justify-content-center">
            <Col>
              <Card>
                <CardHeader>
                  Add Income
                </CardHeader>
                <CardBody>
                  <Form>
                    <Container-Fluid>
                      <Row>
                        <Col md = "3" className = "offset-md-2">
                          <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                Project Name
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input type="select" name="select">
                              </Input>
                          </InputGroup>
                        </Col>
                        <Col md = "2" >
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-calendar"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input type="date"/>
                          </InputGroup>
                        </Col>
                        <Col md = "2" >
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-diamond"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" placeholder="Cache"/>
                          </InputGroup>
                        </Col>
                        <Col md = "1">
                          <Input type="button" value = "Add"/>
                        </Col>
                      </Row>
                    </Container-Fluid>
                  </Form>
                </CardBody>
              </Card>
            </Col>  
          </Row>
          <Row className = "mt-5">
            <Col md = "1" className = "byDateOrWeek">
              <InputGroup>
                <Input type="select">
                  <option>Monthly</option>
                  <option>Weekly</option>
                </Input>
              </InputGroup>
            </Col>
            <Col className = "dateStart">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-calendar"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="date"/>
              </InputGroup>
            </Col>
            
              <Label>-</Label>
            
            <Col className = "dateEnd">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-calendar"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="date"/>
              </InputGroup>
            </Col>
          </Row>
          <Row className = "mt-3">
            <Col md = "6">
              <Card>
                <CardBody>
                  <Table hover bordered responsive className="table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                    <tr>
                      <th className = "jobtitleHeader">Name(Job Title)</th>
                      <th className = "ageHeader">Age</th>
                      <th>NickName</th>
                      <th className = "employeeHeader">Employee</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Vishnu Serghei</td>
                      <td>45</td>
                      <td>Member</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Zbyněk Phoibos</td>
                      <td>37</td>
                      <td>Staff</td>
                      <td>
                        <Badge color="danger">Banned</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Einar Randall</td>
                      <td>87</td>
                      <td>Admin</td>
                      <td>
                        <Badge color="secondary">Inactive</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Félix Troels</td>
                      <td>69</td>
                      <td>Member</td>
                      <td>
                        <Badge color="warning">Pending</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Aulus Agmundr</td>
                      <td>17</td>
                      <td>Staff</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                    </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md = "6">
              <Card>
                <CardBody>
                  <div className="chart-wrapper">
                    <Line data={line} options={options} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
      </div>
    );
  }
}

export default MyEarning;
