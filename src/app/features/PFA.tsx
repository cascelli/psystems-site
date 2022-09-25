// export default function PFA() {
//   return <div>ToDo: PFA - Feature</div>;
// }

// import { Col, Row, Typography } from 'antd';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function PFA() {
  // return <div>ToDo: PFA - Feature</div>;
  return (
    <>
      <Title level={4}>Power Failure Analysis</Title>
      <Paragraph>
        Aplicativo destinado a análise hierárquica e confiabilidade de sistemas,
        determinação de mecanismos de Modos de Falha e Análise de Efeito (FMEA -
        Failure Mode And Effect Analysis) e em Análise de Causa Raiz (RCA - Root
        Cause Analysis).
      </Paragraph>
      <Title level={4}>Funcionamento</Title>
      <Paragraph>
        O módulo de Hierarquia de sistemas é o ponto central do aplicativo. Este
        módulo é o responsável pelas seguintes tarefas:
      </Paragraph>
      <ul>
        <li>
          Cadastro da árvore hierárquica (Tree View) dos Sistemas, Subsistemas,
          Itens e Unidades intercambiáveis de mais baixo nível ou LRUs (Lowest
          Replaceable Units) sob estudo. Fatores como preço da unidade, tempo e
          custo envolvidos na manutenção ou reparo do mesmo devem ser
          considerados ao se elaborar a hierarquia e o nível mais baixo
          pretendido (limite de atuação).
        </li>
        <li>
          Cadastro de detalhes de cada Sistema, Subsistema, Item ou LRU da
          árvore.
        </li>
        <li>
          Cadastro de anexos ou referências de documentos na internet para cada
          nó da árvore (Informações adicionais vitais para um bom entendimento
          da estrutura hierárquica dos sistemas, subsistemas, Itens e LRUs).{' '}
        </li>
        <li>
          Definição de Mapa de Risco (Risk Discovery) para o Sistema,
          Subsistema, Item ou LRU do nó da árvore.
        </li>
        <li>
          Definição de Plano de Análise (Analysis Plan) para o Sistema,
          Subsistema, Item ou LRU do nó da árvore.{' '}
        </li>
        <li>
          Determinação da Análise de Efeitos e Modos de Falha (FMEA - Fail Mode
          and Effect Analysis) do Sistema, Subsistema, Item ou LRU do nó da
          árvore.{' '}
        </li>
      </ul>
      <Title level={5}>Módulos do sistema</Title>
      <ul>
        <li>
          <b>Hierarquia de sistemas</b> Tela de cadastramento de sistemas com
          seus niveis hierárquicos iniciado com o nível mais alto até o mais
          baixo a ser considerado, conhecido como LRU ou unidade intercambiável
          de baixo nível :
          <ul>
            <li>
              <b>TreeView</b> Controle gráfico que fornece a visão em árvore da
              hierarquia do sistema onde são criados os Sistemas, Subsistemas,
              Itens e LRUs.
            </li>
            <li>
              <b>Detalhes</b> Conjunto de informações referentes ao elemento de
              Sistema, Subsistema, Item ou LRU selecionado no controle gráfico
              TreeView. Basicamente, nestes campos são informados o tipo de
              elemento da árvore (se Sistema, Subsistema, Item ou LRU), Anexos
              (documentos auxiliares, links externos na internet, etc), Nome,
              Part Number, Versão, Fornecedor, Descrição, Comentários, dentre
              outras.
            </li>
            <li>
              <b>Análises</b> Parte que indica/permite o cadastro de análises de
              Mapa de Risco (Risk Discovery), Plano de Análise (Analysis Plan) e
              FMEA (Fail Mode and Effect Analysis) sendo que este último permite
              o disparo do módulo RCA ( Root Cause Analysis - Análise de causa
              raiz) baseado também em um componente gráfico semelhante ao
              diagrama hierarquico de sistemas.
            </li>
          </ul>
        </li>
        <li>
          Parametrização do Sistema - Escalas :
          <ul>
            <li>
              Definir as escalas a serem utilizadas na determinação dos níveis
              prioritários de risco (NPRs) necessários na Análise Efeitos dos
              modos de Falha (FMEA).
            </li>
            <li>
              Definir as escalas a serem utilizadas na Análise de Risco (Risk
              Discovery).
            </li>
            <li> Definir unidades de medida.</li>
          </ul>
        </li>
        <li>Geração de relatórios de análises :</li>
        <ul>
          <li>Pareto de Número de Prioridade de Risco - NPR</li>
          <li>Pareto de Severidade x Ocorrência - SO</li>
          <li>Pareto de Severidade - S</li>
          <li>Relatório de Causa Raiz</li>
        </ul>
        <li>Geração de relatórios de parâmetros :</li>
        <ul>
          <li>Escala de Risco</li>
          <li>Escala de Severidade</li>
          <li>Escala de Ocorrências</li>
          <li>Escala de Detecção</li>
        </ul>
        <li>
          <b>Gerência do Sistema</b> Contrôle de usuários e senhas com definição
          de grupos de trabalho e permissões de acesso.
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
        O Power Failure Analysis permite o seu uso de acordo com sua
        necessidade:
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
      {/* <ul>
        <li>
          Selecione o link <b>Corporativo</b> disponível no menu principal para
          ter acesso a demonstração do aplicativo funcionando no modo Web a
          partir do navegador.
        </li>
        <li>
          Na tela de login, informe o usuário <b>pfa</b> e senha <b>teste</b>{' '}
          para prosseguir.
        </li>
      </ul> */}
      <Paragraph>
        Entre em contato conosco para obter maiores informações.
      </Paragraph>{' '}
    </>
  );
}
