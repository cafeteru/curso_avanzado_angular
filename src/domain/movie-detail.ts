import { Movie } from './movie';

export interface MovieDetail extends Movie {
    plot: string;
    runtime: number;
}