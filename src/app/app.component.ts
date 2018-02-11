import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'root-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  goSomewhere() {
    this.router.navigate(['/nested', 5],{queryParams: {page: 'ebe'} });
  }

  getParams() { //in onInit
    this.activatedRoute.params.subscribe( params => {
      let param = params['id'];
    });

    this.activatedRoute.queryParams.subscribe( queryParams => {
      let queryParam = queryParams['date'];
    });
  }
}
