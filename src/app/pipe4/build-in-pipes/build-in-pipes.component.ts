import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-in-pipes',
  templateUrl: './build-in-pipes.component.html',
  styleUrls: ['./build-in-pipes.component.css']
})
export class BuiltInPipesComponent implements OnInit {

  currency: number = 23.99;
  date = new Date();
  uppercase = "duzelitery";
  json = {
    cos1: "val1",
    cos2: "val2"
  };
  percent = 0.94;

  ngOnInit() {
  }

}
