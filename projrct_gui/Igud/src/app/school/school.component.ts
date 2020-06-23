import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../Services/school.service';
@Component({
  selector: 'school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {

  constructor(private schoolService:SchoolService) { }

  ngOnInit() {
  
  }

}
