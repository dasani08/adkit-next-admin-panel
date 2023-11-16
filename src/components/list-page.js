import React from 'react';
import Table from './table';

import { dispatchService } from '@/lib/utils/service';

const ListPage = ({ columns, fetchApi, ...rest }) => {
  const [data, setData] = React.useState([]);
  const [meta, setMeta] = React.useState({});
  const [sorter, setSorter] = React.useState();
  const fetchApiAction = () => {
    if (!fetchApi) return;
    return dispatchService(
      () => fetchApi(),
      (_d, _m) => {
        setData(_d);
        setMeta(_m);
      },
    );
  };
  const onChange = ({ current, pageSize: ps }, ft, _sorter) => {
    // setPage(current);
    // setPageSize(ps);
    if (_sorter.order) {
      setSorter(_sorter);
    } else {
      // Reset sorted info
      setSorter();
    }
  };

  React.useEffect(fetchApiAction, [fetchApi]);

  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={data}
      scroll={{
        x: columns
          .filter((f) => f.default)
          .reduce((result, current) => {
            return result + (current?.width ?? 150);
          }, 0),
      }}
      pagination={{
        pageSize: 10,
        current: meta?.page ?? 1,
        simple: true,
        total: meta?.itemCount ?? 0,
      }}
      onChange={onChange}
      {...rest}
    />
  );
};

export default ListPage;
