import {
  AsyncPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NewPipeExamplePipe } from '../../pipe/new-pipe-example.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    JsonPipe,
    AsyncPipe,
    NewPipeExamplePipe,
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
})
export class PipeComponent {
  firstName: string = 'Angular';
  example: string = 'This is my first Project';
  currentdate: Date = new Date();
  jsonObject: any = {
      name: 'Shubhangi',
      city: 'Pune',
      emplId: 123 ,
      state: ''};

  currentTime: Observable<Date> = new Observable<Date>();
  constructor() {
    this.currentTime = new Observable<Date>((observer) => {
      setInterval(() => observer.next(new Date()), 1000);
    });
  }
}
