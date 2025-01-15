import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AuthButtonComponent } from './authButton.component';
import { AuthUserComponent } from './authUser.component';
import { AuthService } from '@auth0/auth0-angular';
import { WebService } from './web.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

/**
 * Component for rendering the navigation bar
 * This component provides the navigation functionality, including the integration of
 * authentication-related components such as AuthButtonComponent and AuthUserComponent.
 * It allows for navigating through various routes in the application while providing
 * access to authentication actions.
 */
@Component({
  selector: 'navigation',
  standalone: true,
  imports: [RouterOutlet, RouterModule, AuthButtonComponent, AuthUserComponent, CommonModule],
  templateUrl: './nav.component.html'
})
export class NavComponent {

  /**
   * Constructor for the NavComponent
   * @param authService Service to handle user authentication and status.
   * @param webService Service to interact with external APIs.
   * @param router Angular Router for navigation between views.
   */
 constructor(public authService: AuthService, private webService: WebService, private router: Router) { }




 }

