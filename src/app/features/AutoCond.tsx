// export default function AutoCond() {
//   return <div>ToDo: AutoCond - Feature</div>;
// }

// export default function PCont() {
//   return <div>ToDo: Power Cont - Feature</div>;
// }

// import { Col, Row, Typography } from 'antd';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function AutoCond() {
  // return <div>ToDo: AutoCond - Feature</div>;
  return (
    <>
      <Title level={4}>Auto Cond</Title>
      <Paragraph>
        Sistema on-line responsivo baseado em navegador, acessível por
        microcumputadores, tablets ou smartphones projetado para manter
        cadastros, documentos e informações úteis aos ocupantes de um condomínio
        referentes a sua rotina diária, proporcionando maior agilidade e
        transparência ao acesso a estas informações evitando a necessidade da
        presença imediata ou sobrecarga do síndico, zelador ou empresa
        administradora no esclarecimento de informações pertinetes.
      </Paragraph>
      <Title level={4}>Funcionamento</Title>
      <Paragraph>
        O funcionamento do aplicativo consiste na alimentação de cadastro de
        ocupantes, funcionários, espaços de uso comum, documentos diversos, como
        convenção de condomínio, regimento interno, atas de reuniões, normas e
        procedimentos, instruções de uso de equipamentos (localização e manuseio
        de CFTVs - câmeras, bomba d'água, registros de água, portão eletrônico,
        cerca elétrica, sistema de segurança e acesso, interfones, telefonia,
        elevadores, internet e rede sem fio, gás, irrigação, coleta de lixo,
        plantas, limpeza, depósito de materiais, etc.), diagramas e plantas
        arquitetônicas, estruturais, elétricas, hidráulicas, balancetes,
        planilhas, receitas e despesas, formulários diversos, lista de
        prestadores de serviço, sites, endereços, telefones de entidades de
        utilidade pública, concessionárias, administradoras, necessários ou
        úteis nas rotinas de um condomínio.
      </Paragraph>
      <Title level={5}>Módulos do sistema</Title>
      <ul>
        <li>
          <b>Cadastro Geral</b> Cadastro de Condôminos, proprietários e seus
          ocupantes ou contatos, prestadores de serviço, funcionários, etc
        </li>
        <li>
          <b>Espaços de uso comum</b> Cadastro de espaços de uso comum tais como
          salão de festas, jardim, quadras esporivas, academias, etc que uma vez
          cadastrados permitem o agendamento de uso por parte de condôminos. Os
          agendamentos dos espaços ficam acessíveis para consulta pelos
          condônimos em caso de interesse de acompanhamento e/ou agendamentos
          futuros que uma vez solicitados ao sindico ou gerentes do sistema
          farão as devidas inserções nos dias e locais disponíveis de acordo com
          as escalas de marcação já existentes.
        </li>
        <li>
          <b>Documentos</b> Cadastro de documentos diversos (documentos
          compatíveis com MS-Word, Planilhas do MS-Excel, MS-PowerPoint, PDF,
          imagens ou links para imagens em sites externos como instagram, vídeos
          ou links para vídeos em sites externos como youtube, etc.) que podem
          ser categorizados por assunto tais como, regimentos, atas, plantas
          arquitetônicas, normas, manuais de uso de equipamentos que podem ser
          pesquisados através de busca por palavra chave ou categoria em caso de
          necessidade. Cada documento cadastrado pode ser enviado ao sistema
          através de upload para ser consultado no momento de necessidade ou
          através da informação de link quando estiverem disponíveis na internet
          de uma maneira geral.
        </li>
        <li>
          <b>Links e referências úteis</b> Cadastro de links, telefones e
          referências úteis disponibilizado para acesso por meio de listagem
          para consulta imediata, em caso de necessidade.
        </li>
        <li>
          <b>Gerência do Sistema</b> O acesso aos cadastros e documentos
          necessita de contrôle de usuários e senhas com definição de grupos de
          trabalho e permissões. Para o caso de consulta a informações públicas,
          algumas áreas do sistema são abertas ou requerem uso de uma
          identificação padrão.
        </li>
        <li>
          <b>Acesso controlado</b> Cada documento disponibilizado pode ser
          tornado acessível para consulta pública ou restrita através de
          atribuição de permissões determinadas pelos gerentes do sistema.
        </li>
      </ul>
      <Title level={5}>Características Técnicas</Title>
      <ul>
        <li>
          <b>Sistema individual por condomínio</b> O aplicativo controla um
          condomínio separadamente e precisa ser implantado em um equipamento
          servidor de baixo custo no próprio local físico ou hospedado
          externamente em algum provedor. distintos.
        </li>
        <li>
          <b>Acesso externo controlado</b> Existe a possibilidade de
          funcionamento restrito aos ocupantes apenas dentro do condomínio
          através de sua rede local ou de maneira mais aberta pela internet
          (últil para o caso de fornecimento de informações a novos ocupantes ou
          mesmo para o acesso a informações pelos condôminos e/ou proprietários
          a partir de qualquer local).
        </li>
      </ul>
      <Title level={5}>Requisitos mínimos necessários para instalação</Title>
      <ul>
        <li>
          Um servidor com capacidade de processamento baixa, ou mini PCs que
          suportem sistema operacional Linux tais como Raspberry-Pi e afins ou
          aparelhos compatíveis com TV-Box que também suportem este sistema
          operacional.
        </li>
        <li>
          Cerca de 10 gigabytes de espaço inicial requerido em disco (Este valor
          pode aumentar de acordo com a quantidade e tamanho dos documentos
          cadastrados).
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
          ter acesso a demonstração do aplicativo funcionando no modo
          corporativo a partir do navegador.
        </li>
        <li>
          Na tela de login, informe o usuário <b>autocond</b> e senha{' '}
          <b>teste</b> para prosseguir.
        </li>
      </ul>
      <Paragraph>
        Entre em contato conosco para obter maiores informações.
      </Paragraph>
    </>
  );
}
