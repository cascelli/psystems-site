// export default function PCont() {
//   return <div>ToDo: Power Cont - Feature</div>;
// }

// import { Col, Row, Typography } from 'antd';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function PCont() {
  // return <div>ToDo: PCont - Feature</div>;
  return (
    <>
      <Title level={4}>Power Contábil</Title>
      <Paragraph>
        Sistema de alimentação on-line de receitas e despesas de pequenas
        empresas, especificamente do tipo MEI para uso em escritórios de
        contabilidade em parceria com os próprios clientes.
      </Paragraph>
      <Title level={4}>Funcionamento</Title>
      <Paragraph>
        O Power Contábil é um aplicativo de cadastramento de receitas e despesas
        multiempresa que permite o lançamento em tempo real de receitas e
        despesas de empresas de pequeno porte, especialmente na modalidade MEI
        através do browser de internet visando facilitar, agilizar a emissão de
        relatórios e guias de impostos voltados para redução de custos de
        contabilidades que se comprometem em gerar apenas guias de recolhimento
        de impostos mensais e documentos simples para esta categoria de cliente
        que, normalmente, geram baixos volumes de trabalho nos escritórios.
      </Paragraph>
      <Paragraph>O aplicativo consiste de dois módulos distintos :</Paragraph>
      <ul>
        <li>
          <b>Web</b> Acessível pela internet através de um navegador pelas
          empresas. Cada empresa precisa estar cadastrada no sistema e
          habilitada para acesso por meio de seus respectivos proprietários,
          sócios ou funcionários.
        </li>
        <li>
          <b>Corporativo</b> Sistema de retaguarda instalado no escritório de
          contabilidade para permitir o gerenciamento das empresas e emissão de
          relatórios mais sofisticados não disponibilizados no modulo Web que
          necessitam intervenção da contabilidade.
        </li>
      </ul>
      <Title level={5}>Módulos do sistema</Title>
      <ul>
        <li>
          <b>Financeiro</b> Cadastro de contas a pagar e receber.
        </li>
        <li>
          <b>Upload de documentos</b> Cada lançamento de receita ou despesa no
          sistema aceita o envio e armazenamento de imagem ou documento que pode
          ser vinculado ao mesmo para corroborar o seu cadastro na geração de
          certos documentos contábeis podendo ser consultado posteriormente em
          caso de conferência pelas empresas.
        </li>
        <li>
          <b>Parametrização de lançamentos</b> Permite categorizar os
          lançamentos através de :
          <ul>
            <li>
              <b>Categoria</b> Se o lançamento corresponde a uma receita ou
              despesa
            </li>
            <li>
              <b>Fichário</b> Cadastro de Pessoa Física/Jurídica referenciado em
              cada lançamento de receita ou despesa
            </li>
            <li>
              <b>Centros de custo/Responsabilidade</b> Códigos de centros de
              custo ou responsabilidade referenciado em cada lançamento de
              receita ou despesa
            </li>
            <li>
              <b>Referência/Departamento</b> Os lançamentos podem ser
              categorizados por códigos auxiliars de referência ou departamento
              para permitir uma análise mais detalhada da empresa a partir
              destas subdivisões.
            </li>
          </ul>
        </li>
        <li>
          Consulta de fichas por :
          <ul>
            <li>Razão Social/Nome Fantasia</li>
            <li>CPF/CNPJ</li>
            <li>Código</li>
          </ul>
        </li>
        <li>Geração de relatórios de acompanhamento :</li>
        <ul>
          <li>
            Controle financeiro de receitas/despesas sumarizados ou
            categorizados
          </li>
          <li>Tabelas diversas de parametrização do sistema</li>
        </ul>
        <li>
          <b>Gerência do Sistema</b> Cadastro de empresas e contrôle de usuários
          e senhas com definição de grupos de trabalho e permissões de acesso.
        </li>
      </ul>
      <Title level={5}>Características Gerais</Title>
      <ul>
        <li>Permite visualização de relatórios na tela antes de imprimir.</li>
        <li>
          Operação padronizada: Todas as telas funcionam da mesma maneira.
        </li>
        <li>
          Visualização dos dados em forma de tela cheia ou tabular com
          possibilidade de filtragem de registros e de impressão dos mesmos.
        </li>
        <li>
          Funcionamento integrado com Word, Excel, Mail, etc para exportação de
          dados tabulares ou de relatórios pré-formatados.
        </li>
      </ul>
      <Title level={5}>Características Técnicas</Title>
      <ul>
        <li>
          <b>Multiempresa</b> O aplicativo controla uma ou mais empresas, cada
          uma com possibilidade de cadastro de funcionários e níveis de acesso
          distintos.
        </li>
        <li>Permite a implantação de vários usuários.</li>
        <li>Possibilidade de funcionamento em ambiente de rede local.</li>
      </ul>
      <Title level={5}>Requisitos mínimos necessários para instalação</Title>
      <ul>
        <li>
          Um servidor com capacidade de processamento compativel com a
          quantidade de clientes a serem controlados e suporte a banco de dados
          e espaço de armazenamento compativel com a quantidade de documentos a
          serem armazenados
        </li>
        <li>
          Sistema operacional Linux e Windows para implementar os módulos de
          retaguarda para a contabilidade e de acesso pela Web pelos clientes
        </li>
        <li>8 a 16 gigabytes de memória RAM mínimo</li>
        <li>
          Cerca de 50 gigabytes de espaço inicial requerido em disco (Este valor
          pode aumentar de acordo com a quantidade de empresas e quantidade e
          tamanho dos documentos cadastrados por cada uma delas).
        </li>
      </ul>
      <Title level={4}>Avaliação</Title>
      <Paragraph>
        Os clientes interessados tem a possibilidade de avaliação do aplicativo
        através do acesso ao mesmo por meio de uma conta de teste na Internet
        inteiramente funcional e sem restrições de módulos. A cópia de
        demonstração nada mais é do que o aplicativo em si com uma pequena
        quantidade de registros.
      </Paragraph>
      {/* <ul>
        <li>
          Selecione o link <b>Corporativo</b> disponível no menu principal para
          ter acesso a demonstração do aplicativo funcionando no modo
          corporativo a partir do navegador.
        </li>
        <li>
          Na tela de login, informe o usuário <b>pcont</b> e senha <b>teste</b>{' '}
          para prosseguir.
        </li>
      </ul> */}
      <Paragraph>
        Entre em contato conosco para obter maiores informações.
      </Paragraph>
    </>
  );
}
