import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [SliderComponent, SidebarComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  userForm = new FormGroup({
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    bio: new FormControl(''),
    genero: new FormControl('')
  })

  onSubmit() {
    alert("Enviado")
    console.log(this.userForm)
  }
}
