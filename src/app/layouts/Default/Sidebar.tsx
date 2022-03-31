import { Menu, Layout } from 'antd';

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  HomeOutlined,
  TableOutlined,
  PlusCircleOutlined,
  RiseOutlined,
  FallOutlined,
  DiffOutlined,
} from '@ant-design/icons';

const { Sider } = Layout; // Primeiro importa o Layout e depois desconstroi o Sider do Layout
const { SubMenu } = Menu; // Primeiro importa o Menu e depois desconstroi o SubMenu do Menu

export default function DefaultLayoutSidebar() {
  return (
    <Sider
      width={200}
      className='site-layout-background'
      breakpoint='lg'
      collapsedWidth='0'
    >
      <Menu
        mode='inline'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key={'0'} icon={<HomeOutlined />}>
          Home
        </Menu.Item>

        <SubMenu
          key='sub1'
          icon={<UserOutlined />}
          title='Usuários'
        >
          <Menu.Item key='1' icon={<TableOutlined />}>
            Consulta
          </Menu.Item>
          <Menu.Item key='2' icon={<PlusCircleOutlined />}>
            Cadastro
          </Menu.Item>
          <Menu.Item key='3'>Grupos</Menu.Item>
          <Menu.Item key='4'>Permissões</Menu.Item>
          <Menu.Item key='5'>Alterar Senha</Menu.Item>
        </SubMenu>
        <SubMenu
          key='sub2'
          icon={<LaptopOutlined />}
          title='Pagamentos'
        >
          <Menu.Item key='6' icon={<TableOutlined />}>
            Consulta
          </Menu.Item>
          <Menu.Item key='7' icon={<PlusCircleOutlined />}>
            Cadastro
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key='sub3'
          icon={<DiffOutlined />}
          title='Fluxo de Caixa'
        >
          <Menu.Item key='8' icon={<FallOutlined />}>
            Despesa
          </Menu.Item>
          <Menu.Item key='9' icon={<RiseOutlined />}>
            Receita
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}
