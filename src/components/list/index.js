import { Flex } from 'antd';

import styles from './style.module.css';
import { useTheme } from '@/state/theme/theme-context';

export default function List({ items }) {
  const { theme } = useTheme();

  return (
    <Flex vertical>
      {items.map((item) => (
        <Flex
          key={item.key}
          className={theme === 'dark' ? styles.listItemDark : styles.listItem}
          align="center"
          justify="space-between"
        >
          <Flex vertical>
            <span className="title">{item.title}</span>
            <span className="content">{item.content}</span>
          </Flex>
          <Flex justify="space-between" className={styles.editIcon}>
            {item.icons}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
