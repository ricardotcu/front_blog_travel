import { User } from './User'
import { Comentario } from './Comentario';

export class Post {
  public id: number
  public titulo: string
  public descricao: string
  public caminho: string
  public user: User
  public comenterios: Comentario[];
}