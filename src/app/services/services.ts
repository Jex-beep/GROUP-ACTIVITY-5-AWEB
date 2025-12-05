import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for *ngFor or @for in the template

// Define an interface for the service objects
interface CarService {
  title: string;
  description: string;
  icon: string; // Placeholder for a symbolic icon/emoji
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  
  // Array of services offered by the dealership
  carServices: CarService[] = [
    {
      title: '150-Point Inspection',
      description: 'Every vehicle undergoes a meticulous check covering mechanical, electrical, safety, and cosmetic components for your peace of mind.',
      icon: ''
    },
    {
      title: 'Flexible Financing Options',
      description: 'We work with a wide network of lenders to secure the best loan rates and terms, regardless of your credit history.',
      icon: ''
    },
    {
      title: 'Trade-In Valuations',
      description: 'Get a quick, fair, and competitive appraisal for your current vehicle to put towards your next purchase.',
      icon: ''
    },
    {
      title: 'Extended Warranty Plans',
      description: 'Protect your investment long after you drive off the lot with our affordable extended powertrain and comprehensive coverage packages.',
      icon: ''
    },
    {
      title: 'Vehicle History Reports',
      description: 'Complete transparency is guaranteed. We provide complimentary CarFax/AutoCheck reports with every car.',
      icon: ''
    }
  ];

  constructor() {
    // Component initialization
  }
}