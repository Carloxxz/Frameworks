import { Component, OnInit, inject } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ArticlesComponent } from '../articles/articles.component';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SliderComponent, SidebarComponent, ArticlesComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  articles: Article[] = []

  search: string = ''

  _route = inject(ActivatedRoute)
  _router = inject(Router)
  _articleService = inject(ArticleService)


  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let search = params['search']
      this.search = search

      this._articleService.search(search).subscribe({
        next: (response) => (
          this.articles = response.articles
        ),
        error: (error) => {
          console.error(error);
        }
      })
    })

  }

}
