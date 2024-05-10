import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'espar',
  standalone: true
})
export class EsparPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "EL año es: " + value;
  }

}
