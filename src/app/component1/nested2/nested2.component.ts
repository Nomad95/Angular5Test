import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nested2',
  templateUrl: './nested2.component.html',
  styleUrls: ['./nested2.component.css'],
  providers: []
})
export class Nested2Component implements OnInit {
  @Input() name: string = '';
  @Output() onSomething: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emit(someString) {
    this.onSomething.emit(someString);
  }

}
