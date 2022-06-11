// import { Col, Row, Typography } from 'antd';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function PProc() {
  // return <div>ToDo: PProc - Feature</div>;
  return (
    <>
      <Title level={4}>Power Process</Title>
      <Paragraph>
        Aplicativo de controle de processos jurídicos para empresas de pequeno e
        médio porte.
      </Paragraph>
      <Paragraph>
        Sistema destinado ao armazenamento de fichas de clientes, funcionários,
        bancos, contatos, agendamento de compromissos, com controle evolutivo de
        processos, "fichas-tempo" com registro de despesas individualizadas,
        emissão de contratos, orçamentos e notas fiscais de serviço, controle
        financeiro com caixas e bancos, contas a pagar/receber, voltado para
        escritórios de advocacia.
      </Paragraph>
      <Title level={4}>Funcionamento</Title>
      <Paragraph>
        Este aplicativo foi projetado para controlar as atividades de um
        escritório de advocacia, em especial, os de pequeno e médio porte. O
        sistema Power Process pode ajudar a sua empresa a ser mais competitiva
        pelas seguintes razões:
      </Paragraph>
      <ul>
        <li>
          Os principais processos administrativos manuais, como impressão de
          notas fiscais e duplicatas, serão automatizados, deixando de consumir
          tempo e recursos, permitindo que a sua equipe concentre os esforços na
          atividade fim da empresa e na busca de resultados.
        </li>
        <li>
          Permite um controle preciso dos custos operacionais, facilitando a
          gerência e a otimização dos mesmos.
        </li>
        <li>
          Possibilita o controle financeiro de despesas, tempo de dedicação e
          acompanhamento evolutivo dos processos e ações de cada cliente, passo
          a passo, a medida em que os eventos vão acontecendo.
        </li>
        <li>
          Permite ao empresário saber onde está ganhando e onde está perdendo
          dinheiro, através dos relatórios gerenciais de horas de consultoria,
          despesas operacionais e muitos outros.
        </li>
        <li>
          Fornece uma visão financeira completa da empresa, seja através de
          números globais ou descendo ao nível de detalhe desejado.
        </li>
        <li>
          Fornece ao cliente relatórios do andamento de seus processos e ações
          permitindo inclusive o seu acompanhamento pela Internet, pelo próprio
          cliente, a qualquer dia ou horário.
        </li>
        <li>
          Elabora contratos de prestação de serviço que permitem o controle
          financeiro de recebimentos de taxas de manutenção, pró-labore, êxitos
          em causas, aplicação de índices econômicos de correção em taxas de
          manutenção e do limite de horas de consultoria estipulados.
        </li>
        <li>
          Permite a alimentação de informações em grupos, de modo a dividir as
          tarefas de um processo entre vários funcionários.
        </li>
      </ul>
      <Title level={5}>Módulos do sistema</Title>
      <ul>
        <li>
          <b>Cadastro Geral</b> Cadastramento de clientes, fornecedores,
          funcionários, etc. Permite o cadastramento de imagens tais como fotos,
          logotipos, etc. Emite etiquetas, envelopes e textos de mala direta em
          conjunto com o Microsoft Word. Cadastro de site Internet, E-mail com
          ativação automática de programa navegador e de cliente de correio
          eletrônico através de um simples "clique" de botão de mouse. 3
          endereços por ficha. Cadastro ilimitado de pessoas de contato com
          endereço, telefones, homepage e endereço de E-mail. Possibilidade de
          vinculação de documentos externos a cada ficha, tais como propostas,
          contratos, orçamentos, planilhas, imagens, diagramas, sons, vídeos,
          apresentações, páginas da Internet, E-mails, etc.{' '}
        </li>
        <li>
          <b>Estoque</b> Cadastro básico de materias de consumo da empresa.
          Permite o cadastro de imagens para cada item ou composição.
          Armazenamento de dados dos possíveis fornecedores do ítem. Controle
          das quantidades de reposição.
        </li>
        <li>
          <b>Caixas e Bancos</b> Lançamentos automáticos, a partir de contratos
          fechados, notas fiscais de serviços ou compras à vista. Controle por
          centros de custos. Relatórios de controle e gerenciais. Controla
          vários caixas e/ou contas bancárias. Extrato de contas.{' '}
        </li>
        <li>
          <b>Contas a Pagar</b> Cadastramento automático de títulos, a partir
          das notas fiscais de entrada. Controle por centro de custos. Análise
          de fluxo de caixa. Emissão de relatórios de controle. Cadastro de
          previsão de despesas mensais em planilha auxiliar possibilitando
          comparações entre valores programados e realizados.{' '}
        </li>
        <li>
          <b>Contas a Receber</b> Cadastramento automático de títulos, a partir
          de notas fiscais de serviços. Controle por centro de custos. Análise
          de fluxo de caixa. Emissão de relatórios de controle.{' '}
        </li>
        <li>
          <b>Funções avançadas</b> Módulo de parametrização do Sistema. Cadastro
          geral integrado ao módulo de automação de escritório permitindo o
          acompanhamento evolutivo de atividades realizadas com clientes
          (agendamento de compromissos, consultas e exames), controle de horas
          de consultoria e controle de despesas reembolsáveis. Possibilidade de
          agrupamento de fichas do cadastro geral por tipos específicos, ramos
          de atividade, região de atuação e por grupos de fichas comuns para
          permitir a geração de relatórios financeiros sofisticados.{' '}
        </li>
        <li>
          <b>Contratos</b> Controle e emissão de contratos de prestação de
          serviços abrangendo valores fixos, taxas periódicas de manutenção,
          valor final ou êxito e controle de limites de horas de consultoria
          técnica. Lançamento automático de títulos de cobrança no cadastro de
          contas a receber. Possibilidade de aplicação de índices de correção
          nas taxas de manutenção dos contratos. controle de reembolsos por
          cliente. Emissão de notas fiscais de serviços. Emissão de relatórios
          periódicos de reembolsos de despesas não tributáveis.
        </li>
        <li>
          <b>Automação de escritório</b> Agenda, Calculadora integrada,
          Calendário perpétuo, envio de memorandos e mensagens entre
          funcionários do sistema, datas importantes, Controle de tarefas e
          controle simplificado de Fluxo de caixa. Controle de horas de
          consultoria gastas com clientes, Controle de despesas reembolsáveis
          com clientes.
        </li>
        <li>
          <b>Gerência do Sistema</b> Controle de Usuários e senhas com definição
          de Grupos de trabalho e permissões de acesso.
        </li>
        <li>
          <b>Notas Fiscais</b> Geração de notas fiscais de serviços a partir dos
          gastos computados com despesas reembolsáveis, horas extras de
          consultoria técnica, com lançamento automático das parcelas
          estipuladas no cadastro de contas a receber.
        </li>
        <li>
          <b>Cobrança eletrônica</b> Possibilidade de geração de títulos de
          cobrança eletrônica (boletos) e integração com sistema de cobrança
          bancário para permitir o envio de lotes de títulos e a quitação
          automática dos mesmos gerados no sistema através de arquivos de
          transferência no padrão CNAB. O sistema admite trabalhar com várias
          contas e vários bancos simultaneamente.
        </li>
        <li>
          <b>Cheques</b> Controle e emissão de cheques para pagamento de várias
          contas com baixa automática dos títulos no cadastro de contas a pagar.
        </li>
        <li>
          <b>Integração com a Internet</b> Disponibilização de histórico
          evolutivo dos processos e ações por cliente. Acesso a agenda de
          compromissos dos funcionários da empresa para consulta. Consulta aos
          dados através da utilização de senhas de acesso a páginas seguras.
        </li>
        <li>
          <b>Cadastro de Acervo Técnico</b> Permite o cadastro de livros,
          publicações técnicas, apostilas, material audio-visual, etc. Permite
          especificar o local de armazenamento (Sala, armário, estante, etc).
          Permite o agrupamento do acervo por famílias, categorias ou grupos
          para facilitar a pesquisa e localização. Controle de empréstimo a
          usuários.{' '}
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
        <li>Permite a implantação de vários usuários.</li>
        <li>Possibilidade de funcionamento em ambiente de rede local.</li>
      </ul>
      <Title level={5}>Requisitos mínimos necessários para instalação</Title>
      <ul>
        <li>Um computador básico compatível com o padrão PC</li>
        <li>Sistema operacional Windows</li>
        <li>4 Gigabytes de memória RAM</li>
        <li>Cerca de 10 Megabytes de espaço inicial requerido em disco</li>
      </ul>
      <Title level={4}>Opções de utilização</Title>
      <Paragraph>
        O Power Process permite o seu uso de acordo com sua necessidade:
      </Paragraph>
      <ul>
        <li>
          <b>Modo Monousuário stand-alone</b> Versão configurada para uso em uma
          única máquina em modo stand-alone (sem rede)
        </li>
        <li>
          <b>Modo Multiusuário stand-alone</b> Versão configurada para uso em
          uma única máquina em modo stand-alone (sem rede), porém suportando
          vários usuários que compartilham o mesmo banco de dados.
        </li>
        <li>
          <b>Mutiusuário rede</b> Versão configurada paro o suporte de vários
          usuários em várias máquinas compartilhando o mesmo banco de dados
          através de uma rede local. O banco de dados precisa ser compartilhado
          para acesso pelas máquinas através de uma pasta compartilhada na rede
          de uma das máquinas ou através de um servidor dedicado (recomendado).
        </li>
        <li>
          <b>Versão Web</b> Versão configurada paro o suporte de vários usuários
          em várias máquinas compartilhando o mesmo banco de dados através de
          uma rede local e também via acesso pela internet por navegador. Esta
          modalidade requer um servidor dedicado dentro do local para permitir a
          configuração do compartilhamendo do banco de dados na rede interna e
          também pela internet.
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
      <ul>
        <li>
          Selecione o link <b>Corporativo</b> disponível no menu principal para
          ter acesso a demonstração do aplicativo funcionando no modo Web a
          partir do navegador.
        </li>
        <li>
          Na tela de login, informe o usuário <b>pproc</b> e senha <b>teste</b>{' '}
          para prosseguir.
        </li>
      </ul>
      <Paragraph>
        Entre em contato conosco para obter maiores informações.
      </Paragraph>
    </>
  );
}
