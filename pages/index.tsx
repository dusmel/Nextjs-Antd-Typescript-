import React from 'react';
import { Typography } from 'antd';
import Layout from '../components/Layout';

const { Paragraph } = Typography;

const IndexPage = () => {
  return (
    <Layout title="Save Plus">
      <h1>Hello Save Plus 👋</h1>
      <Paragraph>Welcome to Save Plus</Paragraph>
    </Layout>
  );
};

export default IndexPage;
