import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, ...allArgs:string[]): string {

    return value + " " + allArgs[0] +   " " +allArgs[1]
  }

}
