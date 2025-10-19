import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-halloween-form',
  templateUrl: './halloween-form.component.html',
  styleUrls: ['./halloween-form.component.css']
})
export class HalloweenFormComponent {
  halloweenForm: FormGroup;
  enviado = false;
  mensajeExito = '';

  tiposInvitado = ['Humano', 'Fantasma', 'Vampiro', 'Bruja'];

  constructor(private fb: FormBuilder) {
    this.halloweenForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      tipoInvitado: ['', Validators.required],
      disfraz: ['', Validators.required],
      fechaLlegada: ['', Validators.required],
      aceptaReglas: [false, Validators.requiredTrue]
    });
  }

  get f() {
    return this.halloweenForm.controls;
  }

  onSubmit() {
    this.enviado = true;
    if (this.halloweenForm.valid) {
      this.mensajeExito = `🎃 ¡Bienvenido/a, ${this.f['nombre'].value}! Tu entrada para la fiesta del castillo ha sido registrada con éxito.`;
      this.halloweenForm.reset();
      this.enviado = false;
    }
  }
}
