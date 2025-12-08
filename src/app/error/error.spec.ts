import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.html', 
  styleUrl: './error.css',

})

export class ErrorComponent { 

  errorCode: number = 404;
  errorMessage: string = 'Page Not Found';

  constructor(private router: Router) { 

  }

  goToHome(): void {
    this.router.navigate(['/']);
  }

}