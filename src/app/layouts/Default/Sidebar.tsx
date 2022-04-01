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

import { Link, useHistory } from 'react-router-dom';

const { Sider } = Layout; // Primeiro importa o Layout e depois desconstroi o Sider do Layout
const { SubMenu } = Menu; // Primeiro importa o Menu e depois desconstroi o SubMenu do Menu

export default function DefaultLayoutSidebar() {
  const history = useHistory();
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
        <Menu.Item
          key={'0'}
          onClick={() => history.push('/')}
          icon={<HomeOutlined />}
        >
          <Link to={'/'}>Home</Link>
        </Menu.Item>
        <Menu.Item
          key={'1'}
          // onClick={() => history.push('/')}
          icon={<HomeOutlined />}
        >
          <a
            // Criando link para site externo a partir de item do menu
            href='https://nextcloud.com'
            target='_blank'
            rel='noreferrer'
          >
            Nuvem
          </a>
        </Menu.Item>

        <SubMenu
          key='sub1'
          icon={<UserOutlined />}
          title='Usuários'
        >
          <Menu.Item
            key='/usuarios'
            onClick={() => history.push('/usuarios')}
            icon={<TableOutlined />}
          >
            <Link to={'/usuarios'}>Consulta</Link>
          </Menu.Item>
          <Menu.Item
            key='/usuarios/cadastro'
            onClick={() =>
              history.push('/usuarios/cadastro')
            }
            icon={<PlusCircleOutlined />}
          >
            <Link to={'/usuarios/cadastro'}>Cadastro</Link>
          </Menu.Item>
          <Menu.Item
            key='3'
            icon={<NotificationOutlined />}
          >
            Grupos
          </Menu.Item>
          <Menu.Item
            key='4'
            icon={<NotificationOutlined />}
          >
            Permissões
          </Menu.Item>
          <Menu.Item
            key='5'
            icon={<NotificationOutlined />}
          >
            Alterar Senha
          </Menu.Item>
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
