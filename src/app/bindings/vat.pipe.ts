import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vat'
})
export class VatPipe implements PipeTransform {
  public transform(value: any, ...args: any[]): any {
    return value * 1.19;
  }
}
