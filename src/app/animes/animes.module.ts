import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAnimeComponent } from './list-anime/list-anime.component';
import { AnimeDetailComponent } from './animeDetail/animeDetail.component';

@NgModule({
  imports: [
    CommonModule 
  ],
  declarations: [ListAnimeComponent, AnimeDetailComponent],

  exports: [ListAnimeComponent]})
export class AnimesModule { }
