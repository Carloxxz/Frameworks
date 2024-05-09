import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SliderComponent } from '../slider/slider.component';


@Component({
  selector: 'app-page',
  standalone: true,
  imports: [SidebarComponent, SliderComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {
  nombre = ''
  apellidos = ''

  constructor(private _router: Router) { } // Removed _route injection

  redireccionar() {
    this._router.navigate(['/form', this.nombre, this.apellidos]); // Assuming 'pagina' route
  }
  
}

