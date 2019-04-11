import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodComponent implements OnInit {

  @Input() data: any = null;
  @Input() flag: boolean;

  constructor() { }

  ngOnInit() {
  }

}
