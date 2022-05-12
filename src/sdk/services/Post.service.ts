import { Post } from '../@types/Post';
import Service from '../Service';

// estende da classe Service e herda todos os seus métodos e propriedades
class PostService extends Service {
  static getAllPosts() {
    return this.Http.get<Post.Paginated>('/posts').then(
      this.getData
    );
  }

  static getExistingPost(id: number) {
    // Http vem da classe Service que vem do Axios
    return this.Http.get<Post.Paginated>(
      `/posts/${id}`
    ).then(this.getData); // getData tembém vem da classe Service
  }
}

export default PostService;
