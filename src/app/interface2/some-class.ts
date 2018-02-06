import {Example} from './example';

export class SomeClass implements Example{

  constructor(private var1: number, public var2: string){}

  doThing() {
    console.log("i do pa");
  }
}
