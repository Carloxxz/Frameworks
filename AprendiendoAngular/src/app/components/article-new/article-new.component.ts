import { Component, inject } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-new',
  standalone: true,
  imports: [SidebarComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './article-new.component.html',
  styleUrl: './article-new.component.css'
})
export class ArticleNewComponent {

  _articleService = inject(ArticleService)
  _route = inject(ActivatedRoute)
  _router = inject(Router)

  articleForm = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    image: new FormControl('')
  })

  article: Article | any = this.articleForm.value; // Extract article dataconst
  status: string = ''

  onSubmit() {
    if (this.articleForm.valid) {
      const { title, content, image } = this.articleForm.value;

      this._articleService.create({ title, content, image }).subscribe({
        next: (response) => {
          console.log('Article created successfully:', response);
          if (response.status === 'success') {
            // Handle successful creation (e.g., navigate to another page)
            this._router.navigate(['/blog']);
          }
        },
        error: (error) => {
          console.error('Error creating article:', error);
          // Handle error (e.g., display error message to user)
        }
      });
    } else {
      // Handle form validation errors
    }
  }

}

