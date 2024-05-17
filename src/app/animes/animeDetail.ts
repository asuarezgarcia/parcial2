import { Anime } from './anime';

export class AnimeDetail extends Anime
{
    description: string;
    episode: number;
    studio: string;


    constructor (id: number, name: string, img: string, 
        Rating: string, categorie: string, description: string, 
        episode: number, studio: string)
    {
        super(id, name, img, Rating, categorie);
        this.description = description;
        this.episode = episode;
        this.studio = studio;
    }
}
