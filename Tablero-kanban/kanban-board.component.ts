import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit {

  todo: Tarea[] = [];
  doing: Tarea[] = [];
  done: Tarea[] = [];

  nuevoTitulo = '';
  nuevaDescripcion = '';

  constructor() {}

  ngOnInit(): void {
    this.cargarDesdeLocalStorage();
  }

  agregarTarea(): void {
    if (!this.nuevoTitulo.trim()) return;

    const nuevaTarea: Tarea = {
      id: Date.now(),
      titulo: this.nuevoTitulo,
      descripcion: this.nuevaDescripcion,
      estado: 'todo'
    };

    this.todo.push(nuevaTarea);
    this.nuevoTitulo = '';
    this.nuevaDescripcion = '';
    this.guardarEnLocalStorage();
  }

  eliminarTarea(lista: Tarea[], tarea: Tarea) {
    const index = lista.indexOf(tarea);
    if (index >= 0) {
      lista.splice(index, 1);
      this.guardarEnLocalStorage();
    }
  }

  drop(event: CdkDragDrop<Tarea[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const tarea = event.previousContainer.data[event.previousIndex];
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    
      if (event.container.id === 'todoList') tarea.estado = 'todo';
      if (event.container.id === 'doingList') tarea.estado = 'doing';
      if (event.container.id === 'doneList') tarea.estado = 'done';
      this.guardarEnLocalStorage();
    }
  }

  guardarEnLocalStorage() {
    const data = {
      todo: this.todo,
      doing: this.doing,
      done: this.done
    };
    localStorage.setItem('kanban', JSON.stringify(data));
  }

  cargarDesdeLocalStorage() {
    const data = localStorage.getItem('kanban');
    if (data) {
      const parsed = JSON.parse(data);
      this.todo = parsed.todo || [];
      this.doing = parsed.doing || [];
      this.done = parsed.done || [];
    }
  }
}
