import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortList',
  pure: false
})
export class SortListPipe implements PipeTransform {

  transform(value: any, fieldName: string = '') {
    if (fieldName === '') {
      console.log('hi');
      return value.sort();
    }
    return value.sort((a, b) => {
      return a[fieldName].toLowerCase() < b[fieldName].toLowerCase() ? -1 : 1;
    });
  }

}
