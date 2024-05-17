export class Anime 
{
    id: number;
    name: string;
    img: string;
    Rating: string;
    categorie: string;

    constructor (id: number, name: string, img: string, 
        Rating: string, categorie: string)
    {
        this.id = id;
        this.name = name;
        this.img = img;
        this.Rating = Rating;
        this.categorie = categorie;
    }
}
