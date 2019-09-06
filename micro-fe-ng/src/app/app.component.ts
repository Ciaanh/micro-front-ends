import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None // encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {

  @Input() name: string;
  @Output() helloEvt: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
