import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortList',
})
export class SortListPipe implements PipeTransform {

  transform(value: any, fieldName: string = '') {
    if (fieldName === '') {
      console.log('hi');
      return value.sort();
    }
    return value.sort((a, b) => {
      console.log(a[fieldName] - b[fieldName]);
      return a[fieldName] < b[fieldName] ? -1 : 1;
    });
  }

}
