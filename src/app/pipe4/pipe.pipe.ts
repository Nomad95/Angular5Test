import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divide'
})
export class PipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value/2;
  }

}
