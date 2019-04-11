import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.css']
})
export class NormalComponent implements OnInit {

  @Input() data: any = null;

  constructor() { }

  ngOnInit() {
  }

}
