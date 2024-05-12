import { Injectable } from '@angular/core';
import Movie from '../models/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movie: Movie[] = [
    new Movie('pelicula1', 2019, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCwIdMAbvNp--P_I6OX1w8vc0LRNWAAQuCobi-jm-bQQ&s'),
    new Movie('pelicula2', 2018, '#'),
    new Movie('pelicula3', 2015, '#')
  ]

  getMovie() {
    return this.movie
  }

}
