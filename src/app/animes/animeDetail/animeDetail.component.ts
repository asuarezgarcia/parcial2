import { Component, Input, OnInit } from '@angular/core';
import { AnimeDetail } from '../animeDetail';

@Component({
  selector: 'app-animeDetail',
  templateUrl: './animeDetail.component.html',
  styleUrls: ['./animeDetail.component.css']
})

export class AnimeDetailComponent implements OnInit {
  
  @Input() animeDetail!: AnimeDetail;

  constructor() { }

  ngOnInit() {
  }

}
