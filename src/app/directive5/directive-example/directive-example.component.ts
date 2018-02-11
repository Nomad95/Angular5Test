import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent {
  private someComponentVariable = true;
  private someNumber = 4;
  private numbers = [10, 11, 12, 13, 14, 15, 16];
  private myVar = 3;
  private colorVar = "red";
  private isGreen = true;
  private trueValue = true;

}
