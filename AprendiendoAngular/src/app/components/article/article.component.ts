import { Component, inject, Input, OnInit } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-article',
  standalone: true,
  imports: [SliderComponent, SidebarComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {

  public article?: Article

  _articleService = inject(ArticleService)

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      const id = params['id'];

      this._articleService.getArticle(id).subscribe(
        response => {
          this.article = response.article;
        },
        error => {
          console.error(error);
          this._router.navigate(['/home']); // Handle error and redirect
        }
      );
    });
  }

}
