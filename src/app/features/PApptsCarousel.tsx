// import { Col, Row, Typography } from 'antd';
import { Carousel, Row } from 'antd';

import papptsAgenda from '../../assets/images/pappts/pappts-agenda.jpg';

import papptsCadastroListaPorAniversarioCartao from '../../assets/images/pappts/pappts-cadastro-lista-por-aniversario-cartao.jpg';
import papptsCadastroListaPorAniversario from '../../assets/images/pappts/pappts-cadastro-lista-por-aniversario.jpg';
import papptsCadastroListaPorCidade from '../../assets/images/pappts/pappts-cadastro-lista-por-cidade.jpg';
import papptsCadastroListaPorEstado from '../../assets/images/pappts/pappts-cadastro-lista-por-estado.jpg';
import papptsCadastroListaPorRamosDeAtividade from '../../assets/images/pappts/pappts-cadastro-lista-por-ramos-de-atividade.jpg';
import papptsCadastroListaPorTipoDeFicha from '../../assets/images/pappts/pappts-cadastro-lista-por-tipo-de-ficha.jpg';
import papptsCadastroListaTelefonica from '../../assets/images/pappts/pappts-cadastro-lista-telefonica.jpg';

import papptsCadastroPfGeral from '../../assets/images/pappts/pappts-cadastro-pf-geral.jpg';
import papptsCadastroPfComplemento from '../../assets/images/pappts/pappts-cadastro-pf-complemento.jpg';
import papptsCadastroPfEnderecos from '../../assets/images/pappts/pappts-cadastro-pf-enderecos.jpg';
import papptsCadastroPfContatosVinculados from '../../assets/images/pappts/pappts-cadastro-pf-contatos-vinculados.jpg';
import papptsCadastroPfDocumentos from '../../assets/images/pappts/pappts-cadastro-pf-documentos.jpg';

import papptsCompromissoCadastroEdicao from '../../assets/images/pappts/pappts-compromisso-cadastro-edicao.jpg';
import papptsCompromissosImpressao from '../../assets/images/pappts/pappts-compromissos-impressao.jpg';
import papptsCompromissosListagens from '../../assets/images/pappts/pappts-compromissos-listagens.jpg';

import papptsDatasImportantes from '../../assets/images/pappts/pappts-datas-importantes.jpg';

import papptsDiario from '../../assets/images/pappts/pappts-diario.jpg';

import papptsDocumentosAuxiliares from '../../assets/images/pappts/pappts-documentos-auxiliares.jpg';

import papptsEnderecos from '../../assets/images/pappts/pappts-enderecos.jpg';

import papptsExecutarAplicativoExterno from '../../assets/images/pappts/pappts-executar-aplicativo-externo.jpg';

import papptsMalote from '../../assets/images/pappts/pappts-malote.jpg';
import papptsMensagens from '../../assets/images/pappts/pappts-mensagens.jpg';

import papptsParametrosTiposDeFicha from '../../assets/images/pappts/pappts-parametros-tipos-de-ficha.jpg';

import papptsSegurancaGrupos from '../../assets/images/pappts/pappts-seguranca-grupos.jpg';
import papptsSegurancaUsuarios from '../../assets/images/pappts/pappts-seguranca-usuarios.jpg';

import papptsSetupDaEstacao from '../../assets/images/pappts/pappts-setup-da-estacao.jpg';
import papptsSetup from '../../assets/images/pappts/pappts-setup.jpg';

import papptsTarefas from '../../assets/images/pappts/pappts-tarefas.jpg';
import papptsTarefasRelatorio from '../../assets/images/pappts/pappts-tarefas-relatorio.jpg';

/*
import React from 'react';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const App: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default App;
*/

// import { Typography } from 'antd';

// const { Title, Paragraph } = Typography;

/*
const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
*/

const contentStyleTitle: React.CSSProperties = {
  height: '50px',
  color: '#fff',
  lineHeight: '22px',
  textAlign: 'center',
  background: '#364d79',
};

const contentStyleImage: React.CSSProperties = {
  width: '100%',
  height: '100',
};

export default function PApptsCarousel() {
  return (
    <Carousel autoplay>
      {/* <Carousel autoplay effect='fade'> */}
      {/* <Carousel autoplay dots={false}> */}
      {/*<Carousel autoplay effect='fade'> */}

      {/* 
      <div>
        <h3 style={contentStyle}>Slide 1</h3>
        <Row>
          <span>Teste de imagem</span>
        </Row>
        <Row>
          <img src={logo} alt='Alganews Admin'></img>
        </Row>
      </div>
      <div>
        <h3 style={contentStyle}>Slide 2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Slide 3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Slide 4</h3>
      </div> */}

      {/*
      <div>
        <img
          style={contentStyleImage}
          src='http://react-responsive-carousel.js.org/assets/1.jpeg'
          alt='Imagem 1'
        />
        <h3 style={contentStyleTitle}>Imagem 1</h3>
      </div>
      <div>
        <img
          style={contentStyleImage}
          src='http://react-responsive-carousel.js.org/assets/2.jpeg'
          alt='Imagem 2'
        />
        <h3 style={contentStyleTitle}>Imagem 2</h3>
      </div>
    */}

      {/*  
      <div>
        <Row>
          <img style={contentStyleImage} src={pappts01} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Agenda</h4>
      </div>

      <div>
        <Row>
          <img style={contentStyleImage} src={pappts02} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro de Pessoa Física - Geral</h4>
      </div>

      <div>
        <Row>
          <img style={contentStyleImage} src={pappts03} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro de Pessoa Física - Endereços</h4>
      </div>

      <div>
        <Row>
          <img style={contentStyleImage} src={pappts04} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro de Pessoa Física - Complemento
        </h4>
      </div>
      */}

      <div>
        <Row>
          <img style={contentStyleImage} src={papptsAgenda} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Agenda</h4>
      </div>

      <div>
        <Row>
          <img style={contentStyleImage} src={papptsDiario} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Diário</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsCadastroListaPorAniversario}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Lista por aniversário</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsCadastroListaPorAniversarioCartao}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro - Lista por aniversário - Cartão
        </h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsCadastroListaPorCidade}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Lista por cidade</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsCadastroListaPorEstado}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Lista por estado</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsCadastroListaPorRamosDeAtividade}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro - Lista por ramos de atividade
        </h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsCadastroListaPorTipoDeFicha}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Lista por tipo de ficha</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsCadastroListaTelefonica}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Lista telefônica</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsCadastroPfGeral}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro - Pessoa Física - Dados gerais
        </h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsCadastroPfEnderecos}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Pessoa Física - Endereços</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsCadastroPfComplemento}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro - Pessoa Física - Dados complementares
        </h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsCadastroPfContatosVinculados}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro - Pessoa Física - Contatos vinculados
        </h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsCadastroPfDocumentos}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Pessoa Física - Documentos</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsCompromissoCadastroEdicao}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Compromisso - Cadastro/Edição</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsCompromissosImpressao}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Compromissos - impressão</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsCompromissosListagens}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Compromissos - Listagens</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsDatasImportantes}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Datas importantes</h4>
      </div>

      <div>
        <Row>
          <img style={contentStyleImage} src={papptsDiario} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Diário</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsDocumentosAuxiliares}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Documentos auxiliares</h4>
      </div>

      <div>
        <Row>
          <img style={contentStyleImage} src={papptsEnderecos} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Endereços/Contatos particulares</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsExecutarAplicativoExterno}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Executar aplicativo externo</h4>
      </div>

      <div>
        <Row>
          <img style={contentStyleImage} src={papptsMalote} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Malote de correspondências enviadas</h4>
      </div>

      <div>
        <Row>
          <img style={contentStyleImage} src={papptsMensagens} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Mensages enviadas / Atividades e tarefas
        </h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsParametrosTiposDeFicha}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Parâmetros de configuração - Tipos de ficha cadastral
        </h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsSegurancaGrupos}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Segurança - Criação/Atribuição de Grupos de permissões
        </h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsSegurancaUsuarios}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Segurança - Criação/Edição de usuários e atribuições de grupos de
          permissão
        </h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsSetupDaEstacao}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Setup da Estação</h4>
      </div>

      <div>
        <Row>
          <img style={contentStyleImage} src={papptsSetup} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Setup da base de dados do sistema permissão
        </h4>
      </div>

      <div>
        <Row>
          <img style={contentStyleImage} src={papptsTarefas} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Tarefas/Controle financeiro particular de pagamentos/recebimentos
        </h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={papptsTarefasRelatorio}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Relatorio de tarefas/controle financeiro particular
        </h4>
      </div>
    </Carousel>
  );
}
