import { Container, Box } from '@mui/material';
import { Button, Form, Input, Row, Col, Select, DatePicker, InputNumber } from 'antd';
import { increment } from '../../store/EventStore/event.Slice';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

const { TextArea } = Input;

const AddEventModal = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch()

  const onFinish = (values) => {
    dispatch(increment(values));
    form.resetFields();
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Container
          maxWidth="sm"
          className="text-center"
          sx={{
            border: '1px solid black',
            padding: '20px',
            marginTop: '50px',
            borderRadius: '5px'
          }}>
          <label style={{color: 'blue', fontWeight: 'bold'}}><Link to="/allEvent">Events</Link></label>(Go to List Page)
          <br />
          <hr />
          <Form
            form={form}
            name="Events"
            onFinish={onFinish}
          >
            <Row gutter={[30, 15]} className="form-label-hide">
              <Col xs={24} sm={24} md={10}>
                <div className="form-group m-0">
                  <Form.Item
                    name="name"
                    label="Name"
                    className="m-0"
                    rules={[{ required: true }]}
                  >
                    <Input className="form-control w-100" />
                  </Form.Item>
                </div>
              </Col>
              <Col xs={24} sm={24} md={10}>
                <div className="form-group m-0">
                  <Form.Item
                    name="type"
                    label="Type of Event"
                    className="m-0"
                    rules={[{ required: true }]}
                  >
                    <Select
                      showSearch
                      placeholder="Select an Event"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                      }
                      options={[
                        {
                          value: 'sports',
                          label: 'sports',
                        },
                        {
                          value: 'music',
                          label: 'music',
                        },
                        {
                          value: 'general',
                          label: 'general',
                        },
                        {
                          value: 'children',
                          label: 'children',
                        },
                        {
                          value: 'school',
                          label: 'school',
                        },
                      ]}
                    />
                  </Form.Item>
                </div>
              </Col>
              <Col xs={24} sm={24} md={10}>
                <div className="form-group m-0">
                  <Form.Item
                    name="start_date"
                    label="Start Date"
                    className="m-0"
                    rules={[{ required: true }]}
                  >
                    <DatePicker className="form-control w-100" />
                  </Form.Item>
                </div>
              </Col>
              <Col xs={24} sm={24} md={10}>
                <div className="form-group m-0">
                  <Form.Item
                    name="end_date"
                    label="End Date"
                    className="m-0"
                    rules={[{ required: true }]}
                  >
                    <DatePicker className="form-control w-100" />
                  </Form.Item>
                </div>
              </Col>
              <Col xs={24} sm={24} md={10}>
                <div className="form-group m-0">
                  <Form.Item
                    name="handled_by"
                    label="Handled By"
                    className="m-0"
                  >
                    <Input className="form-control w-100" />
                  </Form.Item>
                </div>
              </Col>
              <Col xs={24} sm={24} md={10}>
                <div className="form-group m-0">
                  <Form.Item
                    name="organisation"
                    label="Organisation"
                    className="m-0"
                    rules={[{ required: true }]}
                  >
                    <Input className="form-control w-100" />
                  </Form.Item>
                </div>
              </Col>
              <Col xs={24} sm={24} md={10}>
                <div className="form-group m-0">
                  <Form.Item
                    name="total_sub_events"
                    label="Total Sub Events"
                    className="m-0"
                  >
                    <InputNumber className="form-control w-100" />
                  </Form.Item>
                </div>
              </Col>
            </Row>
            <br/>
            <Row gutter={[30, 15]} className="form-label-hide">
              <Col xs={24} sm={24} md={24}>
                <div className="form-group m-0">
                  <Form.Item
                    name="description"
                    label="Description"
                    className="m-0"
                    rules={[{ required: true }]}
                  >
                    <TextArea rows={4} placeholder="maxLength is 60" maxLength={60} />
                  </Form.Item>
                </div>
              </Col>
            </Row>
            <br />
            <hr />
            <div className="btns-block modal-footer pt-lg">
              <Button
                key="submit"
                type="primary"
                htmlType="submit"
              >
                Submit Event
              </Button>
            </div>
          </Form>
        </Container>
      </Box>
    </>
  )
}
export default AddEventModal;