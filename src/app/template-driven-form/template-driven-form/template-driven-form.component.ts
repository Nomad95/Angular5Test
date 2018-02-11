import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  @ViewChild('skuForm') skuForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log("form: ", form);
  }
}
