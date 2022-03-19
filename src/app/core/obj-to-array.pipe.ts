import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objToArray',
})
export class ObjToArrayPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    console.log(value);
    return [];
  }
}
