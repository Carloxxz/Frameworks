import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import Movie from '../../models/movies';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SliderComponent } from '../slider/slider.component';
import { MovieComponent } from '../movie/movie.component';
import { EsparPipe } from '../../../pipes/espar.pipe';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgClass,
    SidebarComponent,
    SliderComponent,
    MovieComponent,
    UpperCasePipe,
    DatePipe,
    EsparPipe],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  titulo = 'Componente de peliculas'
  favorita?: Movie
  fecha: any = new Date()

  private _movieService = inject(MovieService)

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
