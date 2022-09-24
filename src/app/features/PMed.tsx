// import { Col, Row, Typography } from 'antd';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function PMed() {
  // return <div>ToDo: PMed - Feature</div>;
  return (
    <>
      <Title level={4}>Power Med</Title>
      <Paragraph>
        Aplicativo básico de gerenciamento de pacientes para pequenos
        consultórios.
      </Paragraph>
      <Paragraph>
        Sistema de prontuário eletrônico, destinado ao armazenamento de fichas
        de pacientes e marcação de consultas voltado para pequenos consultórios
        normalmente dotados de uma recepção e uma ou mais salas para atendimento
        de pacientes por um ou mais médicos de uma ou mais especialidades.
      </Paragraph>
      <Title level={4}>Funcionamento</Title>
      <Paragraph>
        O Power Med é um aplicativo de automação de consultórios destinado ao
        armazenamento de endereços de pacientes, contatos e fichas em geral,
        marcação de compromissos diversos ou consultas, controle de datas
        importantes, diário pessoal, controle básico financeiro de receitas e
        despesas por usuário/médico, documentos auxiliares, permitindo armazenar
        dados clínicos de pacientes, anamneses, exames físicos, exames
        complementares, cirurgias, emissão de receitas e condutas. Pode-se
        operar o sistema com um ou mais médicos. Porém, o cadastro de pacientes
        e fichas em geral é compartilhado entre todos eles.
      </Paragraph>
      <Title level={5}>Módulos do sistema</Title>
      <ul>
        <li>
          <b>Automação de escritório</b> Calculadora integrada, documentos
          auxiliares, calendário perpétuo para agendamento de compromissos por
          usuário, envio de memorandos e mensagens entre usuários, datas
          importantes, contrôle de tarefas, caderno particular de endereços,
          contrôle simplificado de fluxo de caixa. Este módulo corresponde ao
          mesmo do aplicativo Power Appoints. Porém, com algumas nuances
          adicionais especificamente ajustadas para o perfil de consultórios.
          Para mais detalhes, consulte o aplicativo Power Appoints.
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
        O Power Med permite o seu uso de acordo com sua necessidade:
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
          Na tela de login, informe o usuário <b>pmed</b> e senha <b>teste</b>{' '}
          para prosseguir.
        </li>
      </ul>
      <Paragraph>
        Entre em contato conosco para obter maiores informações.
      </Paragraph>
    </>
  );
}
