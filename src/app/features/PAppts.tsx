// import { Col, Row, Typography } from 'antd';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function PAppts() {
  // return <div>ToDo: PAppts - Feature</div>;
  return (
    <>
      <Title level={4}>Power Appoints</Title>
      <Paragraph>
        Agenda eletrônica pessoal. Agenda e acompanha compromissos, gerencia
        tarefas e finanças, emite diversos tipos de relatórios. Faz o que você
        precisa para acompanhar sua vida particular e profissional de maneira
        prática.
      </Paragraph>
      <Title level={4}>Funcionamento</Title>
      <Paragraph>
        O Power Appoints é um aplicativo de agenda pessoal destinado ao
        armazenamento de endereços de contatos, marcação de compromissos, datas
        importantes, diário pessoal e controle de receitas e despesas
        simplificado.
      </Paragraph>
      <Title level={5}>Módulos do sistema</Title>
      <ul>
        <li>
          <b>Automação de escritório</b> Calculadora integrada, documentos
          auxiliares, calendário perpétuo para agendamento de compromissos por
          usuário, envio de memorandos e mensagens entre usuários, datas
          importantes, contrôle de tarefas, caderno particular de endereços,
          contrôle simplificado de fluxo de caixa.
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
        O Power Appoints permite o seu uso de acordo com sua necessidade:
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
          Na tela de login, informe o usuário <b>pappts</b> e senha <b>teste</b>{' '}
          para prosseguir.
        </li>
      </ul>
      <Paragraph>
        Entre em contato conosco para obter maiores informações.
      </Paragraph>
    </>
  );
}
