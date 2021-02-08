import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {
    let aux = value.split('');
    aux = aux.reverse();
    return aux.join('');
  }

}
