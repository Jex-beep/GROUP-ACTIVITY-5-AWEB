import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { EmployeeDirectory } from './employee-directory/employee-directory';
import { Services } from './services/services';
import { ErrorComponent } from './error/error'; 

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'employees',
        component: EmployeeDirectory
    },
    {
        path: 'services',
        component: Services
    },
    {
        path: '**',
        component: ErrorComponent 
    }
];