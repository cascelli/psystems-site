// import { Col, Row, Typography } from 'antd';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function PPack() {
  // return <div>ToDo: PPack - Feature</div>;
  return (
    <>
      <Title level={4}>Power Pack</Title>
      <Paragraph>
        Aplicativo de automação comercial para empresas de pequeno porte.
      </Paragraph>
      <Paragraph>
        Sistema empresarial, destinado ao armazenamento de fichas de clientes,
        fornecedores, transportadoras, funcionários, bancos, contatos,
        agendamento de compromissos, com controle de estoque, requisições de
        compras, emissão de orçamentos e notas fiscais de produtos/serviços,
        ordens de serviço, controle financeiro com caixas e bancos, contas a
        pagar/receber, voltado para pequenas empresas.
      </Paragraph>
      <Title level={4}>Funcionamento</Title>
      <Paragraph>
        Este aplicativo foi projetado para controlar as atividades de uma
        pequena empresa prestadora de serviços ou de venda de mercadorias com
        emissão de notas fiscais eletônicas, em especial, as de pequeno porte
        podendo auxiliá-lo a ser mais competitivo pelas seguintes razões:
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
          Permite ao empresário saber onde está ganhando e onde está perdendo
          dinheiro, através dos relatórios gerenciais de análise dos itens do
          estoque, análise de compras e vendas e muitos outros.
        </li>
        <li>
          Possibilita a precificação correta das mercadorias, através da análise
          detalhada de todos os fatores envolvidos.
        </li>
        <li>
          Fornece uma visão financeira completa da empresa, seja através de
          números globais ou descendo ao nível de detalhe desejado.
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
          <b>Vendas</b> Cadastramento de cotações informais de produtos e/ou
          serviços. Cadastramento de orçamentos de produtos e/ou serviços.
          Impressão de orçamentos, notas fiscais, duplicatas e boletos
          bancários. Pedidos de venda, com comprometimento de estoque. Emissão
          de notas fiscais de produtos e/ou serviços. Relatórios gerenciais de
          vendas.Controle diferenciado do comissionamento de vendedores por
          grupos de trabalho. Permite o cadastro de vários fornecedores para o
          produto. Permite o cadastro de composições de ítens de estoque (Kits),
          com vários níveis de aninhamento (Subcomposições). Pesquisa e lista
          notas fiscais emitidas.
        </li>
        <li>
          <b>Compras</b> Controle de requisições de compras. Geração de mapa
          para análise de cotações e de seleção do fornecedor vencedor. Controle
          de pedidos a fornecedores. Atualização automática de preços médios.
          Recebimento de produtos. Relatórios gerenciais de compras. Pesquisa e
          lista notas fiscais de entrada.{' '}
        </li>
        <li>
          <b>Estoque</b> Permite o cadastro de imagens para cada item ou
          composição. Armazenamento de dados dos possíveis fornecedores do ítem.
          Controle das quantidades de reposição. Emissão da ficha modelo "3"
          (kardex). Relatório de análise ABC do estoque. Atualização automática
          do preço médio a cada compra. Emissão do inventário, em vários
          formatos.{' '}
        </li>
        <li>
          <b>Patrimônio</b> Permite o cadastro de itens adquiridos em banco de
          dados de patrimônio. Identificação de item por família, número de
          patrimônio, part number, número de série, estado de conservação (novo
          ou usado) e status de locação (disponível, locado, manutenção ou
          baixa). Cadastro de histórico manutenções individualizado.
        </li>
        <li>
          <b>Locações</b> Criação de orçamentos, ativação, interrupção e
          conclusão de contratos de locação. Os itens locados devem fazer parte
          do cadastro de patrimônio. Possibilidade de acréscimo e devolução de
          itens em um contrato ativo antes do seu prazo estabelecido de
          vigência. Controle automático de status de itens do cadastro de
          patrimônio após a requisição ou devolução em uma locação. Criação de
          orçamentos, ativação, interrupção e conclusão de contratos de locação.
          Os itens locados devem fazer parte do cadastro de patrimônio.
          Possibilidade de acréscimo e devolução de itens em um contrato ativo
          antes do seu prazo estabelecido de vigência. Controle automático de
          status de itens do cadastro de patrimônio após a requisição ou
          devolução em uma locação.
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
          <b>Preços</b> Emissão de listas de preços. Alteração de preços em
          bloco. Planilha para cálculo dos preços dos produtos. definição de
          preços de vendas baseado em fórmulas que contemplem preço de custo de
          produtos (médio ou da última compra), impostos a serem pagos, regime
          de funcionamento da empresa (se lucro presumido, ou lucro real),
          comissões de venda e descontos percentuais máximos admitidos para cada
          item. Possibilidade de emissão de tabelas de preços diferenciados para
          cada item mediante informação de fator de multiplicação.
        </li>
        <li>
          <b>Funções avançadas</b> Reprocessamento e Auditoria do Estoque.
          Módulo de parametrização do Sistema. Cadastro geral integrado ao
          módulo de automação de escritório permitindo o acompanhamento
          evolutivo de atividades realizadas com clientes (agendamento de
          compromissos, consultas e exames), controle de horas de consultoria e
          controle de despesas reembolsáveis. Possibilidade de agrupamento de
          fichas do cadastro geral por tipos específicos, ramos de atividade,
          região de atuação e por grupos de fichas comuns para permitir a
          geração de relatórios financeiros sofisticados.{' '}
        </li>
        <li>
          <b>Ordens de serviço</b> Cadastro de solicitações, orçamentos,
          consertos, assistência técnica em clientes, controle de peças de
          reposição, gastos com transporte, alimentação, comissão de venda,
          controle e emissão de notas fiscais, controle e emissão de relatórios
          de trocas de lacres de equipamentos de precisão garantidos pelo
          InMetro. Sistema de controle de atendimento baseado em fila "FIFO" que
          sinaliza tempo decorrido em horas para cada ordem de serviço desde sua
          abertura, o status atual do processo e controle de pendências (espera
          de peças de reposição, documentação obrigatória a ser fornecia por
          cliente, etc.), se houver. Possibilidade de acompanhamento de ordens
          de serviço pela Internet pelo próprio cliente através de implementação
          de relatórios on-line no site da empresa e fornecimento de "senha"
          para acompanhamento pelo cliente.
        </li>
        <li>
          <b>Ordens de produção</b> Controle "simplificado" de produção seriada
          de itens, materiais ou produtos baseados em insumos e etapas. Controle
          de tempo e rendimento em cada etapa individual. Emissão de documentos
          com discriminiação de insumos e instruções a serem seguidas em cada
          etapa do processo produtivo ("receita de bôlo").
        </li>
        <li>
          <b>Ordens de fabricação</b> Controle "simplificado" de fabricação NÃO
          seriada de produtos ou itens ou materiais baseados em emissão de
          orçamentos individualizados que contemplam materiais, serviços e
          despesas extras (transporte, alimentação, hospedagem, etc). Emissão de
          planilha de cálculo de materiais, serviços e despesas auxiliares.
          Emissão de orçamento simplificado com informações de insumos e valor
          total dos serviços. Emissão de lista de materiais completa.
          Possibilidade de integração com o módulo de "requisição de compras"
          através de transferência da lista de materiais do orçamento.
          Possibilidade de geração de novos orçamentos baseados em orçamentos
          anteriores, visando maior velocidade na geração de novos orçamentos,
          quando os mesmos forem parecidos ou iguais a fabrições anteriormente
          realizadas.
        </li>
        <li>
          <b>Contratos</b> Controle e emissão de contratos de prestação de
          serviços ou locação de equipamentos do cadastro de patrimônios
          abrangendo valores fixos, taxas periódicas de manutenção, valor final
          ou êxito e controle de limites de horas de consultoria técnica.
          Lançamento automático de títulos de cobrança no cadastro de contas a
          receber. Possibilidade de aplicação de índices de correção nas taxas
          de manutenção dos contratos. controle de reembolsos por cliente.
          Emissão de notas fiscais de serviços. Emissão de relatórios periódicos
          de reembolsos de despesas não tributáveis.
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
          de Grupos de trabalho e permissões de acesso.{' '}
        </li>
        <li>
          <b>Notas Fiscais</b> Geração de notas fiscais de serviços a partir dos
          atendimentos agendados com discriminação de serviços, materiais,
          medicamentos e taxas cobradas e lançamento automático das parcelas
          estipuladas no cadastro de contas à receber.{' '}
        </li>
        <li>
          <b>Nota Fiscal eletrônica</b> Módulo de exportação de arquivo de dados
          de notas fiscais para utilização em conjunto com aplicativo de emissão
          de nota fiscal eletrônica (NF-e) disponibilizado pelo governo
          (http://www.nfe.fazenda.gov.br)
        </li>
        <li>
          <b>Sintegra</b> Geração de dados de notas fiscais cadastradas em
          arquivo no padrão Sintegra.
        </li>
        <li>
          <b>SPED</b> Geração de dados de notas fiscais cadastradas em arquivos
          no padrão SPED e SPED Contribuições.
        </li>
        <li>
          <b>Cobrança eletrônica</b> Possibilidade de geração de títulos de
          cobrança eletrônica (boletos) e integração com sistema de cobrança
          bancário para permitir o envio de lotes de títulos e a quitação
          automática dos mesmos gerados no sistema através de arquivos de
          transferência no padrão CNAB. O sistema admite trabalhar com várias
          contas e vários bancos simultaneamente.{' '}
        </li>
        <li>
          <b>Cheques</b> Controle e emissão de cheques para pagamento de várias
          contas com baixa automática dos títulos no cadastro de contas a pagar.
        </li>
        <li>
          <b>Acompanhamento "online" de Ordens de Serviço</b> Relatórios de
          consulta ao módulo de Ordens de Serviço através da internet pelo seu
          web browser que permite o acompanhamento em tempo real por parte do
          próprio cliente da condição atual referente ao seu atendimento
          (status), mediante cadastro e habilitação de senha de acesso.{' '}
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
        O Power Pack permite o seu uso de acordo com sua necessidade:
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
          Na tela de login, informe o usuário <b>ppack</b> e senha <b>teste</b>{' '}
          para prosseguir.
        </li>
      </ul>
      <Paragraph>
        Entre em contato conosco para obter maiores informações.
      </Paragraph>
    </>
  );
}
