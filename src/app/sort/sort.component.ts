import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  
  originalEmps : Employee[] = [
    new Employee(1,'Shaik',4000),
    new Employee(4,'Ravi',2500),
    new Employee(3,'Dinesh',3600),
    new Employee(5,'Dilip',2400),
    new Employee(2,'Rahul',4500),
  ];

  employees: Employee[] = [];

  constructor() { 
    this.employees = this.originalEmps;
  }

  str:string="";
  sortcolumn = 'empid';
  order = 1;

  ngOnInit(): void {
  }
  onSortClick(){
    this.employees = this.originalEmps.sort((emp1,emp2)=>{
      if(this.sortcolumn == 'empid'){
        return (emp1[this.sortcolumn] - emp2[this.sortcolumn]) * this.order;                   
      }else if(this.sortcolumn == 'empname'){
        return (emp1[this.sortcolumn].charCodeAt(0) - emp2[this.sortcolumn].charCodeAt(0)) * this.order; 
      }else if(this.sortcolumn == 'salary'){
        return (emp1[this.sortcolumn] - emp2[this.sortcolumn]) * this.order;                   
      }
    });
  }
  onSearchClick(){
    this.employees = this.originalEmps.filter((emp)=>{
      return emp.empname.toLowerCase().indexOf(this.str.toLowerCase())>=0
    });
  }

}
