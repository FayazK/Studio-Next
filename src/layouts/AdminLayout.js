import { useState } from 'react'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Typography, Layout, Menu, theme, Flex } from 'antd'

const { Title } = Typography

const { Header, Content, Footer, Sider } = Layout

function getItem (label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  }
}

const items = [
  getItem('Option 1', '1', <PieChartOutlined/>),
  getItem('Option 2', '2', <DesktopOutlined/>),
  getItem('User', 'sub1', <UserOutlined/>, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined/>,
    [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined/>),
]
const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed}
             onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical"/>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"
              items={items}/>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Flex align={'center'} justify={'space-between'}>
            <Title level={2}>Header here</Title>
          </Flex>
          {children}
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          <Typography.Text type={'secondary'}>Ant Design &copy;{new Date().getFullYear()} Created by <a href={'https://fayazk.com'} target={'_blank'}>Fayaz K</a></Typography.Text>
        </Footer>
      </Layout>
    </Layout>
  )
}
export default AdminLayout
