import React from "react";
import { Layout, theme } from "antd";
import TableComponent from "../table/Table";
import Map from "../map/Map";

const { Header, Content, Sider } = Layout;

const LayoutComponent: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout>
        <Sider width={600} style={{ background: colorBgContainer }}>
          <TableComponent />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
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
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
