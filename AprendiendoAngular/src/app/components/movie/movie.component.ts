import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import Movie from '../../models/movies';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [NgClass],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  @Input() pelicula!: Movie
  @Input() index?: number
  @Output() Favorito = new EventEmitter()

  seleccionar(event: object, pelicula: Movie) {
    this.Favorito.emit({
      pelicula: pelicula
    })
  }
}
