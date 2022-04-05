// import { Menu, Layout, Row, Avatar } from 'antd';
import { Layout, Row, Avatar, Space } from 'antd';
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
        style={{
          height: '100%',
          maxWidth: 1190,
          margin: '0 auto',
        }}
        align='middle'
      >
        <img src={logo} alt='Alganews Admin'></img>

        <span style={{ color: 'darkblue' }}>
          {/* Define um espacamento entre os elementos */}
          <Space>
            <a
              // style={{ textDecoration: 'none' }}
              href='https://webmail.task.com.br/'
              target='_blank'
              rel='noreferrer'
            >
              WebMail
            </a>
            {/* insee uma barra de divisao entre os links */}
            {'|'}
            <a
              href='https://guacamole.apache.org/'
              target='_blank'
              rel='noreferrer'
            >
              Corporativo
            </a>
            {/* insee uma barra de divisao entre os links */}
            {'|'}
            <a
              href='https://nextcloud.com'
              target='_blank'
              rel='noreferrer'
            >
              Nuvem
            </a>
            {/* insere uma imagem de avatar de tamanho small */}
            <Avatar size={'small'} />
          </Space>
          {/* <Avatar /> */}
        </span>
        {/* <Avatar /> */}
      </Row>
    </Header>
  );
}
