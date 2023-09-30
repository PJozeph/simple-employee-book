import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing-module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

@NgModule({
    declarations: [EmployeeListComponent, EmployeeDetailsComponent, EmployeeEditComponent],
    imports: [CommonModule, EmployeeRoutingModule],
})
export class EmployeeModule {}
