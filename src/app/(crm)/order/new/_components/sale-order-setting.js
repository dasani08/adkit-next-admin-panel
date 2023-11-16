'use client';
import { Form, Modal, Typography, Row, Col, Input, Radio, Space } from 'antd';

export default function SaleOrderSettingModal({ open, onClose }) {
  return (
    <Modal
      title={'Sales Order#'}
      open={open}
      width={680}
      onCancel={onClose}
      onOk={onClose}
      okText="SAVE"
      cancelText="CANCEL"
    >
      <Typography.Text>
        Your sales order numbers are set on auto-generate mode to save your
        time. Do you want to change settings?
      </Typography.Text>
      <Radio.Group style={{ marginTop: 16 }} value={1}>
        <Row>
          <Col span={12}>
            <Space>
              <Radio value={1}>
                Continue auto-generating sales order numbers
              </Radio>
            </Space>
          </Col>
          <Col span={12}>
            <Form layout="vertical">
              <Input.Group>
                <Form.Item
                  label="Prefix"
                  style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                  <Input defaultValue={'SO-'} />
                </Form.Item>
                <Form.Item
                  label="Next Number"
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                    marginLeft: 8,
                  }}
                >
                  <Input defaultValue={'00122'} />
                </Form.Item>
              </Input.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Radio value={2}>I will add them manually each time</Radio>
          </Col>
        </Row>
      </Radio.Group>
    </Modal>
  );
}
