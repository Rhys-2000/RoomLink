import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { RoomsComponent } from './rooms.component';
import { Room1Component } from './room1.component';




export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
      path: 'rooms',
      component: RoomsComponent
    },
  {
      path: 'room1',
      component: Room1Component
    }



];
