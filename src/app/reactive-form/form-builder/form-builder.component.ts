import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['ABC123', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];

    // this.sku.valueChanges.subscribe( value => {
    //   console.log("value changed to: ", value);
    // });
  }

  ngOnInit() {
  }

  onSubmit(value: string) {
    console.log("You have submitted: ", value);
  }

}
