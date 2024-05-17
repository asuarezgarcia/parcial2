import { Component, OnInit } from '@angular/core';
import { AnimeDetail } from '../animeDetail';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-list-anime',
  templateUrl: './list-anime.component.html',
  styleUrls: ['./list-anime.component.css']
})

export class ListAnimeComponent implements OnInit {

  animes: Array<AnimeDetail> = [];
  selected: Boolean = false;
  selectedAnime!: AnimeDetail;
  promedio: number = 0;
  Rating: number = 0;

  constructor(private aanimeService: AnimeService) { }

  ngOnInit() {
    this.getAnimes();
  }

  getAnimes(): void {
    this.aanimeService.getAnimes().subscribe(animes => this.animes = animes);
  }

  getEpisodes() {
    let totalEp = 0;
    for (let anime of this.animes) {
      totalEp += anime.episode;
    }
    this.promedio =  totalEp;
  }

  getAverageRating() {
    let totalRating = 0;
    for (let anime of this.animes) {
      const aa: number = parseFloat(anime.Rating);
      totalRating += aa;
    }
    this.Rating =  totalRating / this.animes.length;
  }

  onSelect(anime: AnimeDetail): void {
    this.selected = true;
    this.selectedAnime = anime;
  }

}
