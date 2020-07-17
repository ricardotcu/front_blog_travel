import { Post } from './Post'

export class User {
  public id: number
  public nome: string
  public email: string
  public senha: string
  public posts: Post[];
}