import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css']
})
export class ServiceExampleComponent implements OnInit {

  constructor(private service: ServiceService) {
  }

  ngOnInit() {
    this.service.getSomething('parameter').subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    }, () => {
      console.log('completed');
    });
  }

}
