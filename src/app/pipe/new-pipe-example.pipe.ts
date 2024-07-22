import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newPipeExample',
  standalone: true
})
export class NewPipeExamplePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value != null && value != undefined && value != '')
    {
      return value
    }
    else
    {
      return "NA";
    }
  }

}
