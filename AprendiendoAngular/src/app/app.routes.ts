import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PageComponent } from './components/page/page.component';
import { ErrorComponent } from './components/error/error.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'form', component: FormComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'page', component: PageComponent},
    {path: 'page/:nombre', component: PageComponent},
    {path: '**', component: ErrorComponent}
];
