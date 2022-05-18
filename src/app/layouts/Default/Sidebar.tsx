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
  FundViewOutlined,
  SnippetsOutlined,
  GlobalOutlined,
  CloudOutlined,
  IdcardOutlined,
  ProfileOutlined,
  ReadOutlined,
  LayoutOutlined,
  DesktopOutlined,
  CalendarOutlined,
  MedicineBoxOutlined,
  ReconciliationOutlined,
  AuditOutlined,
  PartitionOutlined,
} from '@ant-design/icons';

import { Link, useHistory, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const { Sider } = Layout; // Primeiro importa o Layout e depois desconstroi o Sider do Layout
const { SubMenu } = Menu; // Primeiro importa o Menu e depois desconstroi o SubMenu do Menu

export default function DefaultLayoutSidebar() {
  const history = useHistory();
  const location = useLocation();

  // Debug de location
  /*
  useEffect(() => {
    console.log(location);
    console.log(location.pathname.split('/'[1]));
  }, [location]); // Toda vez que mudar a location o hook useEffect é executado
  */

  return (
    <Sider
      width={200}
      className='site-layout-background no-print'
      breakpoint='lg'
      collapsedWidth='0'
    >
      <Menu
        mode='inline'
        // defaultSelectedKeys={['1']} // Trocando de um valor fixo para um valor dinamico
        defaultSelectedKeys={[location.pathname]}
        // defaultOpenKeys={['sub1']} // Trocando de um valor fixo para um valor dinamico
        defaultOpenKeys={[location.pathname.split('/')[1]]}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item
          // key={'0'}
          key={'/'}
          onClick={() => history.push('/')}
          icon={<HomeOutlined />}
        >
          <Link to={'/'}>Home</Link>
        </Menu.Item>

        <Menu.Item
          // key={'1'}
          key={'/atuacao'}
          onClick={() => history.push('/atuacao')}
          icon={<ProfileOutlined />}
        >
          <Link to={'/atuacao'}>Atuação</Link>
        </Menu.Item>

        <SubMenu
          // key='sub1'
          key='Aplicativos'
          icon={<LayoutOutlined />}
          title='Aplicativos'
        >
          <Menu.Item
            key='/aplicativos/pappts'
            onClick={() => history.push('/aplicativos/pappts')}
            icon={<CalendarOutlined />}
          >
            <Link to={'/aplicativos/pappts'}>Power Appoints</Link>
          </Menu.Item>
          <Menu.Item
            key='/aplicativos/pmed'
            onClick={() => history.push('/aplicativos/pmed')}
            icon={<MedicineBoxOutlined />}
          >
            <Link to={'/aplicativos/pmed'}>Power Med</Link>
          </Menu.Item>
          <Menu.Item
            key='/aplicativos/pclinic'
            onClick={() => history.push('/aplicativos/pclinic')}
            icon={<MedicineBoxOutlined />}
          >
            <Link to={'/aplicativos/pclinic'}>Power Clinic</Link>
          </Menu.Item>
          <Menu.Item
            key='/aplicativos/ppack'
            onClick={() => history.push('/aplicativos/ppack')}
            icon={<ReconciliationOutlined />}
          >
            <Link to={'/aplicativos/ppack'}>Power Pack</Link>
          </Menu.Item>
          <Menu.Item
            key='/aplicativos/pproc'
            onClick={() => history.push('/aplicativos/pproc')}
            icon={<AuditOutlined />}
          >
            <Link to={'/aplicativos/pproc'}>Power Process</Link>
          </Menu.Item>
          <Menu.Item
            key='/aplicativos/pfa'
            onClick={() => history.push('/aplicativos/pfa')}
            icon={<PartitionOutlined />}
          >
            <Link to={'/aplicativos/pfa'}>Failure Analysis</Link>
          </Menu.Item>

          <Menu.Item
            key='/aplicativos/pcont'
            onClick={() => history.push('/aplicativos/pcont')}
            icon={<FundViewOutlined />}
          >
            <Link to={'/aplicativos/pcont'}>Power Contábil</Link>
          </Menu.Item>

          <Menu.Item
            key='/aplicativos/autocond'
            onClick={() => history.push('/aplicativos/autocond')}
            icon={<SnippetsOutlined />}
          >
            <Link to={'/aplicativos/autocond'}>Aut. Condomínio</Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item
          // key={'1'}
          key={'/clientes'}
          onClick={() => history.push('/clientes')}
          icon={<ReadOutlined />}
        >
          <Link to={'/clientes'}>Clientes</Link>
        </Menu.Item>

        <Menu.Item
          // key={'1'}
          key={'/contato'}
          onClick={() => history.push('/contato')}
          icon={<IdcardOutlined />}
        >
          <Link to={'/contato'}>Contato</Link>
        </Menu.Item>

        <Menu.Item
          // key={'1'}
          key={'/sites'}
          onClick={() => history.push('/sites')}
          icon={<GlobalOutlined />}
        >
          <Link to={'/sites'}>Sites Úteis</Link>
        </Menu.Item>

        <Menu.Item
          // key={'1'}
          key={'/nextcloud'}
          onClick={() => history.push('/nextcloud')}
          icon={<CloudOutlined />}
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

        <Menu.Item
          // key={'1'}
          key={'/corporativo'}
          onClick={() => history.push('/corporativo')}
          icon={<DesktopOutlined />}
        >
          <a
            // Criando link para site externo a partir de item do menu
            href='https://guacamole.apache.org/'
            target='_blank'
            rel='noreferrer'
          >
            Corporativo
          </a>
        </Menu.Item>

        {/* <SubMenu
          // key='sub1'
          key='usuarios'
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
            onClick={() => history.push('/usuarios/cadastro')}
            icon={<PlusCircleOutlined />}
          >
            <Link to={'/usuarios/cadastro'}>Cadastro</Link>
          </Menu.Item>
          <Menu.Item
            key='/usuarios/grupos'
            onClick={() => history.push('/usuarios/grupos')}
            icon={<NotificationOutlined />}
          >
            <Link to={'/usuarios/grupos'}>Grupos</Link>
          </Menu.Item>
          <Menu.Item
            key='/usuarios/permissoes'
            onClick={() => history.push('/usuarios/permissoes')}
            icon={<NotificationOutlined />}
          >
            <Link to={'/usuarios/grupos'}>Permissões</Link>
          </Menu.Item>
          <Menu.Item
            key='/usuarios/alterar-senha'
            onClick={() => history.push('/usuarios/alterar-senha')}
            icon={<NotificationOutlined />}
          >
            <Link to={'/usuarios/grupos'}>Alterar senha</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          // key='sub2'
          key='pagamentos'
          icon={<LaptopOutlined />}
          title='Pagamentos'
        >
          <Menu.Item
            key='/pagamentos'
            onClick={() => history.push('/pagamentos')}
            icon={<TableOutlined />}
          >
            <Link to={'/pagamentos'}>Consulta</Link>
          </Menu.Item>
          <Menu.Item
            key='/pagamentos/cadastro'
            onClick={() => history.push('/pagamentos/cadastro')}
            icon={<PlusCircleOutlined />}
          >
            <Link to={'/pagamentos'}>Cadastro</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          // key='sub3'
          key='fluxo-de-caixa'
          icon={<DiffOutlined />}
          title='Fluxo de Caixa'
        >
          <Menu.Item
            key='/fluxo-de-caixa/despesa'
            onClick={() => history.push('/fluxo-de-caixa/despesa')}
            icon={<FallOutlined />}
          >
            <Link to={'/fluxo-de-caixa/despesa'}>Despesa</Link>
          </Menu.Item>
          <Menu.Item
            key='/fluxo-de-caixa/receita'
            onClick={() => history.push('/fluxo-de-caixa/receita')}
            icon={<RiseOutlined />}
          >
            <Link to={'/fluxo-de-caixa/receita'}>Receita</Link>
          </Menu.Item>
        </SubMenu> */}
      </Menu>
    </Sider>
  );
}
