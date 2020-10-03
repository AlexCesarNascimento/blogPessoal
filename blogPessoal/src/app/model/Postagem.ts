import { Tema } from './Tema';

export class Postagem{
    public id: number;
    public titulo: string;
    public texto: string;
    public data: Date;
    public tema: Tema; // [1] temas p/  [n] postagens 

}