import { Post } from '../@types/Post';
import Service from '../Service';
import generateQueryString from '../utils/generateQueryString';

// estende da classe Service e herda todos os seus métodos e propriedades
class PostService extends Service {
  // Post.query é um objeto que foi definido adicionalmente
  // no arquivo @types/Post para lidar com parametros de query nas requisições deste serviço
  // Criar este tipo adicional para arquivo de @types de acordo com a API e Classes existentes
  static getAllPosts(search: Post.Query) {
    const queryString = generateQueryString(search);
    //console.log(queryString)
    // Http vem da classe Service que vem do Axios
    // <Post.Paginated> é o tipo de retorno esperado da requisicao
    // return this.Http.get<Post.Paginated>('/posts').then(
    // Acrescenta a queryString no final da requisição com o metodo concat()
    return this.Http.get<Post.Paginated>(
      '/posts'.concat(queryString)
    ).then(
      //response => response.data
      this.getData // getData tembém vem da classe Service - Atalho para response.data
    );
  }

  static getExistingPost(id: number) {
    // Http vem da classe Service que vem do Axios
    // <Post.Paginated> é o tipo de retorno esperado da requisicao
    return this.Http.get<Post.Paginated>(
      `/posts/${id}`
    ).then(
      //response => response.data
      this.getData
    ); // getData tembém vem da classe Service - Atalho para response.data
  }

  static inserNewPost(post: Post.Input) {
    // <Post.Detailed> é o tipo de retorno esperado da requisicao
    return this.Http.post<Post.Detailed>('/posts', post);
  }
}

export default PostService;
