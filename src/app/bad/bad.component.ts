import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bad',
  templateUrl: './bad.component.html',
  styleUrls: ['./bad.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadComponent implements OnInit {

  @Input() data: any = null;

  constructor() { }

  ngOnInit() {
  }

}
