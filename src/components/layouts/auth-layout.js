import { Flex } from 'antd';
import { ConfigProvider } from 'antd';

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
    </ConfigProvider>
  );
}
