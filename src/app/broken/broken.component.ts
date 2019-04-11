import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-broken',
  templateUrl: './broken.component.html',
  styleUrls: ['./broken.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrokenComponent implements OnInit {

  @Input() data: any = null;

  constructor() { }

  ngOnInit() {
  }

}
