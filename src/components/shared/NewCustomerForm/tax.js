import { Form, Input, Radio, Select } from 'antd';

export default function TaxAndPaymentTab() {
  return (
    <Form labelCol={{ span: 6 }} wrapperCol={{ span: 8 }} labelAlign="left">
      <Form.Item label="Tax Preference">
        <Input.Group>
          <Radio>Taxable</Radio>
          <Radio>Tax Exempt</Radio>
        </Input.Group>
      </Form.Item>
      <Form.Item
        label="Tax Rate"
        extra={
          'To associate more than one year tax, you need to create a tax group in Settings'
        }
      >
        <Select
          options={[
            {
              label: 'Service Tax [8%]',
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Currency">
        <Select
          options={[
            {
              label: 'USD-US Dollar',
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Price List">
        <Select
          options={[
            {
              label: 'None',
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Payment Terms">
        <Select
          options={[
            {
              label: 'Weekly',
            },
            {
              label: 'Monthly',
            },
          ]}
        />
      </Form.Item>
    </Form>
  );
}
