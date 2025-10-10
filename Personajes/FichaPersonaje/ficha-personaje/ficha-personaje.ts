import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common'; 
import type { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-ficha-personaje',
  imports: [NgClass], 
  templateUrl: './ficha-personaje.html',
  styleUrls: ['./ficha-personaje.css']
})
export class FichaPersonaje {
  @Input() personaje!: Character;


  getPoderArray(poder: number): number[] {
  return Array.from({ length: poder });
}


}

