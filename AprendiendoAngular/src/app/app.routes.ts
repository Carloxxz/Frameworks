import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PageComponent } from './components/page/page.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/articulo/:id', component: ArticleComponent},
    {path: 'blog/crear', component: ArticleNewComponent},
    {path: 'buscar/:search', component: SearchComponent},
    {path: 'form', component: FormComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'page', component: PageComponent},
    {path: 'page/:nombre/:apellidos', component: PageComponent},
    {path: '**', component: ErrorComponent}
];
