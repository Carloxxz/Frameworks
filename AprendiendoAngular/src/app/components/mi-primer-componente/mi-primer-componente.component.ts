import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-primer-componente',
  standalone: true,
  imports: [],
  templateUrl: './mi-primer-componente.component.html',
  styleUrl: './mi-primer-componente.component.css'
})
export class MiPrimerComponenteComponent {
  public titulo: string
  public comentario: string
  public year: number

  constructor() {
    this.titulo = "Hola mundo"
    this.comentario = "Este es mi primer componente"
    this.year = 2020

    console.log("componente creado")
  }

}
