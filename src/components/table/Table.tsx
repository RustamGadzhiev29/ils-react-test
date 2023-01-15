import React, { useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useTypedDispatch } from "../../redux/store";
import { GetPositionAC, fetchCoordinatesTC } from "../../features/routeReducer";

interface DataType {
  key: React.Key;
  orderNumber: string;
  startLongitude: number;
  startLatitude: number;
  endLongitude: number;
  endLatitude: number;
}

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

const data: DataType[] = [
  {
    key: 1,
    orderNumber: "№1",
    startLongitude: 59.84660399,
    startLatitude: 30.29496392,
    endLongitude: 59.82934196,
    endLatitude: 30.42423701,
  },
  {
    key: 2,
    orderNumber: "№2",
    startLongitude: 59.82934196,
    startLatitude: 30.42423701,
    endLongitude: 59.82761295,
    endLatitude: 30.41705607,
  },
  {
    key: 3,
    orderNumber: "№3",
    startLongitude: 59.83567701,
    startLatitude: 30.38064206,
    endLongitude: 59.84660399,
    endLatitude: 30.29496392,
  },
  {
    key: 4,
    orderNumber: "№4",
    startLongitude: 59.84660399,
    startLatitude: 30.29496392,
    endLongitude: 59.82761295,
    endLatitude: 30.41705607,
  },
  {
    key: 5,
    orderNumber: "№5",
    startLongitude: 59.83567701,
    startLatitude: 30.38064206,
    endLongitude: 59.84660399,
    endLatitude: 30.29496392,
  },
];

// rowSelection object indicates the need for row selection

const TableComponent: React.FC = () => {
  const dispatch = useTypedDispatch();
  const onClickHandler = (e: React.MouseEvent<any, MouseEvent>) => {
    dispatch(fetchCoordinatesTC(data[e.currentTarget.dataset.rowKey - 1]));
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
        dataSource={data}
      />
    </div>
  );
};

export default TableComponent;
