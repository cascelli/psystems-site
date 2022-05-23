export default function Contato() {
  //
  // Define contúdo HTML a ser interpretado e renderizado como retorno
  // Usar essa opção para obter consteúdo HTML armazenado como variavel de ambiente
  //  ou como propriedade recuperada de um objeto armazenado em um banco de dados através de
  //  uma API e uso de requisição get()
  const HTML_CONTENT = `<br><h1><b>Teste de inserção de texto em página a partir de constante que armazena conteúdo HTML</b></h1>
    <b>Listagem</b> 
    <ul> 
      <li>item 1</li> 
      <li>item 2</li> 
      <li>item 3</li> 
    </ul>
  `;

  // Funcao que criará o conteúdo HTML armazenado em uma constante ou propriedade de objeto de API
  function createMarkup() {
    return {
      // _html precisa ser definico com esse nome para trabalhar em conjunto com dangerouslySetInnerHTML
      // Referencias para consulta
      // https://qastack.com.br/programming/33381029/react-how-to-pass-html-tags-in-props
      // https://reactjs.org/docs/dom-elements.html
      // https://www.javaer101.com/pt/article/7380968.html
      // https://www.npmjs.com/package/react-sanitized-html
      __html: HTML_CONTENT,
    };
  }

  return (
    <>
      {/* <div>ToDo: Contato - Feature</div> */}
      {/* <div dangerouslySetInnerHTML={createMarkup()} />; */}
    </>
  );
}
