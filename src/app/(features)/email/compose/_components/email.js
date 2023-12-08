'use client';
import React from 'react';
import { Card, Form, Input, Select, Space, Button } from 'antd';
import { Editor } from '@tinymce/tinymce-react';

export default function EmailPage() {
  const editorRef = React.useRef(null);
  const editorId = React.useId();
  return (
    <Card title="Email to Zillum Corporation">
      <Form labelAlign="left" colon={false} labelCol={{ span: 4 }}>
        <Form.Item label="From">
          <Select
            options={[
              {
                label: 'max.minsen@gmail.com',
                value: 'max.minsen@gmail.com',
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Send To">
          <Select
            mode="tags"
            options={[
              {
                label: 'enim@icloud.co.uk',
                value: 'enim@icloud.co.uk',
              },
              {
                label: 'in.hendrerit@yahoo.edu',
                value: 'in.hendrerit@yahoo.edu',
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cc">
          <Space.Compact block>
            <Form.Item noStyle style={{ width: 'calc(100% - 20px)' }}>
              <Select
                mode="tags"
                options={[
                  {
                    label: 'enim@icloud.co.uk',
                    value: 'enim@icloud.co.uk',
                  },
                  {
                    label: 'in.hendrerit@yahoo.edu',
                    value: 'in.hendrerit@yahoo.edu',
                  },
                ]}
              />
            </Form.Item>
            <Button type="link">Bcc</Button>
          </Space.Compact>
        </Form.Item>
        <Form.Item label="Subject">
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: { offset: 0 },
            sm: { offset: 0 },
            md: { offset: 4 },
          }}
        >
          <Editor
            id={editorId}
            apiKey="su4pprugz6kfxfp7tyogoeankccy3vzbszzjxhcyjrx4enud"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'a11ychecker',
                'advlist',
                'advcode',
                'advtable',
                'autolink',
                'checklist',
                'export',
                'lists',
                'link',
                'image',
                'charmap',
                'preview',
                'anchor',
                'searchreplace',
                'visualblocks',
                'powerpaste',
                'fullscreen',
                'formatpainter',
                'insertdatetime',
                'media',
                'table',
                'help',
                'wordcount',
              ],
              toolbar:
                'undo redo | casechange blocks | bold italic backcolor | ' +
                'alignleft aligncenter alignright alignjustify | ' +
                'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: { offset: 0 },
            sm: { offset: 0 },
            md: { offset: 4 },
          }}
        >
          <Space>
            <Button type="primary">SEND</Button>
            <Button>CANCEL</Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
}
