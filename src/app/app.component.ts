import { Component, ViewChild } from '@angular/core';
import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Student_Angular';

  @ViewChild(StudentComponent) viewdata!: StudentComponent;

  inputobj = {
    rollno: '',
    name: '',
    branch: '',
    year: '',
  };

  displaydetails(rollno: any, name: any, branch: any, year: any) {
    this.inputobj = { rollno: rollno, name: name, branch: branch, year: year };
    this.viewdata.updatelist(this.inputobj);
  }
}
