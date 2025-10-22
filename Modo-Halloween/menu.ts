import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatSidenavModule, MatSlideToggleModule], 
  templateUrl: './menu.html'
})
export class Menu {


  toggleDarkMode(event: any): void {
  const darkModeEnabled = event.checked;
  const container = document.querySelector('.example-container');

  if (darkModeEnabled) {
    container?.classList.add('dark-mode');
  } else {
    container?.classList.remove('dark-mode');
  }
}


}

