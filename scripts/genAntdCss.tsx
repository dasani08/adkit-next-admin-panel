import fs from 'fs';
import { extractStyle } from '@ant-design/static-style-extract';
import React from 'react';
import { ConfigProvider } from 'antd';

const outputPath = './public/antd.min.css';

const css = extractStyle((node) => (
  <ConfigProvider
      theme={{
        token: {
          fontSize: 16,
          colorPrimary: "#52c41a",
        },
      }}
    >
      {node}
  </ConfigProvider>
));

fs.writeFileSync(outputPath, css);