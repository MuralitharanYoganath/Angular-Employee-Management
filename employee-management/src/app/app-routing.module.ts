import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

// Define your routes table
const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },  // List all employees
  { path: 'create-employee', component: CreateEmployeeComponent },  // Add employee form
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },  // Update employee form
  { path: 'employee-details/:id', component: EmployeeDetailsComponent },  // View employee details
  { path: '', redirectTo: '/employees', pathMatch: 'full' },  // Default route to employee list
  { path: '**', redirectTo: '/employees' }  // Wildcard route for a 404 page (optional)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Register the routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
