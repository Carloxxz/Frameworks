import { Component, OnInit, inject } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SliderComponent } from '../slider/slider.component';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { ArticlesComponent } from '../articles/articles.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, SliderComponent, ArticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  title = 'Ultimos articulos'

  articles: Article[] = [];

  public _articleService = inject(ArticleService)

  ngOnInit() {
    this._articleService.getArticles(true).subscribe({
      next: (response) => {
        if (response.articles) {
          this.articles = response.articles;
        }
      },
      error: (error) => {
        console.error('Error fetching articles:', error);
      }
    })
  }
}
