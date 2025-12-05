import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-error',
  standalone: true, 
  imports: [], 
  templateUrl: './error.html', // Correctly referencing your error.html
  styleUrl: './error.css',
})
export class ErrorComponent { // The class name used in app.routes.ts
  
  errorCode: number = 404;
  errorMessage: string = 'Page Not Found';

  constructor(private router: Router) {
    // Inject the Router
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}