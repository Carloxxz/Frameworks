import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import Movie from '../../models/movies';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SliderComponent } from '../slider/slider.component';
import { MovieComponent } from '../movie/movie.component';


@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgClass, SidebarComponent, SliderComponent, MovieComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  titulo = 'Componente de peliculas'
  favorita: Movie = { title: '', year: 0, image: '' }

  peliculas: Movie[] = [
    new Movie('pelicula1', 2019, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCwIdMAbvNp--P_I6OX1w8vc0LRNWAAQuCobi-jm-bQQ&s'),
    new Movie('pelicula2', 2018, '#'),
    new Movie('pelicula3', 2015, '#')
  ]

  cambiarTitulo() {
    this.titulo = 'Cambio'
  }

  Mostrar(event: { pelicula: Movie }) {
    this.favorita = event.pelicula
  }
}
