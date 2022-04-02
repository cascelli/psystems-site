import { Menu, Layout, Row, Avatar } from 'antd';
import logo from '../../../assets/logo.svg';

const { Header } = Layout; // Primeiro importa o Layout e depois desconstroi o Header do Layout

export default function DefaultLayoutHeader() {
  return (
    <Header className='header'>
      {/*
      <div className='logo' />
      <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={['2']}
      >
        <Menu.Item key='1'>
          <img src={logo} alt='Alganews Admin'></img>
        </Menu.Item>
        <Menu.Item key='2'>nav 1</Menu.Item>
        <Menu.Item key='3'>nav 2</Menu.Item>
        <Menu.Item key='4'>nav 3</Menu.Item>
      </Menu>

      */}

      {/*
        <Row
          justify={'space-between'}
          style={{ height: '100%' }}
          align='middle'
        >
          
          <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={['2']}
          >
            <img src={logo} alt='Alganews Admin'></img>
            <div style={{ color: '#fff' }}>Link 1</div>
            <div style={{ color: '#fff' }}>Link 2</div>
            <div style={{ color: '#fff' }}>
              <Menu.Item key='1'>nav 1</Menu.Item>
            </div>
          </Menu>
        </Row>
      */}

      <Row
        justify={'space-between'}
        style={{ height: '100%' }}
        align='middle'
      >
        <img src={logo} alt='Alganews Admin'></img>
        <span style={{ color: 'white' }}>
          <a href='https://webmail.task.com.br/'>
            WebMail |{' '}
          </a>
          <a href='https://nextcloud.com'>Sistemas | </a>
          <a href='https://nextcloud.com'>Contato</a>
        </span>
        {/* <Avatar /> */}
      </Row>
    </Header>
  );
}
