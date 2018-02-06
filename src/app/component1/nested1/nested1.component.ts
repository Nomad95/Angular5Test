import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nested1',
  templateUrl: './nested1.component.html',
  styleUrls: ['./nested1.component.css']
})
export class Nested1Component implements OnInit {
  @Input() number: number;
  @Output() onSomething: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emit(someNumber) {
    this.onSomething.emit(someNumber);
  }
}
