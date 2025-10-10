import { Component, signal } from '@angular/core';
import type { Character } from '../../interfaces/character.interface';
import { FichaPersonaje } from '../../FichaPersonaje/ficha-personaje/ficha-personaje';

@Component({
  standalone: true,
  selector: 'app-lista-personajes',
  imports: [FichaPersonaje], 
  templateUrl: './lista-personajes.html',
  styleUrls: ['./lista-personajes.css']
})
export class ListaPersonajes {
  personajes = signal<Character[]>([
    { nombre: 'superman', raza: 'extraterrestre', poder: 4 },
    { nombre: 'flash', raza: 'humano', poder: 2 },
    { nombre: 'batman', raza: 'humano', poder: 3 }
  ]);



  
}

