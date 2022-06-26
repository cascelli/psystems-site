// import { Col, Row, Typography } from 'antd';
import { Carousel, Row } from 'antd';

import pmedAgenda from '../../assets/images/pmed/pmed-agenda.jpg';

import pmedCadastroClienteGeral from '../../assets/images/pmed/pmed-cadastro-cliente-geral.jpg';
import pmedCadastroClienteEnderecos from '../../assets/images/pmed/pmed-cadastro-cliente-enderecos.jpg';
import pmedCadastroClienteComplemento from '../../assets/images/pmed/pmed-cadastro-cliente-complemento.jpg';
import pmedCadastroClienteContatos from '../../assets/images/pmed/pmed-cadastro-cliente-contatos.jpg';
import pmedCadastroClienteDocumentos from '../../assets/images/pmed/pmed-cadastro-cliente-documentos.jpg';
import pmedCadastroClienteAnamnesesHistorico from '../../assets/images/pmed/pmed-cadastro-cliente-anamneses-historico.jpg';
import pmedCadastroClienteAnamnesesHistoriaClinicaCadastroEdicao from '../../assets/images/pmed/pmed-cadastro-cliente-anamneses-historia-clinica-cadastro-edicao.jpg';
import pmedCadastroClienteAnamnesesExamesFisicosCadastroEdicao from '../../assets/images/pmed/pmed-cadastro-cliente-anamneses-exames-fisicos-cadastro-edicao.jpg';
import pmedCadastroClienteAnamnesesExamesComplementaresCadastroEdicao from '../../assets/images/pmed/pmed-cadastro-cliente-anamneses-exames-complementares-cadastro-edicao.jpg';
import pmedCadastroClienteDiagnosticos from '../../assets/images/pmed/pmed-cadastro-cliente-diagnosticos.jpg';
import pmedCadastroClienteCirurgias from '../../assets/images/pmed/pmed-cadastro-cliente-cirurgias.jpg';
import pmedCadastroClienteCondutas from '../../assets/images/pmed/pmed-cadastro-cliente-condutas.jpg';
import pmedCadastroClienteCondutaAdicaoEdicao from '../../assets/images/pmed/pmed-cadastro-cliente-conduta-adicao-edicao.jpg';
import pmedCadastroClienteCondutaImpresso from '../../assets/images/pmed/pmed-cadastro-cliente-conduta-impresso.jpg';
import pmedCadastroClienteReceitas from '../../assets/images/pmed/pmed-cadastro-cliente-receitas.jpg';
import pmedCadastroClienteReceitaAdicaoEdicao from '../../assets/images/pmed/pmed-cadastro-cliente-receita-adicao-edicao.jpg';
import pmedCadastroClienteReceitaImpresso from '../../assets/images/pmed/pmed-cadastro-cliente-receita-impresso.jpg';
import pmedCadastroClienteCartaoResumoImpresso from '../../assets/images/pmed/pmed-cadastro-cliente-cartao-resumo-impresso.jpg';
import pmedCadastroClienteFichaImpressos from '../../assets/images/pmed/pmed-cadastro-cliente-ficha-impressos.jpg';
import pmedCadastroClienteFichaDadosBasicosHistoriaClinica from '../../assets/images/pmed/pmed-cadastro-cliente-ficha-dados-basicos-historia-clinica.jpg';
import pmedCadastroClienteFichaDiagnosticosCirurgias from '../../assets/images/pmed/pmed-cadastro-cliente-ficha-diagnosticos-cirurgias.jpg';

import pmedCadastroMedicoGeral from '../../assets/images/pmed/pmed-cadastro-medico-geral.jpg';
import pmedCadastroMedicoEnderecos from '../../assets/images/pmed/pmed-cadastro-medico-enderecos.jpg';
import pmedCadastroMedicoCapacitacao from '../../assets/images/pmed/pmed-cadastro-medico-capacitacao.jpg';
import pmedCadastroMedicoAgenda from '../../assets/images/pmed/pmed-cadastro-medico-agenda.jpg';
import pmedCadastroMedicoCarimbo from '../../assets/images/pmed/pmed-cadastro-medico-carimbo.jpg';

import pmedCadastroPessoaFisicaJuridicaGeral from '../../assets/images/pmed/pmed-cadastro-pessoa-fisica-juridica-geral.jpg';
import pmedCadastroPessoaFisicaJuridicaEnderecos from '../../assets/images/pmed/pmed-cadastro-pessoa-fisica-juridica-enderecos.jpg';

import pmedCadastroFrasesPadrao from '../../assets/images/pmed/pmed-cadastro-frases-padrao.jpg';

import pmedCompromissoCadastroEdicao from '../../assets/images/pmed/pmed-compromisso-cadastro-edicao.jpg';
import pmedCompromissosListagens from '../../assets/images/pmed/pmed-compromissos-listagens.jpg';
import pmedCompromissosImpressao from '../../assets/images/pmed/pmed-compromissos-impressao.jpg';
import pmedCompromissosImpressaoHonorarios from '../../assets/images/pmed/pmed-compromissos-impressao-honorarios.jpg';

import pmedCadastroLocalizarFicha from '../../assets/images/pmed/pmed-cadastro-localizar-ficha.jpg';

import pmedListagemCompromissosDiario from '../../assets/images/pmed/pmed-listagem-compromissos-diario.jpg';

import pmedSetup from '../../assets/images/pmed/pmed-setup.jpg';
import pmedSetupDaEstacao from '../../assets/images/pmed/pmed-setup-da-estacao.jpg';
import pmedUsuarios from '../../assets/images/pmed/pmed-usuarios.jpg';
import pmedGruposDePermissoes from '../../assets/images/pmed/pmed-grupos-de-permissoes.jpg';
import pmedInfoBaseDeDados from '../../assets/images/pmed/pmed-info-base-de-dados.jpg';

import pmedCadastroAplicativosExternos from '../../assets/images/pmed/pmed-cadastro-aplicativos-externos.jpg';

import pmedCadastroConvenios from '../../assets/images/pmed/pmed-cadastro-convenios.jpg';
import pmedCadastroDiagnosticosAnatomicos from '../../assets/images/pmed/pmed-cadastro-diagnosticos-anatomicos.jpg';
import pmedCadastroDiagnosticosEtiologicos from '../../assets/images/pmed/pmed-cadastro-diagnosticos-etiologicos.jpg';
import pmedCadastroDiagnosticosNosologicos from '../../assets/images/pmed/pmed-cadastro-diagnosticos-nosologicos.jpg';
import pmedCadastroDiagnosticosOutros from '../../assets/images/pmed/pmed-cadastro-diagnosticos-outros.jpg';
import pmedCadastroFuncoesDeMedicos from '../../assets/images/pmed/pmed-cadastro-funcoes-de-medicos.jpg';
import pmedCadastroMeiosPagto from '../../assets/images/pmed/pmed-cadastro-meios-pagto.jpg';
import pmedCadastroRamosAtividade from '../../assets/images/pmed/pmed-cadastro-ramos-atividade.jpg';
import pmedCadastroTiposFicha from '../../assets/images/pmed/pmed-cadastro-tipos-ficha.jpg';

import pmedDocumentosAuxiliaresCompartilhados from '../../assets/images/pmed/pmed-documentos-auxiliares-compartilhados.jpg';
import pmedEnderecosParticularesAdicionarLocalizar from '../../assets/images/pmed/pmed-enderecos-particulares-adicionar-localizar.jpg';
import pmedEnderecosParticulares from '../../assets/images/pmed/pmed-enderecos-particulares-adicionar-localizar.jpg';
import pmedEstatisticasCirurgias from '../../assets/images/pmed/pmed-estatisticas-cirurgias.jpg';
import pmedListaTelefonica from '../../assets/images/pmed/pmed-lista-telefonica.jpg';
import pmedRelatoriosFichario from '../../assets/images/pmed/pmed-relatorios-fichario.jpg';

import pmedCadastros from '../../assets/images/pmed/pmed-cadastros.jpg';
import pmedEstatisticas from '../../assets/images/pmed/pmed-estatisticas.jpg';
import pmedListagensCruzadas from '../../assets/images/pmed/pmed-listagens-cruzadas.jpg';

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
      <div>
        <Row>
          <img style={contentStyleImage} src={pmedAgenda} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Agenda</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroClienteGeral}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro de clientes - Dados gerais</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroClienteEnderecos}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro de clientes - Endereços</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroClienteComplemento}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro de clientes - Dados complementares
        </h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroClienteContatos}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro de clientes - Pessoas de contato
        </h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroClienteDocumentos}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro de clientes - Documentos auxiliares
        </h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroClienteAnamnesesHistorico}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro de clientes - Anamneses - Histórico evolutivo
        </h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroClienteAnamnesesHistoriaClinicaCadastroEdicao}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro de clientes - Anamneses - História clinica - Cadastro/Edição
        </h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroClienteAnamnesesExamesFisicosCadastroEdicao}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro de clientes - Anamneses - Exames físicos - Cadastro/Edição
        </h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroClienteAnamnesesExamesComplementaresCadastroEdicao}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro de clientes - Anamneses - Exames complementares -
          Cadastro/Edição
        </h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroClienteDiagnosticos}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro de clientes - Diagnósticos</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroClienteCirurgias}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro de clientes - Cirurgias</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroClienteCondutas}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro de clientes - Condutas médicas
        </h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroClienteCondutaAdicaoEdicao}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro de clientes - Conduta - Adição/Edição
        </h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroClienteCondutaImpresso}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro de clientes - Conduta - Impresso
        </h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroClienteReceitas}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro de clientes - Receitas médicas
        </h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroClienteReceitaAdicaoEdicao}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro de clientes - Receita - Adição/Edição
        </h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroClienteReceitaImpresso}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro de clientes - Receita - Impresso
        </h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroClienteCartaoResumoImpresso}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro de clientes - Cartão resumo</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroClienteFichaImpressos}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro de clientes - Impressos - Ficha clínica
        </h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroClienteFichaDadosBasicosHistoriaClinica}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro de clientes - Impressos - Dados básicos e história clínica -
          parte 1
        </h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroClienteFichaDiagnosticosCirurgias}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro de clientes - Impressos - Diagnósticos e cirurgias - parte 2
        </h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroMedicoGeral}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro de médicos - Dados gerais</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroMedicoEnderecos}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro de médicos - Endereços</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroMedicoCapacitacao}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro de médicos - Capacitações</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroMedicoAgenda}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro de médicos - Configuração de agendamentos
        </h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroMedicoCarimbo}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro de médicos - Configuração de carimbo
        </h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroPessoaFisicaJuridicaGeral}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro - Pessoa Física/Jurídica - Dados gerais
        </h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroPessoaFisicaJuridicaEnderecos}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro - Pessoa Física/Jurídica - Endereços
        </h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroFrasesPadrao}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro de médicos - Cadastro de frases padrão
        </h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCompromissoCadastroEdicao}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro/Edição de compromisso</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCompromissosListagens}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Compromissos - Listagens</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCompromissosImpressao}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Compromissos - Impressão</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCompromissosImpressaoHonorarios}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Compromissos - Honorários - Impressão</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroLocalizarFicha}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Localizar ficha</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedListagemCompromissosDiario}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Agendamentos - Listagem de compromissos diário
        </h4>
      </div>
      <div>
        <Row>
          <img style={contentStyleImage} src={pmedSetup} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Setup do sistema</h4>
      </div>
      <div>
        <Row>
          <img style={contentStyleImage} src={pmedSetupDaEstacao} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Setup da estação/usuário</h4>
      </div>
      <div>
        <Row>
          <img style={contentStyleImage} src={pmedUsuarios} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Usuários do sistema</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedGruposDePermissoes}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Grupos e objetos de permissão de acesso do sistema
        </h4>
      </div>
      <div>
        <Row>
          <img style={contentStyleImage} src={pmedInfoBaseDeDados} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Informações da base de dados</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroAplicativosExternos}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Aplicativos externos</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroConvenios}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Convênios médicos</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroDiagnosticosAnatomicos}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Diagnósticos anatômicos</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroDiagnosticosEtiologicos}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Diagnósticos etiológicos</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroDiagnosticosNosologicos}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Diagnósticos nosológicos</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroDiagnosticosOutros}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Outros diagnósticos</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroFuncoesDeMedicos}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Funções de médicos</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroMeiosPagto}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Meios de pagamento</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroRamosAtividade}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Ramos de atividade</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedCadastroTiposFicha}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Tipos de ficha</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedDocumentosAuxiliaresCompartilhados}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro - Documentos auxiliares compartilhados
        </h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedEnderecosParticularesAdicionarLocalizar}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Endereços particulares - Adicionar/Localizar
        </h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedEnderecosParticulares}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Endereços particulares</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedEstatisticasCirurgias}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Esttisticas - Cirurgias</h4>
      </div>
      <div>
        <Row>
          <img style={contentStyleImage} src={pmedListaTelefonica} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Lista telefônica</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedRelatoriosFichario}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Relatorios - Fichário</h4>
      </div>
      <div>
        <Row>
          <img style={contentStyleImage} src={pmedCadastros} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Menu - Cadastros</h4>
      </div>
      <div>
        <Row>
          <img style={contentStyleImage} src={pmedEstatisticas} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Menu - Estatisticas</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pmedListagensCruzadas}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Menu - Listagens cruzadas</h4>
      </div>
    </Carousel>
  );
}
