import React, { useState, useEffect } from 'react';
import { Dropdown, Row, Col, Table, Space } from 'antd';

export const DEFAULT_COL_WIDTH = 100;
export const DEFAULT_ITEM_PER_PAGE = 10;

export const calculateTableWidth = (columns) => {
  const tblWidth = columns.reduce(
    (width, column) => width + (column.width ?? DEFAULT_COL_WIDTH),
    0,
  );
  return `${tblWidth}px`;
};

export const getDefaultColumns = (columns) => {
  return columns.filter((column) => column.default).map((column) => column.key);
};

export default function CustomTable({
  columns,
  name,
  pagination,
  showInfo = true,
  showAction = true,
  selection = false,
  scroll = {},
  onSettingColumnsChanged,
  ...rest
}) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [displayColumns, setDisplayColumns] = useState([]);
  const [settingColumns, setSettingColumns] = useState(
    new Set(getDefaultColumns(columns)),
  );
  const [currentPagination, setCurrentPagination] = useState({
    current: 1,
    pageSize: DEFAULT_ITEM_PER_PAGE,
  });

  const tableTitle = (currentPageData) => {
    const currentPageItemCount = currentPageData.length;
    const skip =
      (currentPagination.current - 1) * currentPagination.pageSize + 1;
    return (
      <Row justify="space-between" align="middle">
        <Col>
          {showInfo && (
            <>
              Showing <b>{skip}</b>-<b>{skip + currentPageItemCount - 1}</b> of{' '}
              <b>{pagination?.total ?? 0}</b>
            </>
          )}
          {rest.title && rest.title()}
        </Col>
        {showAction && (
          <Col>
            <Space>
              {rest.extra}
              {selection && (
                <Dropdown.Button
                  menu={
                    rest.bulkActions
                      ? {
                          items: rest.bulkActions.items,
                          onClick: (e) =>
                            rest.bulkActions.onClick(e, selectedRowKeys),
                        }
                      : {}
                  }
                  disabled={selectedRowKeys.length === 0}
                >
                  Bulk actions
                </Dropdown.Button>
              )}
            </Space>
          </Col>
        )}
      </Row>
    );
  };

  const onChange = (page, pageSize) => {
    setCurrentPagination({
      current: page,
      pageSize,
    });
  };

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = selection
    ? {
        selectedRowKeys,
        onChange: onSelectChange,
      }
    : rest.rowSelection;

  useEffect(() => {
    const fixedLeftColumns = columns.filter(
      (column) => column.fixed === 'left',
    );
    const fixedRightColumns = columns.filter(
      (column) => column.fixed === 'right',
    );

    setDisplayColumns([
      ...fixedLeftColumns,
      ...columns
        .filter((column) => !column.fixed)
        .filter((column) => settingColumns.has(column.key)),
      ...fixedRightColumns,
    ]);
  }, [name, columns, settingColumns]);

  return (
    <Table
      {...rest}
      title={tableTitle}
      scroll={{ x: calculateTableWidth(displayColumns), ...scroll }}
      columns={displayColumns}
      rowSelection={rowSelection}
      pagination={
        pagination
          ? {
              ...pagination,
              onChange,
              defaultPageSize: DEFAULT_ITEM_PER_PAGE,
            }
          : false
      }
    />
  );
}
