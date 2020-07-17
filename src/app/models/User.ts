import { Post } from './Post';
import { Comentario } from './Comentario';
import { Favorito } from './Favorito';

export class User {
  public id: number;
  public nome: string;
  public email: string;
  public senha: string;
  public caminho: string;
  public posts: Post[];
  public comenterios: Comentario[];
  public favoritos: Favorito[];
}