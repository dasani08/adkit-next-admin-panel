import { Flex } from 'antd';
import { ConfigProvider } from 'antd';

import light from '@/theme/themeConfig';

const boxStyle = {
  width: '100%',
  minHeight: '100vh',
  backgroundImage: 'url("/bg.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

export default function AuthLayout({ children }) {
  return (
    <ConfigProvider theme={light}>
      <Flex style={boxStyle} justify={'space-around'} align={'center'}>
        {children}
      </Flex>
    </ConfigProvider>
  );
}
