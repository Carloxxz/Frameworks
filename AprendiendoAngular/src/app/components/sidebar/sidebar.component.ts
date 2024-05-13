import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


  _router = inject(Router)
  _route = inject(ActivatedRoute)

  searchForm = new FormGroup({
    searchString: new FormControl('')
  })


  goSearch() {
    this._router.navigate(['/buscar', this.searchForm.get('searchString')?.value])
  }

}
