import React, { useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { fetchCoordinatesTC } from "../../features/routeReducer";
import { useAppSelector, useTypedDispatch } from "../../redux/store";

export type DataType = {
  key: React.Key;
  orderNumber: string;
  startLongitude: number;
  startLatitude: number;
  endLongitude: number;
  endLatitude: number;
};

const columns: ColumnsType<DataType> = [
  {
    title: "Номер зявки",
    dataIndex: "orderNumber",
  },
  {
    title: "Координаты от lat",
    dataIndex: "startLongitude",
  },
  {
    title: "Координаты от ing",
    dataIndex: "startLatitude",
  },
  {
    title: "	Координаты до lat",
    dataIndex: "endLongitude",
  },
  {
    title: "Координаты до ing",
    dataIndex: "endLatitude",
  },
];

// rowSelection object indicates the need for row selection

const TableComponent: React.FC = () => {
  const dataSource = useAppSelector(
    (coordinatesOrder) => coordinatesOrder.position.tableCoords
  );
  const dispatch = useTypedDispatch();
  const onClickHandler = (e: React.MouseEvent<any, MouseEvent>) => {
    dispatch(
      fetchCoordinatesTC(dataSource[e.currentTarget.dataset.rowKey - 1])
    );
  };

  const [select, setSelect] = useState({
    selectedRowKeys: [],
    loading: false,
  });

  console.log("selectedRowKeys", select);

  const { selectedRowKeys, loading } = select;
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys: any) => {
      setSelect({
        ...select,
        selectedRowKeys,
      });
    },
  };
  return (
    <div>
      <Table
        onRow={() => {
          return {
            onClick: onClickHandler,
          };
        }}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
};

export default TableComponent;
