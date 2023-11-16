import { Flex, Button } from 'antd';

import styles from './style.module.css';

export default function List({ items }) {
  return (
    <Flex vertical>
      {items.map((item) => (
        <Flex
          key={item.key}
          className={styles.listItem}
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
