import { Component, Input } from '@angular/core';
import { Student } from 'src/app/myClasses/student';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() student!: Student
}
