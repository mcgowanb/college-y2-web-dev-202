import { Component, OnInit, Input } from '@angular/core';
import { ClassMate } from '../class-mate';

@Component({
  selector: 'app-class-mate',
  templateUrl: './class-mate.component.html',
  styleUrls: ['./class-mate.component.css']
})
export class ClassMateComponent implements OnInit {
  @Input() mate: ClassMate;
  constructor() {   }

  ngOnInit() {
  }

}
