import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

// Define an interface/type for better type safety
interface Employee {
  empNo: number;
  fullName: string;
  gender: string;
  email: string;
  status: 'Regular' | 'Contractual' | 'Probationary';
  salary: number;
  department: 'IT' | 'HR' | 'Finance' | 'Sales';
  hireDate: Date;
  phone: string;
  // PHOTO PROPERTY REMOVED
}

@Component({
  selector: 'app-employee-directory',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './employee-directory.html',
  styleUrl: './employee-directory.css',
})
export class EmployeeDirectory {

  selectedEmpNo: number | null = null;
  
  employees: Employee[] = [
    {
      empNo: 1001,
      fullName: 'Julien Michael Punsalan',
      gender: 'Male',
      email: 'julien@company.com',
      status: 'Regular',
      salary: 45000,
      department: 'IT',
      hireDate: new Date('2022-08-15'),
      phone: '0917-123-4567',
      // PHOTO DATA REMOVED
    },
    {
      empNo: 1002,
      fullName: 'Anna Santos',
      gender: 'Female',
      email: 'anna@company.com',
      status: 'Contractual',
      salary: 25000,
      department: 'Sales',
      hireDate: new Date('2023-11-01'),
      phone: '0999-876-5432',
      // PHOTO DATA REMOVED
    },
    {
      empNo: 1003,
      fullName: 'Mark Reyes',
      gender: 'Male',
      email: 'mark@company.com',
      status: 'Probationary',
      salary: 28000,
      department: 'HR',
      hireDate: new Date('2024-01-20'),
      phone: '0922-345-6789',
      // PHOTO DATA REMOVED
    }
  ];

  newEmployee: Employee = this.resetNewEmployee();
  
  departments = ['IT', 'HR', 'Finance', 'Sales']; 

  // Method to reset the form model
  resetNewEmployee(): Employee {
    return {
      empNo: this.employees.length > 0 ? Math.max(...this.employees.map(e => e.empNo)) + 1 : 1001,
      fullName: '',
      gender: 'Male',
      email: '',
      status: 'Probationary',
      salary: 0,
      department: 'IT',
      hireDate: new Date(),
      phone: '',
      // PHOTO PROPERTY REMOVED
    };
  }

  // Method to add the new employee
  addEmployee(): void {
    if (this.newEmployee.fullName && this.newEmployee.email && this.newEmployee.salary > 0) {
      const employeeToAdd = { 
        ...this.newEmployee, 
        hireDate: new Date(this.newEmployee.hireDate) 
      };
      this.employees.push(employeeToAdd); 
      this.newEmployee = this.resetNewEmployee(); 
      console.log('Employee Added!', this.employees);
    } else {
      alert('Please fill in all required fields (Name, Email, and a positive Salary).');
    }
  }

  selectEmployee(empNo: number): void {
    this.selectedEmpNo = empNo;
  }
}