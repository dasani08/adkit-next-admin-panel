'use client';
import {
  Card,
  Space,
  Button,
  Typography,
  Image,
  Radio,
  Dropdown,
  Tooltip,
} from 'antd';
import {
  PlusOutlined,
  SettingOutlined,
  InsertRowAboveOutlined,
  AppstoreOutlined,
  MenuOutlined,
  DownloadOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const gridStyle = {
  width: '50%',
  textAlign: 'center',
  cursor: 'pointer',
};

export default function ItemPage() {
  const router = useRouter();

  const newItemHandle = () => {
    router.push('/item/new');
  };

  return (
    <Card
      title="ITEMS"
      extra={
        <Space>
          <Button href="/item/new" icon={<PlusOutlined />} type="primary">
            New
          </Button>
          <Button icon={<SettingOutlined />} />
          <Radio.Group value={'table'}>
            <Radio.Button value={'table'}>
              <Tooltip title="Table">
                <InsertRowAboveOutlined />
              </Tooltip>
            </Radio.Button>
            <Radio.Button value={'thumb'}>
              <Tooltip title="Grid">
                <AppstoreOutlined />
              </Tooltip>
            </Radio.Button>
          </Radio.Group>
          <Dropdown
            menu={{
              items: [
                {
                  key: '1',
                  label: 'SORT BY',
                  type: 'group',
                  children: [
                    {
                      key: '2',
                      label: 'Created Time',
                    },
                    {
                      key: '3',
                      label: 'Name',
                    },
                    {
                      key: '4',
                      label: 'SKU',
                    },
                    {
                      key: '5',
                      label: 'Stock On Hand',
                    },
                  ],
                },
                {
                  type: 'divider',
                },
                {
                  key: '6',
                  label: 'Import Items',
                  icon: <DownloadOutlined />,
                },
                {
                  key: '7',
                  label: 'Export Items',
                  icon: <UploadOutlined />,
                },
              ],
            }}
          >
            <Button icon={<MenuOutlined />} />
          </Dropdown>
        </Space>
      }
    >
      <Card.Grid style={gridStyle} onClick={newItemHandle}>
        <Space
          direction="vertical"
          styles={{
            item: {
              marginBottom: 8,
            },
          }}
        >
          <Typography.Text strong>Item Groups</Typography.Text>
          <Image width={150} preview={false} alt="" src="/group-item.png" />
          <Typography.Text>
            Create multiple variants of the same item using Item Groups
          </Typography.Text>
          <Button type="primary">New Item Group</Button>
        </Space>
      </Card.Grid>
      <Card.Grid style={gridStyle} onClick={newItemHandle}>
        <Space direction="vertical">
          <Typography.Text strong>Items</Typography.Text>
          <Image width={150} preview={false} alt="" src="/tshirt.png" />
          <Typography.Text>
            Create standalone items and service that you buy and sell
          </Typography.Text>
          <Button type="primary">New Item</Button>
        </Space>
      </Card.Grid>
      <Card.Grid style={gridStyle} onClick={newItemHandle}>
        <Space direction="vertical">
          <Typography.Text strong>Composite Items</Typography.Text>
          <Image width={150} preview={false} alt="" src="/composite-item.png" />
          <Typography.Text>
            Create different items together and sell them as kits
          </Typography.Text>
          <Button type="primary">New Composite Item</Button>
        </Space>
      </Card.Grid>
      <Card.Grid style={gridStyle} onClick={newItemHandle}>
        <Space direction="vertical">
          <Typography.Text strong>Price Lists</Typography.Text>
          <Image width={150} preview={false} alt="" src="/price-list.png" />
          <Typography.Text>
            Tweak your item prices for specific contacts or transactions
          </Typography.Text>
          <Button type="primary">New Price List</Button>
        </Space>
      </Card.Grid>
    </Card>
  );
}
