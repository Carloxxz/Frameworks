import { Component, OnInit, inject } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SliderComponent } from '../slider/slider.component';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';
import { ArticlesComponent } from '../articles/articles.component';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [SidebarComponent, SliderComponent, ArticlesComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  articles: Article[] = [];

  url: string = Global.url

  public _articleService = inject(ArticleService)

  ngOnInit() {
    this._articleService.getArticles().subscribe({
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
