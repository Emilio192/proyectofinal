import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'costo'
})
export class CostoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const admin='amdin123@gmail.com';
    return admin;
  }

}
