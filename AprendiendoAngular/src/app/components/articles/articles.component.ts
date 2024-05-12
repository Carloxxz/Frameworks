import { Component, Input } from '@angular/core';
import { Global } from '../../services/global';
import { Article } from '../../models/article';
import { MomentModule } from 'ngx-moment';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [MomentModule, RouterLink],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {

  url: string = Global.url
  @Input() articles: Article[] | any = {}

}
