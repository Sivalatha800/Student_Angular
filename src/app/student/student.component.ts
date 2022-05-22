import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  studentdetails = [
    {
      rollno: '12001',
      name: 'Bob',
      branch: 'CSE',
      year: '1st Year',
    },
  ];

  updatelist(obj: any) {
    this.studentdetails.push(obj);
  }
  constructor() {}

  ngOnInit(): void {}
}
