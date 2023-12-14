import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

export default function BackBtn() {
  const router = useRouter();
  return (
    <Button type="text" icon={<ArrowLeftOutlined />} onClick={router.back} />
  );
}
