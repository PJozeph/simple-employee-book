import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, Observable, of } from 'rxjs';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
    //     employee$: Observable<Employee | undefined> = this.activatedRoute.paramMap.pipe(
    //         mergeMap(params => this.employeeService.getEmployeeById(Number(params.get('id'))))

    employee: Employee | undefined;

    constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService) {}
    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(params => {
            this.employeeService.getEmployeeById(Number(params.get('id'))).subscribe(employee => {
                this.employee = employee;
            });
        });
    }
}
