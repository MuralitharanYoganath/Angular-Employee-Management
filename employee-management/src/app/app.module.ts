import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Import the AppRoutingModule
import { FormsModule } from '@angular/forms';  // Import the FormsModule
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';  // Import the CreateEmployeeComponent
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },  // List all employees
  { path: 'create-employee', component: CreateEmployeeComponent },  // Add employee form
  { path: '', redirectTo: '/employees', pathMatch: 'full' },  // Default route to employee list
  { path: '**', redirectTo: '/employees' }  // Wildcard route for a 404 page (optional)
];

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
