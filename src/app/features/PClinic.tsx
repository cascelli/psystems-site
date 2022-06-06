// import { Col, Row, Typography } from 'antd';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function PClinic() {
  // return <div>ToDo: PClinic - Feature</div>;
  return (
    <>
      <Title level={4}>Power Clinic</Title>
      <Paragraph>
        Aplicativo básico de gerenciamento clínicas de pequeno porte.
      </Paragraph>
      <Paragraph>
        Sistema de prontuário eletrônico, destinado ao armazenamento de fichas
        de pacientes e controle de evolução clinica, receituário e condutas,
        marcação de consultas e exames voltado para pequenas clínicas,
        normalmente, dotados de uma recepção e uma ou mais salas para
        atendimento de pacientes por um ou mais médicos de uma ou mais
        especialidades, laboratório com dependências para execução exames e
        emissão de laudos correspondentes e possibilidade de atendimento em
        pequenos procedimentos.
      </Paragraph>
      <Title level={4}>Funcionamento</Title>
      <Paragraph>
        Este aplicativo foi projetado para controlar as atividades de uma
        clínica ou grupo de consultórios, em especial, de pequeno porte. pode
        ajudar a sua empresa a ser mais competitiva :
      </Paragraph>
      <ul>
        <li>
          Os principais processos administrativos manuais, como impressão de
          faturas de convênio, procedimentos realizados, notas fiscais, recibos
          e duplicatas, serão automatizados, deixando de consumir tempo e
          recursos, permitindo que a sua equipe concentre os esforços na
          atividade fim da empresa e na busca de resultados.
        </li>
        <li>
          Permite um controle preciso dos custos operacionais, facilitando a
          gerência e a otimização dos mesmos.
        </li>
        <li>
          Permite ao empresário saber onde está ganhando e onde está perdendo
          dinheiro, através dos relatórios gerenciais de faturamento, despesas
          operacionais e muitos outros.
        </li>
        <li>
          Possibilita o controle financeiro de despesas, faturamento junto às
          empresas conveniadas passo a passo, à medida em que os atendimentos
          aos pacientes vão acontecendo, de uma maneira natural, exigindo o
          mínimo de esforço no acompanhamento e inserção de dados.
        </li>
        <li>Gera relatórios de previsão de faturamento junto aos convênios.</li>
        <li>
          Gera relatórios de demonstrativo de pagamento médico, por
          profissional, com informação detalhada de procedimento realizado,
          convênio correspondente, valor pago, repasses, procedimentos glosados,
          etc.
        </li>
        <li>
          Fornece relatórios estatísticos de procedimentos realizados e
          indicações de clientes.
        </li>
        <li>
          Gera relatórios específicos de procedimentos requeridos pelos
          convênios IPSEMG, Unimed e outros, discriminando além do procedimento,
          os materiais, medicamentos e taxas cobrados por cada cliente atendido.
        </li>
        <li>
          Fornece uma visão financeira completa da empresa, seja através de
          números globais ou descendo ao nível de detalhe desejado.
        </li>
        <li>
          Permite a alimentação de informações em grupos, de modo a dividir as
          tarefas de um processo entre vários funcionários.
        </li>
        <li>
          Agenda integrada de marcação de compromissos, procedimentos e
          consultas com grade de horários personalizável ou atendimento imediato
          para casos urgentes ou realização de exames (Laboratório).
        </li>
        <li>
          Emissão de laudos receituário e resultados de exames realizados com
          armazenamento na ficha do paciente dos mesmos além do armazenamento do
          histórico dos procedimentos e consultas anteriores já realizados na
          clínica.
        </li>
        <li>
          Possibilidade de funcionar como uma empresa de convênios, com controle
          de associados e dependentes, emissão de carteiras e cobrança de taxas
          através da emissão de boletos de corança integrados a bancos tais como
          Itaú, Bradesco e Banco do Brasil.
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
          <b>Automação de escritório</b> Agenda, Calculadora integrada,
          Calendário perpétuo, Envio de memorandos e mensagens entre
          funcionários do sistema, datas importantes, Controle de tarefas e
          controle simplificado de Fluxo de caixa. Atribuição e acompanhamento
          de execução de atividades a funcionários da empresa. Criação
          individualizada de grade de marcação de atendimento por agenda/médico.
          Verificação no próprio consultório de pacientes presentes e no aguardo
          de atendimento através de confirmação de chegada na recepção sem a
          necessidade de consulta a recepcionista. Verificação de débitos
          anteriores de clientes no momento da chegada a clinica com indicação
          de valores.
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
          <b>Cobrança eletrônica</b> Possibilidade de geração de títulos de
          cobrança eletrônica (boletos) e integração com sistema de cobrança
          bancário para permitir o envio de lotes de títulos e a quitação
          automática dos mesmos gerados no sistema através de arquivos de
          transferência no padrão CNAB. O sistema admite trabalhar com várias
          contas e vários bancos simultaneamente. Esta opção pode ser utilizada
          no caso de configuração do sistema como uma empresa de convênio com
          cadastro de associados e seus dependentes que cobra taxa mensal de
          seus associados.{' '}
        </li>
        <li>
          <b>Fatura eletrônica</b> Geração da fatura a ser entregue aos
          convênios credenciados, com informação dos pacientes, médicos
          atendentes e auxiliares, procedimentos, materiais, medicamentos e
          taxas correspondentes. Emissão do arquivo de fatura eletrônica da
          Unimed.
        </li>
        <li>
          <b>Cheques</b> Controle e emissão de cheques para pagamento de várias
          contas com baixa automática dos títulos no cadastro de contas a pagar.{' '}
        </li>
        <li>
          <b>Cadastro de pacientes</b> Dados pessoais, endereço, diagnósticos,
          anamneses, cirurgias, receitas e laudos emitidos. Cadastro
          diferenciado de pessoa física e jurídica. Sub-cadastro específico de
          empresas conveniadas, funcionários, dependentes de funcionários,
          titulares, dependentes de titulares, particulares/novatos.
          Possibilidade de emissão de carteira de associado, se configurado como
          empresa de convênio. Verificação de débitos e créditos do paciente
          através do acesso ao cadastro de contas a pagar, contas a receber e
          títulos de cobrança emitidos como possibilidade de quitação e emissão
          de recibos correspondentes.
        </li>
        <li>
          <b>Cadastro de indicações</b> Permite informar os solicitantes,
          encaminhantes ou indicadores de clientes com possibilidade de geração
          de relatórios estatísticos de acompanhamentos.
        </li>
        <li>
          <b>Cadastro de procedimentos</b> Permite a definição dos procedimentos
          realizados, com discriminação dos valores a serem cobrados.
          Possibilidade de utilização e discriminação de valores específicos de
          taxas por convênio, tabela de referência de valores tais como AMB,
          CIEFAS, UNIMED, etc. Cadastro de materiais, medicamentos e taxas
          padrões e diferenciadas/adicionais por convênio. Atribuição
          individualizada de procedimentos por Agenda/Médico e Convênio
          desejados. Cadastro de textos padronizados que podem ser utilizados na
          emissão de laudos e resultados de exames.
        </li>
        <li>
          <b>Cadastro de planos de pagamento</b> Se configurado como uma empresa
          de convênio, permite o estabelecimento de vários planos de pagamento
          com a cobrança de taxas diferenciadas por quantidade de dependentes, e
          definição de taxas de inscrição/reinscrição.
        </li>
        <li>
          <b>Cadastro de pacientes</b> Dados pessoais, endereço, histórico de
          anamneses, diagnósticos (anatômicos, etiológicos e sindrômicos),
          exames físicos e complementares cirurgias, cadastro e emissão de
          receitas e condutas.
        </li>
        <li>
          <b>Frases padrão</b> Cadastro de frases padrão que permite a inserção
          das mesmas a cada nova emissão/edição de receita ou conduta médica
          visando agilizar e padronizar o proceso de atendimento a um paciente
        </li>
        <li>
          Opções de geração de impressão de receitas e condutas com ou sem data
          de emissão, com ou sem carimbo do médico, com ou sem o timbrado do
          consultório.
        </li>
        <li>
          <b>Prontuário</b> Emissão de ficha clínica/prontuário médico do
          paciente com os dados cadastrais básicos (identificação, convênio,
          endereços, telefones, pessoas de contato, dados físicos e sanguíneos,
          observações adicionais), todo o histórico evolutivo de anamneses,
          exames físicos e complementares, diagnósticos e cirurgias armazenados
          para encaminhamento a outros locais, médicos, etc.
        </li>
        <li>
          <b>Agendamentos controlados</b> Possibilidade de criação de agendas de
          marcação por médico ou por local (número do consultório, por exemplo).
          Possibilidade de travamento/bloqueio de dias e horários da semana por
          médico/agenda para impedir o agendamento de compromissos em dias e
          horários distintos pela recepcionista.
        </li>
        <li>
          Grade de marcação de compromissos com intervalo mínimo de 5 minutos de
          duração entre cada um deles. Marcações de compromissos são checadas
          para evitar conflito de horários e durações no momento de um novo
          agendamento. Cada médico/agenda permite definir o tempo de duração
          padrão do compromisso.
        </li>
        <li>
          Controle visual de chegada de pacientes a recepção e aviso automático
          do médico dentro do consultório. Ao fazerem o check-in na recepção, o
          sistema avisa ao médico se o paciente chegou antes do horário, se ele
          chegou atrasado ou se o horário de atendimento do mesmo foi
          ultrapassado sem que o mesmo ainda não tenha sido atendido.
        </li>
        <li>Geração de relatórios de fichas :</li>
        <ul>
          <li>Filtrado por caracteres iniciais do nome</li>
          <li>Por tipo (Pessoa Física ou Jurídica)</li>
          <li>
            Por tipo de ficha (cliente, fornecedor, banco, transportadora, etc)
          </li>
          <li>
            Por ramo de atividade (suprimentos, informática, alimentos,
            construção, etc)
          </li>
          <li>Por estado da federação</li>
          <li>Por cidade</li>
          <li>Por data de anivesário/fundação</li>
        </ul>
        <li>Geração de relatórios de compromissos :</li>
        <ul>
          <li>Por médico</li>
          <li>Por agenda</li>
          <li>Todas agendas</li>
          <li>Compromissos do dia</li>
          <li>Compromissos da semana</li>
          <li>Compromissos do período</li>
          <li>Compromissos cumpridos, não cumpridos ou todos</li>
          <li>Compromissos públicos, particulares ou todos</li>
        </ul>
        <li>Geração de relatórios diversos :</li>
        <ul>
          <li>Tarefas</li>
          <li>Controle financeiro de receitas/despesas</li>
          <li>Tabelas diversas do sistema</li>
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
        <li>
          Permite a implantação de vários usuários, médicos, agendas, locais de
          atendimento.
        </li>
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
        O Power Clinic permite o seu uso de acordo com sua necessidade:
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
          Na tela de login, informe o usuário <b>pclin</b> e senha <b>teste</b>{' '}
          para prosseguir.
        </li>
      </ul>
    </>
  );
}
