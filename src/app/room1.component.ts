import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component ({
  selector: 'room1',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './room1.component.html',
  styleUrl: './room1.component.css'
})
export class Room1Component { }
