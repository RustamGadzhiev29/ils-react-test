/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { GetPositionPoints } from "../../store/slice/routeSlice";
import { useAppSelector, useTypedDispatch } from "../../store/store";
import styles from "./Table.module.scss";
import {
  selectPositionCoords,
  selectTableCoords,
} from "../../store/selectors/selectors";
import { DataType } from "../../store/types/types";

const DECREMENT_VALUE = 1;

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

const TableComponent: React.FC = () => {
  const dispatch = useTypedDispatch();

  const tableCoords = useAppSelector(selectTableCoords);
  const positionCoords = useAppSelector(selectPositionCoords);

  const onClickHandler = (e: React.MouseEvent<any, MouseEvent>) => {
    const keyNumber = e.currentTarget.dataset.rowKey - DECREMENT_VALUE;
    dispatch(
      GetPositionPoints({
        data: tableCoords[keyNumber],
      })
    );
  };

  return (
    <Table
      className={styles.table}
      onRow={() => {
        return {
          onClick: onClickHandler,
        };
      }}
      columns={columns}
      dataSource={tableCoords}
      pagination={false}
      rowClassName={(record) =>
        record.key === positionCoords?.key ? styles.activeRow : ""
      }
    />
  );
};

export default TableComponent;
