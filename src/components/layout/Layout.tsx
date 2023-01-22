/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Layout, theme } from "antd";
import Map from "../map/Map";
import TableComponent from "../table/Table";
import styles from "./Layout.module.scss";

const { Content } = Layout;

const ContentComponent: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className={styles.mainWrapper}>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
        }}
      >
        <TableComponent />
      </Content>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
        }}
      >
        <Map />
      </Content>
    </Layout>
  );
};

export default ContentComponent;
