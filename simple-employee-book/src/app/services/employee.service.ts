import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable({
    providedIn: 'root',
})
export class EmployeeService {
    constructor() {}
    private employees$ = new Subject<Employee[]>();

    private employees: Employee[] = [
        {
            id: 1,
            name: 'Foo Bar',
            email: 'foo@gmail.com',
            phone: '1234567890',
            department: 'IT',
        },
        {
            id: 2,
            name: 'BAR Bar',
            email: 'bar@gmail.com',
            phone: '1234567890',
            department: 'IT',
        },
    ];

    public getEmployeeById(id: number): Observable<Employee | undefined> {
        const employee = this.employees.find(t => t.id === id);
        return of(employee);
    }

    public getEmployees(): Observable<Employee[]> {
        return this.employees$.asObservable();
    }

    public addEmployee(employee: Employee): Observable<Employee[]> {
        this.employees.push(employee);
        this.employees$.next([...this.employees]);
        return of([...this.employees]);
    }

    public deleteTaskById(id: number): Observable<Employee[]> {
        this.employees = this.employees.filter(task => task.id !== id);
        return of([...this.employees]);
    }

    public updateTask(task: Employee): Observable<Employee[]> {
        const index = this.employees.findIndex(t => t.id === task.id);
        this.employees[index] = task;
        return of([...this.employees]);
    }
}
