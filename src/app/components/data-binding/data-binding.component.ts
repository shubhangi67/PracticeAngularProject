import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  // Declaration of the variable
  // There are four types of datatype
  // 1. String
  // 2. Number
  // 3. Boolean
  // 4. Date
  // 5. Any
  // 6. Array
  // 7. Object
  // 8. Null
  // 9. Undefined
  //example of each variable
  //String
  name:string = "Angular";
  //Number
  age:number = 10;
  //Boolean
  isTrue:boolean = true;
  //Date
  dob:Date = new Date();
  //Any
  anyType:any = "Any Type";
  //Array
  arrayType:Array<string> = ["Angular","React","Vue"];
  //Object
  objectType:Object = {name:"Angular",version:"10"};
  //Null
  nullType:null = null;
  //Undefined
  undefinedType:undefined = undefined;

  //signal

  constructor()
  {

  }
}
