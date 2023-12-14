import { Flex, FloatButton } from 'antd';
import { ConfigProvider } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import theme from '@/theme/themeConfig';

const boxStyle = {
  width: '100%',
  minHeight: '100vh',
  backgroundImage: 'url("/bg.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

export default function AuthLayout({ children }) {
  return (
    <ConfigProvider theme={theme.light}>
      <Flex style={boxStyle} justify={'space-around'} align={'center'}>
        {children}
      </Flex>
      <FloatButton
        href="/dashboard"
        icon={<HomeOutlined />}
        type="primary"
        style={{ right: 24 }}
      />
    </ConfigProvider>
  );
}
