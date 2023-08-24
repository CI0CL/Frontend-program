import { Pipe, PipeTransform } from '@angular/core';
import { Match } from 'src/app/shared/match';

@Pipe({
  name: 'MatchFilter'
})
export class MatchFilterPipe implements PipeTransform {

  transform(products: Match[], filter: string = ''): Match[] {
    const filterLowercase = filter.toLowerCase();
    return products.filter(({date}) => date.toLowerCase().indexOf(filterLowercase) !== -1);
  }

}