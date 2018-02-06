import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service3/service.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
  providers: []
})
export class Component1Component implements OnInit {
  private variable1 = 1;
  private variable2 = 'Dupb';
  private strings: string[] = [];
  private strigns2: Array<string> = [];
  private variable3: any;

  private fromChild1: number;
  private fromChild2: string;

  constructor(private service: ServiceService) { }

  ngOnInit() {
  }

  handleChild1(numberFromChild) {
    this.fromChild1 = numberFromChild;
  }

  handleChild2(stringFromChild) {
    this.fromChild2 = stringFromChild;
  }

}
