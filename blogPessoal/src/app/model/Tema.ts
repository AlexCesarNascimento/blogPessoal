import { Postagem } from './Postagem';
export class Tema{
    public id: number;
    public descricao: string;
    public postagem: Postagem[]; // [n] postagem p/ [1] tema
}